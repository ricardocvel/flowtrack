import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Template from './components/Template'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
      <BrowserRouter>
        <Template/>
      </BrowserRouter>
);

