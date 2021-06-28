import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,useHistory,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import LoginModal from './../User/LoginModal';
import { Jumbotron,Button } from 'reactstrap';


class Home extends Component{
    constructor(props){

        super(props);
        let stats = JSON.parse(localStorage.getItem("loginpage"));

        this.state={
            isopen:stats.stat
        };
        
        this.hA = this.hA.bind(this);

    }

    hA(e){
        e.preventDefault();
        this.setState({
            isopen:true
        });
        
    }

    
    render(){    
            let loginmod = (
                <>
                <LoginModal stat="true"  />
                </>
            );
            
        return (
            <div>
                
                <Navbar />                        
                <header className="header container-fluid text-center bg-dark " style={{paddingTop:'5rem'}}>
                    <img className="img-fluid text-center" src="/storage/home/banner.jpg" alt="brta_home" />
                </header>
              
                <div className=" container-fluid my-3 bg-dark" >
                    
                    <Jumbotron >
                        <h1 className="display-4">Welcome to E-BRTA</h1>
                        <hr className="my-2" />
                        <p className="lead">
                            E-BRTA , a online platform for all the BRTA end-user works. We have started with the vision <br />
                            to serve the people of this country through this smart service. <br /><br />

                            With this tool, users can freely complete their license registration, vehicle registration <br />
                            without any hassle. <br />
                            Users can renew their registration with this tool. 
                        </p>
                        <p className="lead">
                        <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>

                </div>

                
            <footer className="footer my-2 px-2 bg-dark">
                <div className="container">
                <div className="row bg-dark  border-0 rounded">
                    <div className="col-sm-4 text-light justify-content-center  ">
                        <ul className="h5 " >Services</ul>

                        
                            <ul className="h6">Vehicle Registration</ul>
                            <ul className="h6">License Registration</ul>
                            <ul className="h6">Registration Renewal</ul>                            

                    
                    </div>
                    <div className="col-sm-4 text-light justify-content-center">
                            <ul className="navbar-nav">
                                <a href="/" className="navbar-brand text-center text-light display-2 bg-dark px-3 border-0 rounded">E-BRTA</a>
                            </ul>
                    </div>
                    <div className="col-sm-4 text-light justify-content-center">
                        
                             <ul className="h6">About us</ul>
                            <ul className="h6">Contacts</ul>
                            <ul className="h6"><a href="http://www.brta.gov.bd/"  target="_blank" className="text-light" style={{textDecoration:'none'}}>BRTA</a></ul>
                            <ul className="h6"><a href="http://www.brtc.gov.bd/" target="_blank" className="text-light" style={{textDecoration:'none'}}>BRTC</a></ul>                            

                    
                    </div>
                </div>
                </div>
                <hr className="my-3 bg-info" />
                <div className="d-flex justify-content-center">
                <code >Erfanul Taher &copy; {new Date().getFullYear()}</code>
                </div>
                
            </footer>
           
            </div>            
        );

    }


}

export default Home;