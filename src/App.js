import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

// Layouts
import Layouts from './pages/layouts/Layouts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
