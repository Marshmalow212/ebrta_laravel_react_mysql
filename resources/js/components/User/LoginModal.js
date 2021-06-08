import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,useHistory,Switch} from 'react-router-dom';
import Modal from 'react-modal';
import {ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import Login from './Login';
import Home from './../Site/Home';


class LoginModal extends Component{
    constructor(props){
        super(props);
        this.state={
            show:this.props.stat
        };

        this.hO = this.hO.bind(this);
        this.hC = this.hC.bind(this);
    }

    hO(e){
        e.preventDefault();
        this.setState({
            show:true
        });
    }

    hC(e){
        e.preventDefault();

        this.setState({
            show:false
        });
    //    window.open("/home","_self");
    localStorage.setItem("loginpage",JSON.stringify({'stat':false}));
    }

    render(){

        let mytestmodal = (
            <>
            <div className="container d-flex justify-content-center align-self-center" id="backdrop">
                                   
                        
                        <div ><a type="button" className="close" onClick={this.hC}>&times;</a></div>
                        <Login />
                      
                   
            </div>     
            </>
        );

        return(

          <>
                
                {/* <button type="button" className="btn btn-danger" onClick={this.hO}>Test Modal</button> */}

                {this.state.show?mytestmodal:""}                  
                </>
          
        );
    }
}

export default LoginModal;