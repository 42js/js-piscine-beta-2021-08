function selectDisabledOn() {
  const form = document.forms.caculator;
  form.level.setAttribute('disabled', true);
}

function selectDisabledOff() {
  const form = document.forms.caculator;
  form.level.removeAttribute('disabled', false);
}

// lv1 -> 5% lv2->10% lv3->15%
function calculate() {
  const form = document.forms.caculator;

  if (form.member.checked === true) {
    selectDisabledOff();
  } else {
    selectDisabledOn();
  }
  const originCost = form.cost.value;
  console.log(originCost);
}

function displayCalcResult() {
  const form = document.forms.caculator;
  selectDisabledOn();

  form.product.setAttribute('oninput', 'calculate()');
  form.cost.setAttribute('oninput', 'calculate()');
  form.member.setAttribute('onchange', 'calculate()');
  form.level.setAttribute('onchange', 'calculate()');
}

displayCalcResult();
