import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import App from './App';


// const darkTheme = {
//   textColor:"whitesmoke",
//   backgroundColor: "#111",
// };
// const lightTheme = {
//   textColor:"#111",
//   backgroundColor: "whitesmoke",
// }
//이렇게하면 이제컴포넌트들을  Theme에 접근할수있음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <ThemeProvider theme={darkTheme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

