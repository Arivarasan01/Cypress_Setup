let btnget = document.querySelector('button');
let result = document.querySelector('h1');

let num = 123.78454; 

btnget.addEventListener('click', () => {
    result.innertext = num.toFixed(2);
})