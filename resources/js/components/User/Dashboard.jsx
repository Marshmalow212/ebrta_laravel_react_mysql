import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter,useHistory} from 'react-router-dom';
import Navbar from './../Site/Navbar';
import Textin from '../Templates/Textin';

class Dashboard extends Component{
    
    constructor(props){
        super(props);

        if(!localStorage.getItem('cUser'))window.open("/","_self");
        let uData = JSON.parse(localStorage.getItem('cUser'));
        console.log(uData);
        //let uData = JSON.parse(sessionStorage.getItem('cUser'));
        var some = "";
        console.log(localStorage.length);

        var name = uData.first_name+" "+uData.last_name; 
        this.state={
            id:uData.id,
            username:uData.first_name,
            name:name,
            phone:uData.phone,
            niid:uData.niid,
            address:uData.address,
            email:uData.email,
            submitted:false,
            alerting:false,
            edit:false,
            record:[],
            info:[],
            lic:{}
        };

        this.fpath = uData.propic;
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFocusHandle = this.onFocusHandle.bind(this);
        this.editprofile = this.editprofile.bind(this);       
        
    }

    editprofile(e){
        e.preventDefault();
        this.setState({ edit: !this.state.edit });
    }

    componentDidMount() {
        axios.get('/api/urecord/'+this.state.id).
        then(
            res=>{
                console.log(res.data.message);
                // console.log(res.data.datar);
                // console.log(res.data.datai);
                // console.log(res.data.lic);
                // console.log(res.data.date);
                this.setState({ 
                    record:res.data.datar,
                    info:res.data.datai,
                    lic:res.data.lic
                  });
                // console.log(this.state.record);
                // console.log(this.state.info);
                // console.log(this.state.lic);
            }
        );
    }
    

    
    onFocusHandle(e){
        console.log(e.clientX+' '+e.clientY);
        this.some = e.clientX+" "+e.clientY+" Mouse on Focus";

        console.log(this.some);
        // alert(e.clientX+" "+e.clientY); 
        this.setState({
            alerting:true
        });      
       
       setTimeout(() => {
           this.setState({
               alerting:false
           });
       }, 900);
       
        
    }


    handleSubmit(e){
        console.log(e.target.click);
        if(this.state.username){
            this.setState({
                submitted:true,
            });  
            console.log('Form Submitted');
            alert("Username : "+this.state.username);
          
        }
        else{
            console.log('nothing submitted');
            alert("Nothing Submitted!");
            this.setState({
                submitted:false,
            });  
        }
    }

    handleChange(e){
        this.setState({
            username: e.target.value,
        });        
        console.log(this.state.username);
       
    }


