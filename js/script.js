let number = [];
let result = '';
let example = '';
let outputExample = '';
let menu = document.querySelector('#menu');
const white = ['#fff', '#123'];
function writeNumber(symbol) {
  number.push(symbol);
  example = number.join('');
  outputExample = number.join(''); // 100/100*87
  outputExample = outputExample.replace('/100*', '%'); // 100%87
  document.querySelector('.content__example').innerHTML = outputExample; //возвращает первый элем-т соответ-ий селектору и присваивает пустой строке
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
    number.pop(); //удаляет последний эл-т из массива и возвр его значение
    outputExample = outputExample.slice(0, outputExample[outputExample.length - 1]); // возвр новый массив, который содержащит копии эл-тов из исходного массива
  } else {
    number.pop();
  }
  example = number.join(''); // объединяет все эл-ты массива в строку
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

function changeThemeOnWhite(param) {
  if (param === 'white') {
    arr = white;
  } else if (param === 'blue') {
    arr = blue;
  } else if (param === 'black') {
    arr = black;
  }

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
  menu.classList.add('invisible');
}
changeThemeOnWhite();

function changeThemeOnBlue() {
  let background = document.querySelector('#background');
  background.style.background = `linear-gradient(#00CFFF, #0186FF)`; // color, background-color , style.color,  cssText is different

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
  menu.classList.add('invisible');
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

  menu.classList.add('invisible');
}

function openMenuColor() {
  menu.classList.remove('invisible');
  addEventListener('click', (e) => {
    if (!e.path.includes('div#menu.menu.invisible')) {
      menu.classList.add('invisible');
    }
  });
}
