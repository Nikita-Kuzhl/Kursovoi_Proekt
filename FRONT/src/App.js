import React, {Component, useState} from 'react';
import {Route,  Switch,  Redirect,  withRouter, BrowserRouter} from "react-router-dom"

import "./style.css";

import {Default,ContactStr,UslugiStr,KabStr} from "./pages/Pages"
import {useDispatch, useSelector} from "react-redux";


const App = () => {


    return (
      <div className="App">
        <BrowserRouter>
      
          <Switch>
            <Route path='/contact' component={ContactStr}/> 
            <Route path='/home' component={Default}/>
            <Route path='/uslugi' component={UslugiStr}/>
            <Route path ='/profile' component={KabStr}/>
      
            <Redirect from = '/' to = '/home'/>
          </Switch>
  
        </BrowserRouter>
      </div>
    );
  }

export default App