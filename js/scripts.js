let budgete = {
    "budgetCategory": {
        "id": 3
    },
    "budgetSubCategory": {
        "id": 79
    },
    "meta": {
        "userApp": {
            "name": "flari aoru o",
            "email": "alriuaoiu@aliruoa.com",
            "phone": "4335345987"
        },
        "questions": {
            "start": "more_than_3_months",
            "property_type": "residence",
            "contact_hour": "afternoon",
            "person_type": "pj"
        },
        "interest": "saber_apenas_precos_a_fim_de_comparacao"
    },
    "userApp": {
        "name": "flari aoru o",
        "email": "alriuaoiu@aliruoa.com",
        "phone": "4335345987"
    },
    "city": "Santo Antônio da Platina",
    "neighborhood": "",
    "state": "PR",
    "zipCode": "86430-000",
    "title": "Falfioa ",
    "description": "aliuasoi sliasjd fasdkl iuh l",
    "estimatedPrice": "2"
};

/**
 * Envia requisição para o servidor
 * @param {string} data 
 * @param {string} action 
 * @param {string} method 
 */

const request = (data, action, method) => {
    let request = new XMLHttpRequest(data);
    request.onreadystatechange = function () {
        if (request.status === 201) {
            // Mensagem de sucesso
        } else {
            if(request.readyState === request.DONE){
            // Backup, e mensagem de sucesso também!
            }
        }
    }

    request.open(method, action);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(data));
}

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if(!isValidElement(element)) {
        data[element.name] = element.value;
    }

    return data;
  
}, {});

/**
 * 
 * @param {Event} event 
 */
  
const handleFormSubmit = (event, form) => {
    event.preventDefault();
    const data = formToJSON(form.elements);
    const dataContainer = document.getElementsByClassName('content')[0];
    dataContainer.textContent = JSON.stringify(data, null, "  ");
};

/**
 * Checks that an element has a non-empty `name` and `value` property.
 * @param  {Element} element  the element to check
 * @return {Bool}             true if the element is an input, false if not
 */
const isValidElement = element => {
    return element.name && element.value;
};