    render(){

        const robj = this.state.record;
        return (
            
           <>
                <Navbar page="dashboard"/>                
              
                
                <div className="float-top">
                {this.state.alerting?<div className="alert alert-success alert-dismissible mt-5 float-top ">
                    {this.some}<a className="close" data-dismiss="alert">&times;</a></div>:""} 
                  
                </div>           

                <section id="section1" className="px-3" style={{paddingTop:'4rem'}}>
                    <div className=" border-0 rounded" id="bglemon" >
                                                           
                        <div className="row p-3 ">
                            <div className="col-sm-3 border-0 rounded d-flex justify-content-center" id="">
                                {/* first colum */}
                                <ul>
                                <span className="container" id="ppedit" >
                                <img src={this.fpath} alt="test" className="rounded-circle " id="pp"/>
                                <div className="overlay">
                                <a href="#edit" className="icon text-light" style={{textDecoration:'none'}} ><i className="fas fa-edit fa-lg float-left " style={{color:'white'}} alt="Photo Change"> </i>Change Photo</a>
                                </div>
                                {/* <a href="#edit" className="icon" ><i className="fas fa-edit fa-lg float-left " style={{color:'white'}}> </i></a> */}
                                </span>                                
                                <div className="h3 pt-2 text-center text-light">{this.state.username}</div>
                                <div className="h5 pt-2 text-center text-light"><a  role="button" onClick={this.editprofile} className="text-light" style={{textDecoration:'none'}}>Edit profile</a></div>
                                

                                </ul>
                                
                            </div>
                            

                            
                            <div className="col-sm-9 border-0 rounded table-responsive" id="testbox">
                                {/* second column */}
                                
                                <table className="table table-sm table-borderless table-striped rounded text-light property-inline" id="tabletextcolor">
                                    <thead>
                                        <tr>
                                        <th className="h4" colSpan="2">Details</th>
                                        <th className="h4">Status</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td >Name</td>
                                        <td>{this.state.name}</td>
                                        <td>License</td>
                                        <td>{this.state.lic.name}</td>    
                                        </tr>
                                        <tr>
                                        <td >Address</td>
                                        <td>{this.state.address}</td>
                                        <td>Issued</td>
                                        <td>{this.state.lic.issued}</td>    
                                        </tr>
                                        <tr>
                                        <td >Email</td>
                                        <td>{this.state.email}</td>
                                        <td>Expire</td>
                                        <td>{this.state.lic.expires}</td>    
                                        </tr>
                                        <tr>
                                        <td >Phone</td>
                                        <td>{this.state.phone}</td>
                                        
                                        </tr>
                                        <tr>
                                        <td >NIID</td>
                                        <td>{this.state.niid}</td>
                                           
                                        </tr>
                                        
                                        
                                    </tbody>

                                </table>
                                
                            </div>
                            
                        </div>  
                           
                    </div>

                </section>
                <section id="section2" className="pt-4 px-3" >
                    {/* registration record */}
                
                <div className=" border-0 rounded " id="bglemon">
                <div className="h4 text-center text-light pt-3 ">Registration Record</div>                                   
                        <div className="row p-3">
                        
                            <div className="col-sm-12 border-0 rounded table-responsive" id="testbox" style={{maxHeight:'15rem'}}>

                                {/* second column */}
                     
                                
                                <table className="table table-striped table-hover table-sm table-borderless rounded text-light" id="tabletextcolor">
                                   
                                    <thead className="">
                                        <tr>
                                        <th >Name</th>
                                        <th>Issued</th>
                                        <th>Expires</th>
                                        <th>Renewal</th>   
                                        <th>Remarks</th>
                                        </tr>
                                          
                                        
                                    </thead>
                                    <tbody>
                                    {
                                        
                                        this.state.record.map((d,i)=>(
                                        <tr key={i}>
                                            <td>{d.name}</td>
                                            <td>{d.issued}</td>
                                            <td>{d.expires}</td>
                                            <td>{d.renewal}</td>
                                            <td>{d.remarks}</td>
                                        </tr>           
                                        )
                                                )
                                            }
                                        {/* <tr>                                            
                                            <td>Data</td>
                                            <td>Data</td>
                                            <td>Data</td>
                                            <td>Data</td>
                                            <td>Data</td>
                                         
                                        </tr> */}
                                    </tbody>

                                </table>
                                
                            </div>
                            
                        </div>  
                           
                    </div>                 

                </section>
                <section id="section3" className="py-4 px-3">
                {/* registration data */}
                <div className=" border-0 rounded" id="bglemon">
                <div className="h4 text-center text-light pt-3 ">Registration Data</div>             
                        <div className="row p-3">
                            
                            <div className="col-sm-12 border-0 rounded table-responsive" style={{maxHeight:'15rem'}} id="testbox">
                                {/* second column */}
                                
                                
                                <table className="table table-striped table-sm table-hover table-borderless rounded text-light" id="tabletextcolor">
                                    
                                    <thead>
                                        <tr>
                                        <th >Name</th>
                                        <th>Reg Type</th>
                                        <th>License No.</th>
                                        <th>Action</th>   
                                        <th>Remarks</th>  
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                    {
                                        
                                        this.state.info.map((d,i)=>(
                                        <tr key={i}>
                                            <td>{d.user_reg_id}</td>
                                            <td>{d.regtype}</td>
                                            <td>{d.licno}</td>
                                            <td><a className="text-light" href={d.file} target="_blank" style={{textDecoration:'none'}}><span><i className="far fa-file fa-sm mr-2"></i>{d.licno}</span></a></td>
                                            <td>{d.remarks}</td>
                                        </tr>           
                                        )
                                                )
                                            }
                                        {/* <tr>
                                            <td>Data</td>
                                            <td>Data</td>
                                            <td>Data</td>
                                            <td><a className="text-light" href={this.fpath} download style={{textDecoration:'none'}}><span><i class="far fa-file fa-sm mr-2"></i>Data</span></a></td>
                                            <td>Data</td>
                                         
                                        </tr> */}
                                    </tbody>

                                </table>
                                
                            </div>
                            
                        </div>  
                           
                    </div>    
                </section>

                {this.state.edit?(<Textin page="profile" id={this.state.id}/> ):""}
                

            </>            
        );

    }


}

export default Dashboard;

// ReactDOM.render(<Dashboard/>,document.getElementById('index'));




