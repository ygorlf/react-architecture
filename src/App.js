import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

// Layouts
import Login from './pages/login/Login';
import Layouts from './pages/layouts/Layouts';

// Private HOC
import Private from './private';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route
          exact
          path='/login'
          component={(props) => (
            <Login {...props} />
          )}
        />
        <Private
          component={(props) => (
            <Layouts {...props} />
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
