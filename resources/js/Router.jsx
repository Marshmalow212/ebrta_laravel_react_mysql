import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from './components/Site/Home';
import Login from './components/User/Login';
import Reg from './components/User/Reg';
import Dashboard from './components/User/Dashboard';
import LoginModal from './components/User/LoginModal';
import Fileup from './components/Site/fileup';
import Textin from './components/Templates/Textin';
import Dlic from './components/Site/drivlic';
import Vreg from './components/Site/vreg';
import Renewal from './components/Site/renewal';
import Form from './components/Templates/Form';
import Contact from './components/Site/Contact';
import adminPanel from './components/Admin/Adminpanel';
import adminDashboard from './components/Admin/Admindashboard';


const Main = props =>(
    <Switch>
        <Route exact path='/' component={Home}/> 

        <Route  exact path='/login' component={Login}/>

        <Route  exact path='/register' component={Reg}/>
        
        <Route  exact path='/dashboard' component={Dashboard}/>

        <Route  exact path='/loginmodal' component={LoginModal}/>

        <Route  exact path='/fileupload' component={Fileup}/>        

        <Route  exact path='/textin' component={Textin}/>        

        <Route exact path='/vehiclereg' component={Vreg}></Route>        
        <Route exact path='/drivinglicense' component={Dlic}></Route>
        <Route exact path='/renewal' component={Renewal} ></Route>
        <Route exact path='/regform' component={Form} ></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='/adminpanel' component={adminPanel}></Route>
        <Route exact path='/admindashboard' component={adminDashboard}></Route>
    </Switch>
);

export default Main;
