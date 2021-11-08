let number = [];
let result = '';
let example = '';
let outputExample = '';
function writeNumber(symbol) {
  number.push(symbol);
  example = number.join('');
  outputExample = number.join(''); // 100/100*87
  outputExample = outputExample.replace('/100*', '%'); // 100%87
  document.querySelector('.content__example').innerHTML = outputExample;
}

function enterResult() {
  result = eval(example); // принимает параметр и подсчитывает рез-т
  document.querySelector('.content__result').innerHTML = result;
}

function clearExample() {
  number = [];
  example = '';
  outputExample = '';
  result = '';
  document.querySelector('.content__example').innerHTML = outputExample;
  document.querySelector('.content__result').innerHTML = result;
}

function deleteLastNumber() {
  if (outputExample[outputExample.length - 1] === '%') {
    number.pop();
    outputExample = outputExample.slice(0, outputExample[outputExample.length - 1]);
  } else {
    number.pop();
  }
  example = number.join('');
  outputExample = number.join('');
  outputExample = outputExample.replace('/100*', '%');
  document.querySelector('.content__example').innerHTML = outputExample;
}

function minusNumber(symbol) {
  number.push(symbol);
  example = number.join('');
  outputExample = number.join('');
  document.querySelector('.content__example').innerHTML = outputExample;
}

function setPercent() {
  number.push('/100*');
  example = number.join('');
  outputExample = number.join('');
  outputExample = outputExample.replace('/100*', '%'); //осуществляет замену только первого совпадения.
  document.querySelector('.content__example').innerHTML = outputExample;
}

function changeThemeOnWhite() {
  let background = document.querySelector('#background');
  background.style.background = `linear-gradient(#EBF6FF, #C6E3FF)`;

  let equally = document.querySelector('#equally');
  equally.style.cssText = `color: #6B7486;
  background-color: #B1D1FF`;

  let numbers = document.querySelectorAll('#numbers');
  numbers.forEach((item) => {
    item.style.color = `#717B8D`;
  });

  let arifm = document.querySelectorAll('#arithmetic_operation');
  arifm.forEach((item) => {
    item.style.cssText = `color: #717B8D;
    background-color: #E5F3FF`;
  });
}
changeThemeOnWhite();

function changeThemeOnBlue() {
  let background = document.querySelector('#background');
  background.style.background = `linear-gradient(#00CFFF, #0186FF)`;

  let equally = document.querySelector('#equally');
  equally.style.cssText = `color: #DEF6FF;
  background-color: #007FFF`;

  let numbers = document.querySelectorAll('#numbers');
  numbers.forEach((item) => {
    item.style.color = `#D7F3FF`;
  });

  let arifm = document.querySelectorAll('#arithmetic_operation');
  arifm.forEach((item) => {
    item.style.cssText = `color: #DEF6FF;
    background-color: #30BDFF`;
  });
}
// changeThemeOnBlue();

function changeThemeOnBlack() {
  let background = document.querySelector('#background');
  background.style.background = `linear-gradient(#2B3237, #171C20)`;

  let equally = document.querySelector('#equally');
  equally.style.cssText = `color: #B1B1B2;
    background-color: #303437`;

  let numbers = document.querySelectorAll('#numbers');
  numbers.forEach((item) => {
    item.style.color = `#B1B1B2`;
  });

  let arifm = document.querySelectorAll('#arithmetic_operation');
  arifm.forEach((item) => {
    item.style.cssText = `color: #B5B5B5;
    background-color: #3B4147`;
  });
}
// changeThemeOnBlack();
