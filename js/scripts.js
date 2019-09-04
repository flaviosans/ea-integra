/**
 * Envia requisição HTTP para o servidor
 * @param {string} data 
 * @param {string} action 
 * @param {string} method 
 */
const request = (action, method, callback, data = null) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === request.DONE) {
           return callback(JSON.parse(request.responseText));
        } else {
          console.log(`State: ${request.readyState}, status: ${request.status}`);
        }
    }
    request.open(method, action, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
}

/**
 * 
 * @param {string} cep
 */
const findCep = (cep) => {
    if(cep.length === 8){
        return request(`https://viacep.com.br/ws/${cep}/json/`, 'get', handleCepResponse);
    }
}

/**
 * Manipula a resposta da requisição ao viacep. 
 * Se o cep não existir, tenta o cep geral. Se existir, preenche o form.
 * @param {JSON} data 
 */
const handleCepResponse = (data) => {
    if(data.erro === true)
        console.log("deu erro.");
    else
        setCityFields(data);
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
  if(isFormField(element) || isChecked(element)) {
    let keys = element.name.split(".");
    if ( keys.length == 1 ){
        data[keys[0]] = element.value;
    } else {
        data[keys[0]] = data[keys[0]] || {};
        data[keys[0]][keys[1]] = element.value;
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
    //TODO: Mostrar um loader até a requisição voltar
    request( form.action, 'post', showThanks, normalizedData);
};

/**
 * Coloca os campos com o aninhamento correto, e num formato que a API aceite
 * @param {JSON} data 
 */
const normalize = (data) => {
    data.meta.userApp = data.userApp;
    data.meta.questions = data.questions;
    data.meta.city = data.city;
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

/**
 * Exibe a tela de agradecimento ao leitor
 */
const showThanks = () => {
    //TODO: rotina de "obrigado por preencher" vem aqui
    console.log("thanks!");
}

/** Verifica se é um campo do tipo 'text'
 *
 * @param element
 * @returns {boolean}
 */
const isTextField = element => {
    return element.type === 'text' || element.nodeName === 'TEXTAREA';
}

/** Verifica se todos os campos do step recebido estão preenchidos.
 *
 * @param className
 */

 const validateStep = className => {
    stepObjects[className].validateStep();
 }

 const prev = className => {
    stepObjects[className].showPrev();
 }
const showErrors = (element) => {
    element.style.background = '#c7c7c7';
}