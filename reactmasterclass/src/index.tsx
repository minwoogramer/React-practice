import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

