import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import Preferences from './Components/Preferences/Preferences';

function App() {
  return (
    <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <h1>This is route...</h1>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;