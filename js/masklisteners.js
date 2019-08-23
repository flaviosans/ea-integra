// Máscara de CEP
let zipcodemask = new Inputmask("99999-999", {
    nullable: false,
    placeholder: "",
  "oncomplete": function (e) {
        const cep = e.target.inputmask.unmaskedvalue();
        findCep(cep);
      unlockStep();
  }, "onincomplete": function (e) {
        setCityFields({});
        console.log("sem condições mano");
        lockStep();
  }, "oncleared": function () {
        setCityFields({});
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
    nullable: false,
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

// Máscara (whatafoque) de título

let textmask = new Inputmask({mask: "", nullable: true, onincomplete: function () {
        console.log("uauauaua");
    }});
Array.from(document.getElementsByName('title')).forEach(t =>{
    textmask.mask(t);
})
