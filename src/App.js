import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './config/Routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <center>
        <RoutesApp />
        </center>
      </div>
    </BrowserRouter>
  );
}

export default App;
