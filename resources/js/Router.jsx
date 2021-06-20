import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from './components/Site/Home';
import Login from './components/User/Login';
import Reg from './components/User/Reg';
import Dashboard from './components/User/Dashboard';
import LoginModal from './components/User/LoginModal';
import Fileup from './components/Site/fileup';
import Textin from './components/Templates/Textin';


const Main = props =>(
    <Switch>
        <Route exact path='/' component={Home}/> 

        <Route  exact path='/login' component={Login}/>

        <Route  exact path='/register' component={Reg}/>
        
        <Route  exact path='/dashboard' component={Dashboard}/>

        <Route  exact path='/loginmodal' component={LoginModal}/>

        <Route  exact path='/fileupload' component={Fileup}/>        

        <Route  exact path='/textin' component={Textin}/>        

        
    </Switch>
);

export default Main;
