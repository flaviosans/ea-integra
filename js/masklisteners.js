// Máscara de CEP
let zipcodemask = new Inputmask("99999-999", {
  "oncomplete": function () {
    console.log("completou");
  }, "onincomplete": function () {
    console.log("ainda não completou");
  }, "oncleared": function () {
    console.log("limpou o campo");
  }, "onkeyvalidation": function (key, res) {
    console.log(`chave: ${key}, valor: ${res}`);
  }, postValidation: function (buffer, pos, currentResult, opts) {
    let isValid = true;
    let reduced = buffer.reduce(function (acc, current) {
      return acc + current;
    });
    if(pos === 8){
      reduced = reduced.replace("-","");
      isValid = findCep(reduced);
    } else if(pos === 7 &&)
    console.log(`post-val: ${reduced}`);
    return isValid;
  }});

Array.from(document.getElementsByClassName('ea-masked-zipcode')).forEach(m => {
  zipcodemask.mask(m);
});

// Máscara de telefone
let phonemask = new Inputmask({ mask: ['(99) 9999-9999', '(99) 99999-9999'], keepStatic: true, autoUnmask: true});
Array.from(document.getElementsByClassName('ea-masked-phone')).forEach(p => {
  phonemask.mask(p);
});

// Máscara de e-mail
let emailmask = new Inputmask({
  mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
  greedy: false,
  onBeforePaste: function (pastedValue, opts) {
    pastedValue = pastedValue.toLowerCase();
    return pastedValue.replace("mailto:", "");
  },
  definitions: {
    '*': {
      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
      casing: "lower"
    }
  }
});
Array.from(document.getElementsByClassName('ea-masked-email')).forEach(e => {
  emailmask.mask(e);
})

const checkForm = (formId) => {
  let form = document.getElementById(formId);
  Array.from(form.elements).forEach(e => {
    if(!e.value){
      console.log(`Input ${e.name} vazio`)
    }
    // checkbox: ao menos um selecionado
    // Validações de máscara
  });
}
