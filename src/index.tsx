import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

import './index.scss';
import { BrowserRouter } from 'react-router-dom';



const container: HTMLElement | null = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// const root = ReactDOM.createRoot(document.getElementById("root") as Element); 

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
