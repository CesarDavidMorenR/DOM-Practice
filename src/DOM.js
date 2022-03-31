// DOM Manipulation Variable para seleccionar el div principal en el que van la mayoria de los ejercicios
const container = document.querySelector('#container');

// 1 a <p> with red text that says “Hey I’m red!”

const parrafo = document.createElement('p');
parrafo.textContent = `Hey I'm red!`
parrafo.style.color = 'red';

container.appendChild(parrafo);

//2 an <h3> with blue text that says “I’m a blue h3!”

const achetres = document.createElement('h3');
achetres.textContent = `Hey I'm a blue h3`
achetres.style.color = 'blue';

container.appendChild(achetres);

/* a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container */

const elDiv = document.createElement('div');
elDiv.setAttribute('id', 'theDiv');    
elDiv.style.border = '1px solid black';
elDiv.style.backgroundColor = 'pink';

const elacheuno = document.createElement('h1');
elacheuno.textContent = `I'm a div`;
elDiv.appendChild(elacheuno);

const metoo = document.createElement('p');
metoo.textContent = 'ME TOO!'
elDiv.appendChild(metoo);

container.appendChild(elDiv);

