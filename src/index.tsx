import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Template from 'components/Template'
import { Provider } from 'react-redux'
import store from 'store'
import { ConfigurationContext } from 'contexts/configurationContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ConfigurationContext.Provider
    value={{ messagesAPIBaseURL: 'https://catfact.ninja' }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <Template/>
      </BrowserRouter>
    </Provider>
  </ConfigurationContext.Provider>
);

