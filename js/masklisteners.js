// Objeto EaForm

let EaForm = function(steps){
  this.index = 0;
  this.invalids = [];
  this.steps = Array.from(steps);
  this.init();
};

EaForm.prototype.init = function() {
  for(let i = 1; i < this.steps.length; i++){
    this.steps[i].style.display = 'none';
  }
}

EaForm.prototype.hide = function() {
  this.steps[this.index % this.steps.length].style.display = 'none';
}

EaForm.prototype.showNext = function() {
    this.walk(1);
}

EaForm.prototype.showPrev = function() {
    this.walk(-1);
}

EaForm.prototype.walk = function(step) {
    this.hide();
    this.index+=step;
    if(this.index === this.steps.length)
      this.index = 0;
    if(this.index < 0 )
      this.index = this.steps.length - 1;
    this.steps[this.index].style.display = 'inline';
}

EaForm.prototype.showErrors = function() {
  this.steps[this.index].getElementsByClassName('ea-warning')[0].classList.add('ea-active-warning');
  this.invalids.forEach(i => {
    i.classList.add('ea-active-warning');
    i.addEventListener('click', removeErrors);
    i.addEventListener('focus', removeErrors);
  });
}

EaForm.prototype.validateStep = function() {

  let step = this.steps[this.index], nodes = step.childNodes;
  let checkables = [];
   this.invalids = [];

  for (let i = 0; i <= nodes.length; i++) {
      if(isFormField(nodes[i])){
          if (isTextField(nodes[i]) && isEmptyValue(nodes[i])) {
            this.invalids.push(nodes[i]);
          } else if (isCheckableField(nodes[i])) {
            checkables[nodes[i].name] = checkables[nodes[i].name] || [];
            checkables[nodes[i].name].push(nodes[i]);
          }
      }
  }

  for (let i in checkables) {
      let valid = checkables[i].filter(isChecked);
      if (valid.length === 0){
        checkables[i].forEach(c =>{
          this.invalids.push(c);
        });
      }
  }

  if(this.invalids.length === 0)
      this.showNext();
  else{
    this.showErrors();
  }
}

const stepElements = [];
const stepObjects = [];

function removeErrors(e) {
  e.target.style.background = '#ffffff';
  Array.from(document.getElementsByClassName('ea-warning')).forEach(f => {
    f.classList.remove('ea-active-warning');
  });
  e.target.removeEventListener('click', removeErrors);
  e.target.removeEventListener('focus', removeErrors);
}

window.addEventListener('load', e => {
  let allSteps = document.getElementsByClassName('ea-step');
  Array.from(allSteps).forEach(s => {
    let secondClass = s.classList[1];
    stepElements[secondClass] = stepElements[secondClass] || [];
    stepElements[secondClass].push(s);
  });

  for(let s in stepElements){
    stepObjects[s] = new EaForm(stepElements[s]);
  }
});

// Máscara de CEP
let zipcodemask = new Inputmask("99999-999", {
    nullable: false,
    placeholder: "",
  "oncomplete": function (e) {
        const cep = e.target.inputmask.unmaskedvalue();
        findCep(cep);
  }, "onincomplete": function (e) {
        setCityFields({});
  }, "oncleared": function () {
        setCityFields({});
  }});
  
Array.from(document.getElementsByClassName('ea-masked-zipcode')).forEach(m => {
  zipcodemask.mask(m);
});

// Máscara de telefone
let phonemask = new Inputmask({ mask: ['(99) 9999-9999', '(99) \\99999-9999'], keepStatic: true, autoUnmask: true, escapeChar: '\\'});
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