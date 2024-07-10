import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';

import './index.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
 <Router>
   <Header/>
   <Home/> 
 <Routes>
 <Route path="/about" element={<h1>About</h1>}/>
 <Route path="/register" element={<Register/>}/>
 <Route path="/login" element={<Login/>}/>
 </Routes>
 </Router>
 
</div>
);