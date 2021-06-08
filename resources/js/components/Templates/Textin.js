import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter,useHistory} from 'react-router-dom';

class Textin extends Component{

    render(){
        return(
            <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-success">
                                Dashboard
                            </div>
                            <div className="card-body bg-primary">
                                <div className="form-group"  >
                                    <span>
                                    <label name="username">Username 
                                    <input id="username" className="form-control mb-2" type="text" placeholder="marshmalow212" onChange={this.handleChange}/>
                                    </label>
                                    </span><br/>
                                    <span ><i class="fas fa-envelope-square fa-5x">Hello</i></span>
                                    <br/>
                                    <span className=""><i class="fas fa-cloud fa-10x">Hello </i></span>
                                    
                                    
                                    {/* <input className="form-control btn btn-danger" type="submit" onClick={this.handleSubmit} disabled={!this.state.username?"disabled":""}/> */}

                                </div>
                                <button className="btn btn-dark"><Link className="text-light" to="/register">Registration</Link></button>
                            </div>
                        </div>

                    </div>
                </div>            
        );
    }


}

export default Textin;