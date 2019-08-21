
/**
 * Envia requisição para o servidor
 * @param {string} data 
 * @param {string} action 
 * @param {string} method 
 */

const request = (data, action, method) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.status === 201) {
            // Mensagem de sucesso
        } else {
            if(request.readyState === request.DONE){
            // Backup, e mensagem de sucesso também!
            }
        }
    }

    request.open(method, action, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
}

/**
 * Retrieves input data from a form and returns it as a JSON object.
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
    const dataContainer = document.getElementsByClassName('content')[0];
    
    // Organiza o JSON
    data.meta.userApp = data.userApp;
    data.meta.questions = data.questions;
    data.meta.city = data.city;

    console.log(data);
    dataContainer.textContent = JSON.stringify(data, null, "  ");
    request(data, form.action, 'post');
};

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