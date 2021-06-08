import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,BrowserRouter,useHistory} from 'react-router-dom';
import Navbar from './../Site/Navbar';

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
            username:'',
            uheader:uData.first_name,
            name:name,
            phone:uData.phone,
            submitted:false,
            alerting:false
        };

        this.fpath = "/storage/img/Sami.jpg";
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFocusHandle = this.onFocusHandle.bind(this);
       
        
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
        return (
            
            <div className="container" href="#" >
                <Navbar page="dashboard"/>                
              
                
                <div className="float-top">
                {this.state.alerting?<div className="alert alert-success alert-dismissible mt-5 float-top ">
                    {this.some}<a className="close" data-dismiss="alert">&times;</a></div>:""} 
                  
                </div>           

                <section id="section1"style={{paddingTop:'5rem'}}>
                    <div className="container border-0 rounded" id="bglemon">
                                                           
                        <div className="row p-3">
                            <div className="col-3 border-0 rounded " id="">
                                {/* first colum */}
                                <span className="container">
                                <img src={this.fpath} alt="test" class="rounded-circle " id="pp"/>
                                </span>                                
                                <div className="h3 pt-2 text-center">John</div>
                            </div>
                            <div className="col-9 border-0 rounded" id="testbox">
                                {/* second column */}
                                
                                <table className="table table-borderless rounded">
                                    <thead>
                                        <th className="h4" colSpan="2">Details</th>
                                        <th className="h4">Status</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td >Name</td>
                                        <td>John Doe</td>
                                        <td>License</td>
                                        <td>John Doe</td>    
                                        </tr>
                                        <tr>
                                        <td >Address</td>
                                        <td>plataue, montreal,quebec</td>
                                        <td>Issued</td>
                                        <td>John Doe</td>    
                                        </tr>
                                        <tr>
                                        <td >Email</td>
                                        <td>John Doe</td>
                                        <td>Expire</td>
                                        <td>John Doe</td>    
                                        </tr>
                                        <tr>
                                        <td >Phone</td>
                                        <td>John Doe</td>
                                        
                                        </tr>
                                        <tr>
                                        <td >NIID</td>
                                        <td>John Doe</td>
                                           
                                        </tr>
                                        
                                        
                                    </tbody>

                                </table>
                                
                            </div>
                            
                        </div>  
                           
                    </div>

                </section>
                <section id="section2"  style={{paddingTop:'5rem'}}>
                
                <div className="container border border-success"  >
                        <div className="card">
                            <div className="card-header bg-warning text-dark">Section 2</div>
                            <div  className="card-body">
                                
                            </div>
                        </div>
                    </div>                    

                </section>
                <section id="section3" style={{paddingTop:'5rem'}}>
                <div className="container border border-success"  >
                        <div className="card">
                            <div className="card-header bg-success text-dark">Section 3</div>
                            <div  className="card-body">
                                
                            </div>
                        </div>
                    </div>
                </section>


                

            </div>            
        );

    }


}

export default Dashboard;

// ReactDOM.render(<Dashboard/>,document.getElementById('index'));




