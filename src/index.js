import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gripper from "./products/Gripper";
import Rounded from "./products/Rounded";
import Contact from "./main/js/contact_us";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
       <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/Gripper" component={Gripper}/>
          <Route exact path="/Rounded" component={Rounded}/>
          <Route exact path="/contact_us" component={Contact}/>
       </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
