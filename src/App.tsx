import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/Application';
import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './components/mui/MuiMode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
