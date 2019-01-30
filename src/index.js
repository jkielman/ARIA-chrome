console.log('Receptor - a11y chrome extension');


import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style.scss';

const Main = () => (

   <div className={'my-extension'}>
        <h1> Receptor Test v0.1 </h1>
   </div>
)

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);







