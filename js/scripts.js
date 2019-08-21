
/**
 * Envia requisição HTTP para o servidor
 * @param {string} data 
 * @param {string} action 
 * @param {string} method 
 */

const request = (action, method, successcallback, failcallback, data = null) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.status === 200 || request.status === 201) {
            successcallback(request.responseText);
        } else {
            if(request.readyState === request.DONE){
              failcallback(request.responseText);
            }
        }
    }

    request.open(method, action, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
}



const findCep = (element) => {
  cep = element.inputmask.unmaskedvalue();
  if(cep.length === 8){
    console.log("rotina de cep completo "+cep);
    request(`https://viacep.com.br/ws/${cep}/json/`, 'get');
  } else if(cep.length === 5){
    console.log("rotina de cep geral "+cep);
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

const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};