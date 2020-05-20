import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../Layout/Navbar';
import Login from '../Login';
import Vehicles from '../Vehicles/Vehicles';
import './App.css';

function App() {
  const [signedIn, setSignedIn] = useState('');

  return (
    <div style={{ height: '100%' }}>
      <Router>
        <CssBaseline />
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
        <Switch>
          <Route path="/" exact>
            <Login setSignedIn={setSignedIn} />
          </Route>
          <Route path="/vehicles" exact>
            <Vehicles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
