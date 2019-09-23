const stepElements = [];
const stepObjects = [];
// Objeto EaForm

let EaForm = function(steps){
  this.stepIndex = 0;
  this.fieldIndex = 0;
  this.invalids = [];
  this.steps = Array.from(steps);
  this.init();
};

EaForm.prototype.init = function() {
  for(let i = 0; i < this.steps.length; i++){
    if(i !== 0)
      this.steps[i].style.display = 'none';
  }
}

EaForm.prototype.hide = function() {
  this.steps[this.stepIndex].style.display = 'none';
}

EaForm.prototype.showNext = function() {
    this.walk(1);
}

EaForm.prototype.showPrev = function() {
    this.walk(-1);
}

EaForm.prototype.walk = function(step) {
    this.hide();
    this.stepIndex+=step;
    if(this.stepIndex === this.steps.length){
      this.stepIndex = 0;  
    }
    if(this.stepIndex < 0 )
      this.stepIndex = this.steps.length - 1;
    this.steps[this.stepIndex].style.display = 'inline';
}

EaForm.prototype.showErrors = function() {
  let focused = false;
  this.steps[this.stepIndex].getElementsByClassName('ea-warning')[0].classList.add('ea-active-warning');
  this.invalids.forEach(i => {
    if(!focused) {
      i.focus();
      focused = true;
    }

    i.parentElement.getElementsByTagName('label')[0].classList.add('ea-active-warning');
    i.addEventListener('click', removeErrors);
    i.addEventListener('blur', removeErrors);
  });
}

EaForm.prototype.validateStep = function() {

  let step = this.steps[this.stepIndex], 
  nodes = step.getElementsByClassName('ea-field'),
  submit = step.getElementsByClassName('ea-submit')[0];
  let checkables = [];
  this.invalids = [];

  for (let i = 0; i <= nodes.length; i++) {
      if(isFormField(nodes[i]) && !isOptional(nodes[i])){
          if(!this.form) this.form = nodes[i].form;
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
        checkables[i].forEach(c => {
          this.invalids.push(c);
        });
      }
  }

  if(this.invalids.length === 0)
      if(submit){
        submit.click();
          this.walk(1);
      }
      else
        this.showNext();
  else{
    this.showErrors();
  }
}

function removeErrors(e) {
  e.target.parentElement.getElementsByTagName('label')[0].classList.remove('ea-active-warning');
  
  Array.from(document.getElementsByClassName('ea-warning')).forEach(f => {
    f.parentElement.classList.remove('ea-active-warning');
  });
  e.target.removeEventListener('click', removeErrors);
  e.target.removeEventListener('blur', removeErrors);
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

Array.from(document.getElementsByClassName('ea-field')).forEach(f => {
  f.addEventListener('keydown', function(e) {
    if(e.keyCode == 13){
      e.preventDefault();
      e.keyCode = 9;
    }
  });
})