
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
          callback(JSON.parse(request.responseText));
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
 * @param {HTMLElement} element 
 */
const findCep = (element) => {
  cep = element.inputmask.unmaskedvalue();
  if(cep.length === 8){
    request(`https://viacep.com.br/ws/${cep}/json/`, 'get', handleCepResponse);
  }
}

/**
 * Manipula a resposta da requisição ao viacep. 
 * Se o cep não existir, tenta o cep geral. Se existir, preenche o form.
 * @param {JSON} data 
 */
const handleCepResponse = (data) => {
  if(data.erro)
    request(`https://viacep.com.br/ws/${cep.substring(0,5)}000/json`, 'get', setCityFields);
  else
    setCityFields(data);
}

/**
 * Seta os campos relacionados à cidade
 * @param {JSON} data 
 */
const setCityFields = (data) => {
  if(data.erro === 'true'){
    // Todo: rotina de cep inválido
  } else {
    document.getElementsByName('city')[0].value = data.localidade || document.getElementsByName('city')[0].value;
    document.getElementsByName('state')[0].value = data.uf || document.getElementsByName('state')[0].value;
    document.getElementsByName('city.ibge')[0].value = data.ibge || document.getElementsByName('city.ibge')[0].value;
  }
}

/**
 * Captura os dados do formulário em HTML e retorna-os em JSON
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  if(isValidElement(element) && isValidValue(element)) {
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
    normalize(data);
    request( form.action, 'post', data);
};

/**
 * Coloca os campos com o aninhamento correto, e num formato que a API aceite
 * @param {JSON} data 
 */
const normalize = (data) => {
    data.userApp.phone = data.userApp.phone.replace("")
    data.meta.userApp = data.userApp;
    data.meta.questions = data.questions;
    data.meta.city = data.city;
}

/**
 * Checa se o elemento não está vazio
 * @param  {Element} element  
 * @return {Bool}
 */
const isValidElement = element => {
    return element.name && element.value;
};

/**
 * Verifica se é checkbox ou radiobutton, e se está marcado
 * @param {HTMLElement} element 
 */
const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};