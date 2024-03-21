import { disciplinas } from './packages/disciplinas.js';

const containerCards = document.querySelector('.container-cards');

console.log(containerCards);

disciplinas.forEach(function(value) {
    const newLi = document.createElement('li');
    newLi.innerHTML = value.nome;

    const link = document.createElement('a');
    link.setAttribute('class', 'cards');
    link.setAttribute('href', value.src);

    link.append(newLi);

    containerCards.append(link);
});