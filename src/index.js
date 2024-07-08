import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Login from './components/Login';
import TodoList from './components/TodoList';
import Feedback from './components/Feedback';
import '../src/index.css'
import {BrowserRouter as Router,
  Routes,
  Link,
  Route} from 'react-router-dom';
import Register from './components/Register';
//import Example from './Example';
const root =document.getElementById('root')//root id from index.html
const VirtualRoot = ReactDOM.createRoot(root);
VirtualRoot.render(
  <Router>
  <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  </Router>
)