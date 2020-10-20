import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

// Layouts
import Login from './pages/login/Login';
import Layouts from './pages/layouts/Layouts';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route
          exact
          path='/login'
          component={() => (
            <Login />
          )}
        />
        <Route
          component={() => (
            <Layouts />
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
