import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,
        Routes,
        Route} 
        from 'react-router-dom'
import NavBar from './comopnents/navbar.js'
import Home from './pages/home/home.js'
import Offer from './pages/offer/offer.js'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="offer" element={<Offer />} />
    </Routes>
  </BrowserRouter>, 
  rootElement
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
