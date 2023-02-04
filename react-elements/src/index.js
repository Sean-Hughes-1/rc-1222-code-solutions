import React from 'react';
import * as ReactDOM from 'react-dom';
const element = React.createElement(
  'h1',
  null,
  'Hello React!'
);
console.log('element', element);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);
