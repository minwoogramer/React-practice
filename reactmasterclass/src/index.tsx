import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

