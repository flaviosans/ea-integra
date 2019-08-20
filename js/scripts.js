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
 * 
 * @param {Event} event 
 */
  
const handleFormSubmit = (event, form) => {
    event.preventDefault();
    const data = formToJSON(form.elements);
    const dataContainer = document.getElementsByClassName('content')[0];
    dataContainer.textContent = JSON.stringify(data, null, "  ");

    // Organiza o JSON
    data.meta.userApp = data.userApp;
    data.meta.questions = data.questions;
    data.meta.city = data.city;
    console.log(data);
};

/**
 * Checks that an element has a non-empty `name` and `value` property.
 * @param  {Element} element  the element to check
 * @return {Bool}             true if the element is an input, false if not
 */
const isValidElement = element => {
    return element.name && element.value;
};

const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

const listQuestionsBudget =
{
  label: 'Lista de Perguntas',
  main: [
    {
      // Construção
      id: 1,
      name: 'Construção',
      img: 'assets/images/budget/construction.png',
      class: 'construction',
      subCategories: [
        // subCategorias da Construção
        {
          id: 1,
          quantity: 1,
          name: 'Construção de barracão pré-moldado',
          questionsAux: [
            {
              name: 'Estimativa de Dimensionamento?',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternatives
          ]
        }, // end subcategories Construção de barrcão pré-moldado
        {
          id: 2,
          quantity: 1,
          name: 'Construção em steel frame',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 3,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternatives
          ]
        }, // end of subCategories Construção em steel frame
        {
          id: 3,
          quantity: 1,
          name: 'Construção pré-moldado',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ]
            } // end alternatives
          ]
        }, // end subCategories Construção pré-moldado
        {
          id: 4,
          quantity: 1,
          name: 'Construção de casas',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            } // end alternatives
          ]
        }, // end subCategories Construção de casas
        {
          id: 5,
          quantity: 2,
          name: 'Construção de barracão',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternatives
            {
              name: 'Qual sistema construtivo deseja fazer?',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Concreto feito em obra',
                  value: 'Concreto feito em obra'
                },
                {
                  id: 2,
                  label: 'Pré-moldado',
                  value: 'Pré-moldado'
                },
                {
                  id: 3,
                  label: 'Metálica',
                  value: 'Metálica'
                },
                {
                  id: 4,
                  label: 'Steel Frame',
                  value: 'Steel Frame'
                }
              ],
            } // end alternatives
          ]
        }, // end subCategories Construção de barracão
        {
          id: 6,
          quantity: 2,
          name: 'Construção de muro',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternatives
            {
              name: 'Muro de arrimo?',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Sim',
                  value: 'Sim'
                },
                {
                  id: 2,
                  label: 'Não',
                  value: 'Não'
                }
              ],
            } // end alternatives
          ]
        }, // end subCategories Construção de muro
        {
          id: 7,
          quantity: 0,
          name: 'Construção de piscinas e spas'
        }, // end subCategories Construção de piscinas e spas
        {
          id: 8,
          quantity: 1,
          name: 'Construção de área de lazer',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            } // end alternatives
          ]
        }, // end subCategories Construção de área de lazer
        {
          id: 9,
          quantity: 1,
          name: 'Construção Industrial',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            } // end alternatives
          ]
        }, // end subCategories Construção Industrial
        {
          id: 10,
          quantity: 1,
          name: 'Construção de Prédios',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            } // end alternatives
          ]
        }, // end subCategories Construção de Prédios
        {
          id: 11,
          quantity: 2,
          name: 'Levantamento Topográfico',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternatives
            {
              name: 'Onde será o levantamento topográfico:',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Urbano',
                  value: 'Urbano'
                },
                {
                  id: 2,
                  label: 'Rural',
                  value: 'Rural'
                }
              ],
            } // end alternatives
          ]
        }, // end subCategories Levantamento Topográfico
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ],
    }, // end construct
    {
      id: 2,
      name: 'Reformar e Remodelação',
      img: 'assets/images/budget/reform.png',
      class: 'reform',
      subCategories: [
        // subCategorias da Reformar e Remodelação
        {
          id: 12,
          quantity: 1,
          name: 'Projeto de Reforma',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de Reforma
        {
          id: 13,
          quantity: 2,
          name: 'Projeto de Decoração e interiores',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Qual estilo de decoração mais gosta?',
              id: 2,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de Decoração e interiores
        {
          id: 14,
          quantity: 1,
          name: 'Reforma da Casa',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma da Casa
        {
          id: 15,
          quantity: 1,
          name: 'Reforma da Área de lazer',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma da Área de lazer
        {
          id: 16,
          quantity: 1,
          name: 'Reforma de Telhado',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma de Telhado
        {
          id: 17,
          quantity: 1,
          name: 'Construção de Ambientes',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Construção de Ambientes
        {
          id: 18,
          quantity: 2,
          name: 'Reforma de Fachada',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Estilo de fachada que mais gosta?',
              id: 2,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma de Fachada
        {
          id: 19,
          quantity: 1,
          name: 'Reforma de Jardim',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma de Jardim
        {
          id: 20,
          quantity: 1,
          name: 'Reforma de Prédios',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma de Prédios
        {
          id: 21,
          quantity: 2,
          name: 'Reforma de Barracão',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Qual sistema construtivo predominante do barracão?',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Concreto feito em obra',
                  value: 'Concreto feito em obra'
                },
                {
                  id: 2,
                  label: 'Pré-moldado',
                  value: 'Pré-moldado'
                },
                {
                  id: 3,
                  label: 'Metálico',
                  value: 'Metálico'
                },
                {
                  id: 4,
                  label: 'Steel Frame',
                  value: 'Steel Frame'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma de Barracão
        {
          id: 22,
          quantity: 1,
          name: 'Reforma de Banheiros',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma de Banheiros
        {
          id: 23,
          quantity: 1,
          name: 'Reforma de Imóvel',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Reforma de Imóveis
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ] // end array subcategories
    },
    {
      id: 3,
      name: 'Decoração e Design de Interiores',
      img: 'assets/images/budget/interior_design.png',
      class: 'interior_design',
      subCategories: [
        // subCategorias da Decoração e Design de Interiores
        {
          id: 24,
          quantity: 2,
          name: 'Projeto de Decoração (design de interiores)',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Qual estilo de decoração mais gosta?',
              id: 2,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de Decoração (design de interiores)
        {
          id: 25,
          quantity: 2,
          name: 'Projeto de Iluminação ou luminotécnica',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'O projeto terá efeito decorativo ou técnico?',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Decorativo',
                  value: 'Decorativo'
                },
                {
                  id: 2,
                  label: 'Técnico',
                  value: 'Técnico'
                },
                {
                  id: 3,
                  label: 'Decorativo e Técnico',
                  value: 'Decorativo e Técnico'
                },
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de Iluminação
        {
          id: 26,
          quantity: 0,
          name: 'Comprar Móveis para Escritório'
        }, // end subcategories Comprar Móveis
        {
          id: 27,
          quantity: 1,
          name: 'Instalação de forro: Gesso, pvc, hi-clean e etc...',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalação de forro: Gesso, pvc, hi-clean e etc...
        {
          id: 28,
          quantity: 0,
          name: 'Persianas, cortinas, tapetes e envoxal'
        }, // end subcategories Persianas, cortinas, tapetes e envoxal
        {
          id: 29,
          quantity: 0,
          name: 'Móveis Planejados'
        }, // end subcategories Móveis Planejados
        {
          id: 30,
          quantity: 1,
          name: 'Revestimentos: pisos, porcelanatos, gesso 3D etc...',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Revestimentos: pisos, porcelanatos, gesso 3D etc...
        {
          id: 31,
          quantity: 0,
          name: 'Espelhos, vidros, molduras e quadros'
        }, // end subcategories Espelhos, vidros, molduras e quadros
        {
          id: 32,
          quantity: 1,
          name: 'Portas e janelas',
          questionsAux: [
            {
              name: 'Qual tipo de material:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Madeira',
                  value: 'Madeira'
                },
                {
                  id: 2,
                  label: 'Ferro',
                  value: 'Ferro'
                },
                {
                  id: 3,
                  label: 'Aluminium',
                  value: 'Aluminium'
                },
                {
                  id: 4,
                  label: 'PVC',
                  value: 'PVC'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Portas e janelas
        {
          id: 33,
          quantity: 1,
          name: 'Trabalhos em estofados',
          questionsAux: [
            {
              name: 'Qual tipo de serviço:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Recuperação',
                  value: 'Recuperação'
                },
                {
                  id: 2,
                  label: 'Manutenção',
                  value: 'Manutenção'
                },
                {
                  id: 3,
                  label: 'Fabricação',
                  value: 'Fabricação'
                },
              ],
            }, // end alternative
          ]
        }, // end subcategories Trabalhos em estofados
        {
          id: 34,
          quantity: 1,
          name: 'Deck: Madeira ou pvc',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Deck: Madeira ou pvc
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },
    {
      id: 4,
      name: 'Paisagismo e Jardinagem',
      img: 'assets/images/budget/landscaping.png',
      class: 'landscaping',
      subCategories: [
        // subCategorias do Paisagismo e Jardinagem
        {
          id: 35,
          quantity: 0,
          name: 'Comprar plantas e vasos',
        }, // end subcategories Comprar plantas e vasos
        {
          id: 36,
          quantity: 1,
          name: 'Fazer projeto de Paisagismo',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Fazer projeto de Paisagismo
        {
          id: 37,
          quantity: 1,
          name: 'Fazer manutenção no Jardim',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Fazer manutenção no Jardim
        {
          id: 38,
          quantity: 1,
          name: 'Fazer implantação de um Jardim',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Fazer implantação de um Jardim
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },
    {
      id: 5,
      name: 'Loteamento',
      img: 'assets/images/budget/allotment.png',
      class: 'allotment',
      subCategories: [
        // subCategorias da Loteamento
        {
          id: 39,
          quantity: 1,
          name: 'Fazer o projeto do loteamento',
          questionsAux: [
            {
              name: 'Qual o tamanho do lote?',
              id: 1,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Fazer o projeto do loteamento
        {
          id: 40,
          quantity: 2,
          name: 'Medição e levantamento topográfico da área',
          questionsAux: [
            {
              name: 'Qual o tamanho do lote?',
              id: 1,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
            {
              name: 'Onde será o levantamento topográfico:',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Urbano',
                  value: 'Urbano'
                },
                {
                  id: 2,
                  label: 'Rural',
                  value: 'Rural'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Medição e levantamento topográfico da área
        {
          id: 41,
          quantity: 1,
          name: 'Instalações elétrica para loteamento',
          questionsAux: [
            {
              name: 'Qual o tamanho do lote?',
              id: 1,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalações elétrica para loteamento
        {
          id: 42,
          quantity: 1,
          name: 'Pavimentação de loteamento',
          questionsAux: [
            {
              name: 'Qual o tamanho do lote?',
              id: 1,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Pavimentação de loteamento
        {
          id: 43,
          quantity: 1,
          name: 'Construção de loteamento',
          questionsAux: [
            {
              name: 'Qual o tamanho do lote?',
              id: 1,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Construção de loteamento
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },
    {
      id: 6,
      name: 'Projetos em Geral',
      img: 'assets/images/budget/general_projects.png',
      class: 'general_projects',
      subCategories: [
        // subCategorias da Projetos em Geral
        {
          id: 44,
          quantity: 3,
          name: 'Projeto de Arquitetônico',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento: ',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Qual Padrão do imóvel: ',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Simples',
                  value: 'Simples'
                },
                {
                  id: 2,
                  label: 'Padrão',
                  value: 'Padrão'
                },
                {
                  id: 3,
                  label: 'Alto Padrão',
                  value: 'Alto Padrão'
                },
              ],
            }, // end alternative
            {
              name: 'Qual valor você pretende investir na construção toda? ',
              id: 3,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 30.000',
                  value: 'Menos de 30.000'
                },
                {
                  id: 2,
                  label: 'de 30.000 a 100.000',
                  value: 'de 30.000 a 100.000'
                },
                {
                  id: 3,
                  label: 'de 100.000 a 300.000',
                  value: 'de 100.000 a 300.000'
                },
                {
                  id: 4,
                  label: 'mais de 300.000',
                  value: 'mais de 300.000'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto Arquitetônico
        {
          id: 45,
          quantity: 1,
          name: 'Projeto de Paisagismo',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de Paisagismo
        {
          id: 46,
          quantity: 2,
          name: 'Projeto de decorações de interiores',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento: ',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Qual estilo de decoração mais gosta?',
              id: 2,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de decorações de interiores
        {
          id: 47,
          quantity: 2,
          name: 'Projeto Estrutural',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Quantos andares o imóvel terá:',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: '1 Andar',
                  value: '1 Andar'
                },
                {
                  id: 2,
                  label: '2 a 4 Andares',
                  value: '2 a 4 Andares'
                },
                {
                  id: 3,
                  label: '4 a 8 Andares',
                  value: '4 e 8 Andares'
                },
                {
                  id: 4,
                  label: 'Mais de 8 Andres',
                  value: 'Mais de 8 Andares'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto Estrutural
        {
          id: 48,
          quantity: 1,
          name: 'Projetos complementares: Hidráulica, elétrica e etc...',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projetos complementares: Hidráulica, elétrica e etc...
        {
          id: 49,
          quantity: 1,
          name: 'Projeto de terraplenagem',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de terraplenagem
        {
          id: 50,
          quantity: 1,
          name: 'Projeto de incêndio ou Projeto de bombeiro',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de incêndio ou Projeto de bombeiro
        {
          id: 51,
          quantity: 1,
          name: 'Projeto de ar condicionado',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de ar condicionado
        {
          id: 52,
          quantity: 1,
          name: 'Projeto de acústica',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de acústica
        {
          id: 53,
          quantity: 2,
          name: 'Projeto de iluminação ou luminotécnica',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'O projeto terá efeito decorativo ou técnico?',
              id: 2,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Decorativo',
                  value: 'Decorativo'
                },
                {
                  id: 2,
                  label: 'Técnico',
                  value: 'Técnico'
                },
                {
                  id: 3,
                  label: 'Decorativo e Técnico',
                  value: 'Decorativo e Técnico'
                },
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de iluminação ou luminotécnica
        {
          id: 54,
          quantity: 1,
          name: 'Projeto de legalização de obra',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de legalização de obra
        {
          id: 55,
          quantity: 1,
          name: 'Projeto de topográfia',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de topográfia
        {
          id: 56,
          quantity: 1,
          name: 'Projeto de estacionamento',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Projeto de estacionamento
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },
    {
      id: 7,
      name: 'Instalações e Serviços',
      img: 'assets/images/budget/facilities_and_services.png',
      class: 'topography',
      subCategories: [
        // subCategorias da Instalações e Serviços
        {
          id: 57,
          quantity: 1,
          name: 'Instalações elétricas',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalações elétricas
        {
          id: 58,
          quantity: 2,
          name: 'Instalações de sistema de Energia Solar',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento: ',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
            {
              name: 'Qual o consumo mensal de energia elétrica?',
              id: 2,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalações de sistema de Energia Solar
        {
          id: 59,
          quantity: 0,
          name: 'Instalações em sistema de segurança eletrônica'
        }, // end subcategories Instalações em sistema de segurança eletrônica
        {
          id: 60,
          quantity: 0,
          name: 'Dedetização em Imóveis'
        }, // end subcategories Dedetização em Imóveis
        {
          id: 61,
          quantity: 0,
          name: 'Instalação de ar-condicionado'
        }, // end subcategories Instalação de ar-condicionado
        {
          id: 62,
          quantity: 0,
          name: 'Instalação de piscinas e spas'
        }, // end subcategories Instalação de piscinas e spas
        {
          id: 63,
          quantity: 1,
          name: 'Instalação de pisos, azulejos e porcelanatos.',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'menos de 100m2',
                  value: 'menos de 100m2'
                },
                {
                  id: 2,
                  label: 'de 100 a 300m2',
                  value: 'de 100 a 300m2'
                },
                {
                  id: 3,
                  label: 'de 500 a 1000m2',
                  value: 'de 500 a 1000m2'
                },
                {
                  id: 4,
                  label: 'mais de 1000m2',
                  value: 'mais de 1000m2'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalação de pisos, azulejos e porcelanatos
        {
          id: 64,
          quantity: 1,
          name: 'Instalações de forro de gesso, pvc e gi-clean',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalações de forro de gesso, pvc e gi-clean
        {
          id: 65,
          quantity: 1,
          name: 'Instalações hidráulicas',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalações hidráulicas
        {
          id: 66,
          quantity: 1,
          name: 'Instalação de Paver',
          questionsAux: [
            {
              name: 'Estimativa de dimensionamento:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Menos de 50m²',
                  value: 'Menos de 50m²'
                },
                {
                  id: 2,
                  label: '50 a 100m²',
                  value: '50 a 100m²'
                },
                {
                  id: 3,
                  label: '100 a 200m²',
                  value: '100 a 200m²'
                },
                {
                  id: 4,
                  label: 'Mais de 200m²',
                  value: 'Mais de 200m²'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Instalação de Paver
        {
          id: 67,
          quantity: 0,
          name: 'Instalação de antenas'
        }, // end subcategories Instalação de antenas
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },
    {
      id: 8,
      name: 'Pavimentação',
      img: 'assets/images/budget/paving.png',
      class: 'paving',
      subCategories: [
        // subCategorias da Pavimentação
        {
          id: 68,
          quantity: 1,
          name: 'Empresas especializadas em pavimentação',
          questionsAux: [
            {
              name: 'Onde será feito o trabalho:',
              id: 1,
              typeInput: 'radioButton',
              alternatives: [
                {
                  id: 1,
                  label: 'Urbano',
                  value: 'Urbano'
                },
                {
                  id: 2,
                  label: 'Rural',
                  value: 'Rural'
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Empresas especializadas em pavimentação
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },
    {
      id: 9,
      name: 'Mudanças',
      img: 'assets/images/budget/changes.png',
      class: 'electric_project',
      subCategories: [
        // subCategorias da Mudanças
        {
          id: 69,
          quantity: 0,
          name: 'Montador de móveis'
        }, // end subcategories Mudanças
        {
          id: 70,
          quantity: 1,
          name: 'Uma empresa especializada em mudança',
          questionsAux: [
            {
              name: 'Qual a distância da mudança em KM?',
              id: 1,
              typeInput: 'inputText',
              auxPlaceholder: '...',
              alternatives: [
                {
                  id: 1,
                  label: '...',
                  value: ''
                }
              ],
            }, // end alternative
          ]
        }, // end subcategories Um empresa especializada em mudança
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },
    {
      id: 10,
      name: 'Reparos e Serviços',
      img: 'assets/images/budget/repairs_and_services.png',
      class: 'repairs_and_services',
      subCategories: [
        // subCategorias da Reparos e Serviços
        {
          id: 71,
          quantity: 0,
          name: 'Reparos no Madeiramento telhado, assoalho, escada etc...',
        },
        {
          id: 72,
          quantity: 0,
          name: 'Reparos ou instalações que envolvem partes elétricas',
        }, // end subcategories Reparos ou instalações que envolvem partes elétricas
        {
          id: 73,
          quantity: 0,
          name: 'Reparos ou instalações na parte Hidráulica',
        }, // end subcategories Reparos ou instalações na parte Hidráulica
        {
          id: 74,
          quantity: 0,
          name: 'Reparos em muros, paredes e calçadas',
        }, // end subcategories Reparos em muros, paredes e calçadas
        {
          id: 75,
          quantity: 0,
          name: 'Reparos e serviços de Pintura',
        }, // end subcategories Reparos e serviços de Pintura
        {
          id: 76,
          quantity: 0,
          name: 'Reparos em sistema de Segurança Eletrônica',
        }, // end subcategories Reparos em sistema de Segurança Eletrônica
        {
          id: 77,
          quantity: 0,
          name: 'Reparos em piscinas e spas',
        }, // end subcategories Reparos em piscinas e spas
        {
          id: 78,
          quantity: 0,
          name: 'Reparos em estofados',
        }, // end subcategories Reparos em estofados
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        },
      ]
    },

    {
      id: 11,
      name: 'Outros',
      img: 'assets/images/budget/other.png',
      class: 'other_services',
      subCategories: [
        // subCategorias de outros serviços
        {
          id: 79,
          quantity: 0,
          name: 'Outros serviços',
        }, // end subcategories Reparos no Madeiramento telhado, assoalho, escada etc...
      ]
    },
    {
      id: 12,
      name: 'Materiais de construção',
      img: 'assets/images/budget/construction_materials.png',
      class: 'construction_materials',
      subCategories: [
        // subCategorias de outros serviços
        {
          id: 80,
          quantity: 0,
          name: 'Materiais brutos para construção',
        },
        {
          id: 81,
          quantity: 0,
          name: 'Materiais de Acabamento',
        },
        {
          id: 82,
          quantity: 0,
          name: 'Materiais Elétricos',
        },
        {
          id: 83,
          quantity: 0,
          name: 'Materiais Hidráulicos',
        },
        {
          id: 84,
          quantity: 0,
          name: 'Outros',
        }
      ]
    }
  ]
}; // end start