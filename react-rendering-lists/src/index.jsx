import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const element = (
  <ul>
    <li>{pokedex[0].name}</li>
    <li>{pokedex[1].name}</li>
    <li>{pokedex[2].name}</li>
    <li>{pokedex[3].name}</li>
    <li>{pokedex[4].name}</li>
  </ul>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
