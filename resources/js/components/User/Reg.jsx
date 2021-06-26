import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link,Route,browserHistory} from 'react-router-dom';
import Textin,{closeMod} from './../Templates/Textin'
import { delay } from 'lodash';


class Reg extends Component{

    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            niid:'',
            phone:'',
            email:'',
            password:'',
            con_pass:'',
            file:'',
            message:'',
            status:false,
            prev:'',
            tgl:false
        };
        console.log();
        var dataPath = "";
        var picdata = "";
        this.tgl = false;

        this.handleSubmit=this.handleSubmit.bind(this);
        this.hField=this.hField.bind(this);
        this.hFile = this.hFile.bind(this);
        this.inFile = React.createRef();
        this.tbM = this.tbM.bind(this);
        
    }

    tbM(e){
        e.preventDefault();
       this.setState({ tgl:!this.state.tgl });
    //    this.state.tgl?this.setState({ tgl: !this.state.tgl  }):"";
       console.log(this.state.tgl);
    }

    hFile(e){
        console.log(e.target.value);
        // console.log(this.inFile.current.value);
        // console.log(e.current.files[0].name);
        // console.log(URL.createObjectURL(e.target.files[0]));
        // this.picdata = (window.URL || window.webkitURL).createObjectURL(e.target.files[0]);
        this.picdata = e.target.files[0];
        console.log(this.picdata);
        const data = {
            'filename':this.picdata
        };
        axios.post('http://127.0.0.1:8000/api/fileupload',data)
        .then((response)=>{
            console.log(response.data.message+'\n'+response.data.file);
        }

        );


        // this.picdata = e.target.value;
        // this.picdata = this.picdata;
        // let reader = new FileReader();
        // reader.readAsDataURL(this.picdata);
        // reader.onload=()=>{
        //     this.dataPath=reader.result;
        // };
        
        // console.log(this.dataPath);

    }

    handleSubmit(e){
        e.preventDefault();
        // console.log(this.state);

        const regData = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            niid:this.state.niid,
            phone:this.state.phone,
            email:this.state.email,
            password:this.state.password            
        };

        axios.post('http://127.0.0.1:8000/api/userregistration',regData)
        .then((response)=>{
            console.log('This is response '+ response.data.message);
            this.setState({
                status:true,
                message: response.data.message,
            });
            if(this.state.status){
                this.setState({
                    first_name:'',
                    last_name:'',
                    niid:'',
                    phone:'',
                    email:'',
                    password:'',
                    con_pass:''
                });
                // this.formF.reset();
            }
            // const resdata =[response.data.data];
            // console.log(resdata);
        });         

    }

    componentDidMount(){
      
    }

    hField(e){

        this.setState({
            [e.target.name]:e.target.value,            
        });

    }


    render(){    
        

        return (
            <div className="container">
               
                {this.state.status?<div className="alert alert-success alert-dismissible float-top">
                        {this.state.message}<a  className="close" data-dismiss="alert" >&times;</a>
                    </div>:""}
                
                <div className="container mb-4 ">
                
                        <div className="card">
                           <div className="card-header bg-primary text-light">User Registration</div>
                            <div  className="card-body bg-dark" >
                                <div className="container" id="picdata" >
                                    <img src={this.picdata} alt={this.picdata}/>

                                </div>
                                <form className="form text-light"  onSubmit={this.handleSubmit} encType="multipart/form-data">
                                    <label className="form-group">First Name </label>
                                    <input name="first_name" className="form-control" type="text" onChange={this.hField}  value={this.state.first_name}/> <br />
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
               
                                    <Link to="/" className="btn btn-danger text-light text-decoration-none">Cancel</Link>

                                </form>
                                
                            </div>
                        </div>
                </div>
                    <div className="container p-3">
                    <div className="row p-3 bg-light">
                        <div className="col-mb-4 ">
                            {/* 1st row */}
                            <button className="btn btn-success" onClick={this.tbM}>Toggle</button>
                        </div>

                       
                                         

                    </div>
                    {this.state.tgl?<Textin />:""}
                    </div>

                    
                    

            </div>            
        );

    }


}

export default Reg;