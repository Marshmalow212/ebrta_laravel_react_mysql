import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,useHistory,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import LoginModal from './../User/LoginModal';


class Home extends Component{
    constructor(props){

        super(props);
        let stat = JSON.parse(localStorage.getItem("loginpage"));

        this.state={
            isopen:stat.stat
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
            <div className="container">
                
                <Navbar />                        
                
                <div className="container mt-5 p-2 border border-warning">
                <h1 className="text-light">Home Page</h1>
                <button type="button" className="btn btn-danger btn-lg" onClick={this.hA}>LoginModal</button>
                {this.state.isopen?loginmod:""}
                </div>

                
                
           
            </div>            
        );

    }


}

export default Home;