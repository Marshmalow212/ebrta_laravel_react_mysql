import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,useHistory,Switch} from 'react-router-dom';
import Dashboard from './Dashboard';


class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            message:'',
            status:'',
            loginstat:false
        };

        this.hSubmit = this.hSubmit.bind(this);
        this.hChange = this.hChange.bind(this);
        this.hStat = this.hStat.bind(this);
    }

    hStat(e){
        e.preventDefault();
        this.setState({
            loginstat:false
        });    
        
    }


    hChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });

    }

    hSubmit(e){
        e.preventDefault();

        const lData = {
            email : this.state.email,
            password : this.state.password
        };
        axios.post('http://localhost:8000/api/userlogin',lData)
        .then(response=>{
            this.setState({
                message: response.data.message,
                status: response.data.status,
                loginstat:true
                
            });
            console.log(response.data.message);
            if(this.state.status==='red'){
                setTimeout(() => {
                   this.setState({
                       loginstat:false
                   }); 
                }, 2000);
            }


            if(this.state.status==='green'){
                localStorage.setItem('cUser',JSON.stringify(response.data.data));
                //sessionStorage.setItem('cUser',JSON.stringify(response.data.data));
                
                setTimeout(() => {
                    this.setState({
                        email:'',                    
                        password:'',
                        loginstat:false 
                    });
                    localStorage.setItem('loginpage',JSON.stringify({'stat':false}));
                    window.open("/dashboard/","_self");              
                }, 1000);
            }
         });
    }

    



    render(){    
            
          
            let alertD = (
                 <div className={this.state.status === 'green'?"alert alert-success alert-dismissible float-top ":"alert alert-danger alert-dismissible float-top"}>
                 {this.state.message}<a  className="close" data-dismiss="alert" onClick={this.hStat} >&times;</a>
             </div>
                );


        return (
            <div className="container" id="loginbody">
                {this.state.loginstat?alertD :"" }
                <div className="container mb-5 d-flex justify-content-center "  >
                        <div className="card " style={{width:"50%",}}>
                            <div className="card-header text-light" style={{backgroundColor:"teal"}}>Log In</div>
                            <div className="card-body" style={{backgroundColor:"teal"}}>
                                <form className="form text-light" onSubmit={this.hSubmit}>
                                    <label className="form-group">Username </label>
                                    <input name="email" className="form-control" type="text" placeholder="marshmalow212" onChange={this.hChange} value={this.state.email}/>
                                    <br />
                                    <label className="form-group">Password</label>
                                    <input name="password" className="form-control" type="password" placeholder="Thisis@pass" onChange={this.hChange} value={this.state.password}/>
                                    <br />
                                    
                                    <button type="submit" className="btn btn-success btn-block ">Login</button><br/>
                                    <Link to="/register" className="btn btn-secondary text-light text-decoration-none">Sign up</Link>

                                </form>
                                
                            </div>
                        </div>
                    </div>

            </div>            
        );

    }


}

export default Login;