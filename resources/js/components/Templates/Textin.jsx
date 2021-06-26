import React, {Component} from 'react';
import {Modal, ModalHeader,ModalBody,Alert} from 'reactstrap';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter,useHistory} from 'react-router-dom';
import Reg from './../User/Reg';
import axios from 'axios';
import { delay } from 'lodash';

class Textin extends Component{
    constructor(props) {
        super(props);
        
       this.state={ 
           title:this.props.title?this.props.title:'Edit Profile',
           show:true,
           send:true,
           img:'',
           formo:new FormData(),
           msg:'',
           alert:false,
           page:this.props.page,
           pdata:{},
           pid:this.props.id
     };
        this.closeMod = this.closeMod.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hField = this.hField.bind(this);
        this.regform = React.createRef();
        
    }
    closeafterreg(d=0){
        if(d){        
            this.setState({ show:!this.state.show });    
        // window.open('/register','_self') ;
        window.open('/textin','_self') ;
        }
    }

    componentDidMount() {
        if(this.state.page === 'profile'){
            axios.get('/api/userdetail/'+this.state.pid).
            then(
                res=>{
                    console.log(res.data);
                    this.setState({ pdata: res.data.data });
                }
            );
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        // console.log(this.state.formo.keys());
        if(this.state.page==='profile'){
            // console.log(this.state.formo.get('first_name'))
            axios.post('/api/userupdate/'+this.state.pid,this.state.formo).
        then(
            res=>{
                console.log(res.data.data)
                if(res.data.message){
                   this.regform.reset();
                   this.setState({ img: '',msg:res.data.message });
                   setTimeout(() => {
                       this.setState({ alert: !this.state.alert });
                   }, 3000);
                   this.setState({ alert: !this.state.alert });
                   
                }
            }
        );
        }else{

            axios.post('/api/userregistration',this.state.formo).
            then(
                res=>{
                    console.log(res.data.data)
                    if(res.data.message){
                    this.regform.reset();
                    this.setState({ img: '',msg:res.data.message });
                    setTimeout(() => {
                        this.setState({ alert: !this.state.alert });
                    }, 3000);
                    this.setState({ alert: !this.state.alert });
                    
                    }
                }
            );
        }
    }

    hField(e){
        if(e.target.name === 'propic'){
            let reader = new FileReader();

        reader.onload = (e)=>{
            this.setState({
                img:e.target.result
            });
        };

        reader.readAsDataURL(e.target.files[0]);

        this.state.formo.append(e.target.name,e.target.files[0]);
        }else{
            this.state.formo.append(e.target.name,e.target.value);
        }
        
    }

    closeMod(e){
        e.preventDefault();

        this.setState({ show:!this.state.show });    
        // window.open('/register','_self') ;
        window.open('/','_self') ;
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
        <form className="form text-light" ref={(el)=>this.regform = el}  onSubmit={this.handleSubmit} encType="multipart/form-data">

<div htmlFor="" className="form-group" id="pp" style={!(this.state.img==='')?{backgroundImage:this.state.img}:{background:'grey'}} ><img id="pp"src={this.state.img} alt="" /><br /> Profile Photo</div><br />
            <span>
                <label className="form-group mr-2">First Name <input name="first_name" className="form-control" type="text" onChange={this.hField}  defaultValue={this.state.pdata.first_name} /> </label>
            
                                    
                                    <label className="form-group">Last Name <input name="last_name" className="form-control" type="text" onChange={this.hField}  defaultValue={this.state.pdata.last_name}/></label>
                                    </span>
                                     <br />
                                    <label className="form-group" >NIID  <input name="niid" className="form-control" type="text" onChange={this.hField}  defaultValue={this.state.pdata.niid}required /></label>
                                    <br />
                                    <label className="form-group">Phone </label>
                                    <input name ="phone" className="form-control" type="text" onChange={this.hField}  defaultValue={this.state.pdata.phone}required /> <br />
                                    <label className="form-group">Email </label>
                                    <input name="email" className="form-control" type="text" onChange={this.hField} defaultValue={this.state.pdata.email} /> <br />
                                    <label className="form-group">Password </label>
                                    <input name="password" className="form-control" type="password" onChange={this.hField}  defaultValue={this.state.pdata.password}/> <br />
                                    <label className="form-group">Confirm Password </label>
                                    <input name="con_pass"className="form-control" type="password" onChange={this.hField}  /> <br />
                                    <label className="form-group">Address </label>
                                    <input name="address" defaultValue={this.state.pdata.address} className="form-control" type="text" onChange={this.hField}  /> <br />
                                    <label className="form-group">Profile Photo</label>                                    
                                    <input type="file" name="propic" className="form-control" onChange={this.hField}/>
                                    
                                    <br/>

                                    <button type="submit" className="btn btn-success mr-2" >{this.state.page==='profile'?"Update" : "Sign up"}</button> 
               
                                    <button className="btn btn-danger text-light text-decoration-none" onClick={this.closeMod}>Cancel</button>

                                </form>
    )
    let regalert = (<Alert color="success">
    {this.state.msg}
  </Alert>);
        return(
           <>
            <Modal isOpen={this.state.alert}>
                   
                   {this.state.alert?regalert:''}
                   
               </Modal>

               <Modal isOpen={this.state.show} >
              
                   <ModalHeader className="bg-success justify-content-between">
                                    
                        
                        
                        <div ><h1 ><a type="button" className="mr-2 text-light" style={{textDecoration:'none'}} onClick={this.closeMod}>&times;</a>{this.state.title}</h1></div>
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