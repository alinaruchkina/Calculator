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
    example = example.pop('/100*');
    outputExample = outputExample.pop();
  } else {
    number.pop();
  }
  example = number.join(''); // объединяет все эл-ты массива в строку
  outputExample = number.join('');
  document.querySelector('.content__example').innerHTML = outputExample; //записываем в див
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
  outputExample = outputExample.replace('/100*', '%');
  document.querySelector('.content__example').innerHTML = outputExample;
}
