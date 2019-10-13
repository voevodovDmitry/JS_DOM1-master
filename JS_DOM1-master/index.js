let p = document.createElement('p');
p.innerHTML  = 'Пример текста';
p.classList.add('main', 'green');
document.body.insertBefore(p, document.querySelector('.one'));

console.log(p);

let div4 = document.getElementsByClassName('four4');
let p2 = document.getElementsByClassName('p2');
console.log(p2);

let x = document.getElementsByTagName('div');
console.log(x);
x[2].style.background='yellow';
//---------------------------------------
let xx =document.querySelector('div p');
console.log(xx);
let xx2 = document.querySelectorAll('div p');
console.log(xx2);
//-----------------------------------------
div3.style.background = 'red';
//-----------------------------------------
let x2 = document.querySelector('div');
let child = x2.childNodes ;
console.log(child);
console.log(x2.firstChild);
console.log(x2.lastChild);
//-----------------------------------------
let x3 = x2.children;
console.log(x3);
//-----------------------------------------
let x4 = document.querySelector('a');
console.log(x4.parentElement);
console.log(x4.parentElement.parentElement);
console.log(x4.parentElement.nextElementSibling);
console.log(x4.parentElement.prevElementSibling);