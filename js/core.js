/**
 * Envia requisição HTTP para o servidor
 * @param {string} data 
 * @param {string} action 
 * @param {string} method 
 */
const request = (action, method, doneCallback, data = console.log, waitCallback = console.log, fallback = console.log) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === request.DONE) {
            if(request.status === 200 || request.status === 201)
                doneCallback(request.responseURL,request.responseText);
            else fallback(data, request.responseText);
        } else {
            waitCallback(request.responseURL,request.responseText);
        }
    }
    request.open(method, action, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
}

/**
 * Request de backup, caso o request principal dê erro
 * @param {*} data 
 * @param {*} response 
 */
const backup = (data, response) => {
    let fallBackData = {
        "name" : "Plugin do Entenda Antes",
        "email" : "contato@entendaantes.com.br",
        "phone" : "4335344138",
        "title" : "Contato do blog",
        "category" : "comercial",
        "description" : `${JSON.stringify(data)} ${JSON.stringify(response)}`
    };
    request('http://localhost:8080/feedback', 'post', showThanks, fallBackData);
}

/**
 * 
 * @param {string} cep
 */
const findCep = (cep) => {
    if(cep.length === 8){
        request(`https://viacep.com.br/ws/${cep}/json/`, 'get', handleCepResponse);
    }
}

/**
 * Manipula a resposta da requisição ao viacep. 
 * Se o cep não existir, tenta o cep geral. Se existir, preenche o form.
 * @param {JSON} data 
 */
const handleCepResponse = (url, data) => {
    data = JSON.parse(data);
    if(data.erro === true){
        console.log("cep não encontrado");
        var cep = url.split("/")[4];
        setCityFields({cep: cep, ibge: '000000'});
    }
    else setCityFields(data);
}

/**
 * Seta os campos relacionados à cidade
 * @param {JSON} data 
 */
const setCityFields = (data) => {
  if(data.erro === true){
    // Todo: tratar erro de cep vindo da api VIACEP
  } else {
    Array.from(document.getElementsByName('zipCode')).forEach(z =>{
        z.value = data.cep || '';
    });
    Array.from(document.getElementsByName('city')).forEach(v =>{
        v.value = data.localidade || '';
    });
    Array.from(document.getElementsByName('state')).forEach(v =>{
        v.value = data.uf || '';
    });
    Array.from(document.getElementsByName('city.ibge')).forEach(v =>{
        v.value = data.ibge || '';
    });
  }
}

/**
 * Captura os dados do formulário em HTML e retorna-os em JSON
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  //TODO: Recursão para não haver limite de profundidade
  if(isTextField(element) || isChecked(element)) {
    let keys = element.name.split(".");
    if ( keys.length === 1 ){
        data[keys[0]] = element.value;
    } else if(keys.length === 2){
        data[keys[0]] = data[keys[0]] || {};
        data[keys[0]][keys[1]] = element.value;
    } else {
        data[keys[0]] = data[keys[0]] || {};
        data[keys[0]][keys[1]] = data[keys[0]][keys[1]] || {};
        data[keys[0]][keys[1]][keys[2]] = element.value;
    }
  }

  return data;
}, {});



/**
 * Manipula os dados do formulário antes que ele seja enviado para a API
 * @param {Event} event 
 * @param {form} form
 */
const handleFormSubmit = (event, form) => {
    event.preventDefault();
    const data = formToJSON(form.elements);
    const normalizedData = normalize(data);
    request( form.action, 'post', showThanks, normalizedData, showWait, backup);
};

/**
 * Coloca os campos com o aninhamento correto, e num formato que a API aceite
 * @param {JSON} data 
 */
const normalize = (data) => {
    data.meta.userApp = data.userApp;
    data.meta.questions = data.questions;
    data.meta.city = {city: data.city, ibge: data.meta.city.ibge};
    return data;
}

/**
 * Checa se o elemento não está vazio
 * @param  {Element} element
 * @return {boolean}
 */
const isFormField = element => {
    return !!element && element.name && ['TEXTAREA', 'INPUT'].includes(element.nodeName);
};

/**
 * Verifica se o elemento é checkable, e se está marcado
 * @param {HTMLElement} element 
 */
const isChecked = element => {
    return (isCheckableField() || element.checked);
};
/**
 * Verifica se é um elemento checável (duh), seja checkbox ou radiobutton
 * @param element
 * @returns {boolean}
 */
const isCheckableField = element => {
    return !!element && ['checkbox', 'radio'].includes(element.type);
}

/**
 * Verifica se o elemento de texto está vazio
 * @param element
 * @returns {boolean}
 */
const isEmptyValue = element => {
    if (element.inputmask) {
        return !element.inputmask.isComplete();
    } else {
        return element.value === "";
    }
}

const isOptional = element => {
    return Array.from(element.classList).includes('ea-optional-field');
}

/**
 * Exibe a tela de agradecimento ao leitor
 */
const showThanks = () => {
    Array.from(document.getElementsByClassName('ea-wait')).forEach(w => {
        w.classList.add('ea-hidden');
    });
    Array.from(document.getElementsByClassName('ea-success')).forEach(s => {
        s.classList.remove('ea-hidden');
    })
    console.log("thanks!");

}

const showWait = () => {
    Array.from(document.getElementsByClassName('ea-wait')).forEach(w => {
        w.classList.remove('ea-hidden');
    });
    Array.from(document.getElementsByClassName('ea-success')).forEach(s => {
        s.classList.add('ea-hidden');
    })
}

/** Verifica se é um campo do tipo 'text'
 *
 * @param element
 * @returns {boolean}
 */
const isTextField = element => {
    return ['text', 'hidden'].includes(element.type) || element.nodeName === 'TEXTAREA';
}

/** Verifica se todos os campos do step recebido estão preenchidos.
 *
 * @param className
 */

 const validateStep = (className) => {
    stepObjects[className].validateStep();
 }

 const prev = className => {
    stepObjects[className].showPrev();
 }

 const switchCategories = (elementId, element) => {
    let cats = document.getElementById('ea-hidden-cats' + elementId);
    let text = element.getElementsByTagName('label')[0];

    if (cats.classList.contains('ea-hidden')){
        cats.classList.remove('ea-hidden');
        text.innerHTML = "Menos...";
    }
    else {
        cats.classList.add('ea-hidden');
        text.innerHTML = "Mais...";
    }

 }