import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import MainPage from './MainPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    // <App />
    
  // </React.StrictMode>

  <HashRouter>
    <Switch>
      <Route path="*" render={() => <MainPage/>} />
    </Switch>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
