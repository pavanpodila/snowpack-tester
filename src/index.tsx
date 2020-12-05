import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from './HelloWorld';

import './index.css';

const root = document.getElementById('root');

ReactDOM.render(<HelloWorld />, root);

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept();
}
