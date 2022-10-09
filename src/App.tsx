import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { RouterNavigation } from './layout/navigations/RouterNavigation';

function App() {
  return (
    <BrowserRouter>
      <RouterNavigation></RouterNavigation>
    </BrowserRouter>
  );
}

export default App;
