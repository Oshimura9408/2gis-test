import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App/app';

// polyfill
import '@babel/polyfill';
import 'whatwg-fetch';

const rootElement = document.querySelector('#root');

ReactDom.render(<App />, rootElement);
