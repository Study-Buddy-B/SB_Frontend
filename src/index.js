import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import {CookisProvider} from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //<CookisProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  //</CookisProvider>
  
);