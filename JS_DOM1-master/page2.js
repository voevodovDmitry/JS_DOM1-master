let x = document.getElementById('el')

console.dir(el.firstChild.data);
el.firstChild.data = '111111111111111111111'

console.log(el.innerHTML);
console.log(el.textContent);