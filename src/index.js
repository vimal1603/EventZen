import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Corporate from './Event/Corprate';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Corp from './Event/Corp';
import Hoc from './Hoc/Hoc';
import WrappedComponent from './UseContext/WrappedComponent';
import InvitationDesigner from './Birthday/InvitationDesigner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
  {/* <InvitationDesigner/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
