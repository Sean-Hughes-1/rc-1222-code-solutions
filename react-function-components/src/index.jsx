import React from 'react';
import * as ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <CustomButton />;
root.render(element);
