import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cartstate from './context/Cartstate';
import SearchState from './context/SearchState';
import Authstate from './context/Authstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Authstate>
     <Cartstate> 
    <SearchState>
      <App />
    </SearchState>
    </Cartstate>
    </Authstate>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
