import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ScareMeter } from './components/ScareMeter'

ReactDOM.render(
  <React.StrictMode>

    <Router>
    <ScareMeter />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);