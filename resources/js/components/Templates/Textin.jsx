import React, {Component} from 'react';
import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter,useHistory} from 'react-router-dom';
import Reg from './../User/Reg';

class Textin extends Component{
    constructor(props) {
        super(props);
        let show = JSON.parse(localStorage.getItem('textshow'));
       this.state={ 
           show:true,
           send:true
     };
        this.closeMod = this.closeMod.bind(this);
    }

    closeMod(e){
        e.preventDefault();

        this.setState({ show:!this.state.show });
        this.setState({ show:!this.state.show });       
    }
    

    render(){
        let pagecon = (
            
            
            <div className="row justify-content-center">
        <div className="col-md-12">
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
                        <span className=""><i class="fas fa-cloud fa-5x">Hello </i></span>
                        
                        
                        {/* <input className="form-control btn btn-danger" type="submit" onClick={this.handleSubmit} disabled={!this.state.username?"disabled":""}/> */}

                    </div>
                    <span>
                    <button className="btn btn-dark"><Link className="text-light" to="/register" style={{textDecoration:'none'}}>Registration</Link></button>
                    <button className="btn btn-danger" onClick={this.closeMod}>Close</button> 
                    </span>
                    
                </div>
            </div>

        </div>
    

            </div>
        
    )

    let regmodal = (
        <form className="form text-light"  onSubmit={this.handleSubmit} encType="multipart/form-data">
            <span>
                <label className="form-group">First Name <input name="first_name" className="form-control" type="text" onChange={this.hField}  value={this.state.first_name}/> </label>
            </span>
                                    <br />
                                    <label className="form-group">Last Name </label>
                                    <input name="last_name" className="form-control" type="text" onChange={this.hField}  value={this.state.last_name}/> <br />
                                    <label className="form-group" >NIID </label>
                                    <input name="niid" className="form-control" type="text" onChange={this.hField}  value={this.state.niid}required /> <br />
                                    <label className="form-group">Phone </label>
                                    <input name ="phone" className="form-control" type="text" onChange={this.hField}  value={this.state.phone}required /> <br />
                                    <label className="form-group">Email </label>
                                    <input name="email" className="form-control" type="text" onChange={this.hField} value={this.state.email} /> <br />
                                    <label className="form-group">Password </label>
                                    <input name="password" className="form-control" type="password" onChange={this.hField}  value={this.state.password}/> <br />
                                    <label className="form-group">Confirm Password </label>
                                    <input name="con_pass"className="form-control" type="password" onChange={this.hField}  /> <br />
                                    <label className="form-group">Profile Photo</label>                                    
                                    <input type="file" name="propic" className="form-control" ref={this.inFile} onChange={this.hFile}/>
                                    
                                    <br/>

                                    <button type="submit" className="btn btn-success mr-2" >Sign up</button> 
               
                                    <button className="btn btn-danger text-light text-decoration-none" onClick={this.closeMod}>Cancel</button>

                                </form>
    )
        return(
           <>
               <Modal isOpen={this.state.show} size="lg">
                   <ModalHeader className="bg-success">
                        <h1 >Edit Profile</h1>
                   </ModalHeader>
                   <ModalBody className="bg-primary">
                        {regmodal}    
                   </ModalBody>
                   
               </Modal>

              

               </>
           
                        
        );
    }


}

export default Textin;