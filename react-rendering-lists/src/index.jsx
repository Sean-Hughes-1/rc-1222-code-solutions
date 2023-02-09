import React from 'react';
import * as ReactDOM from 'react-dom';
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
function ListItem(props) {
  return <li>{props.value}</li>;
}

function UnorderedList(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokedex =>
    <ListItem key={pokedex.number.toString()} value = {pokedex.name} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<UnorderedList pokedex={pokedex} />);
