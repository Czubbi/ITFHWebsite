import './App.css';
import 'fontsource-roboto';
import React from "react";
import Navbar from "./comopnents/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Offer from './pages/offer/offer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/offer" component={Offer} />
      </Routes>
    </Router>
  );
}

export default App;
