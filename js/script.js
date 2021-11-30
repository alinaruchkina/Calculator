let number = [];
let result = '';
let example = '';
let outputExample = '';
let menu = document.querySelector('#menu');
let white = ['#EBF6FF', '#C6E3FF', '#6B7486', '#B1D1FF', '#717B8D', '#717B8D', '#E5F3FF'];
let blue = ['#00D1FF', '#0085FF', '#DEF6FF', '#007FFF', '#D7F3FF', '#DEF6FF', '#30BDFF'];
let black = ['#2B3237', '#171C20', '#B1B1B2', '#303437', '#B1B1B2', '#B5B5B5', '#3B4147'];
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

function changeColorTheme(param) {
  let arr = [];
  if (param === 'white') {
    arr = white;
  } else if (param === 'blue') {
    arr = blue;
  } else if (param === 'black') {
    arr = black;
  }

  let background = document.querySelector('#background');
  background.style.background = `linear-gradient(${arr[0]}, ${arr[1]})`;

  let equally = document.querySelector('#equally');
  equally.style.cssText = `color: ${arr[2]};
  background-color: ${arr[3]}`;

  let numbers = document.querySelectorAll('#numbers');
  numbers.forEach((item) => {
    item.style.color = `${arr[4]}`;
  });

  let arifm = document.querySelectorAll('#arithmetic_operation');
  arifm.forEach((item) => {
    item.style.cssText = `color: ${arr[5]};
    background-color: ${arr[6]}`;
  });
  menu.classList.add('invisible');

  let colorMenu = document.querySelector('#menu');
  colorMenu.style.background = `${arr[1]}`;
}
changeColorTheme('white');

function openMenuColor() {
  menu.classList.remove('invisible');
  addEventListener('click', (e) => {
    if (!e.path.includes('div#menu.menu.invisible')) {
      menu.classList.add('invisible');
    }
  });
}
