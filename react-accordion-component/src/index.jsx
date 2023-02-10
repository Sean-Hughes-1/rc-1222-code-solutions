import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion />);
