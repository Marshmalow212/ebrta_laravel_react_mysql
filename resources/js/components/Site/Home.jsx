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
                
                <div className="container mt-5 p-2 border border-warning">
                <h1 className="text-light">Home Page</h1>
                <button type="button" className="btn btn-danger btn-lg" onClick={this.hA}>LoginModal</button>
                {/* {this.state.isopen?loginmod:""} */}
                </div>
                <Jumbotron style={{paddingTop:'5rem'}}>
                <h1 className="display-4">Contact for Service</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>

                
                
           
            </div>            
        );

    }


}

export default Home;