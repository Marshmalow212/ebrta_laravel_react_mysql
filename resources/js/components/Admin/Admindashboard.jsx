import axios from 'axios';
import React, { Component } from 'react';


class adminDashboard extends Component {
    constructor(props) {
        super(props);
        let admindata = JSON.parse(sessionStorage.getItem('admin'));
        this.state={
            id:admindata.id,
            role:'Host Admin Developer',
            date:new Date().toDateString(),
            rendata:[],
            reqdata:[],
            sel:[]

        }
        this.sel=[];
        this.reqinfo = this.reqinfo.bind(this);
        this.changestat = this.changestat.bind(this);
    }

    componentDidMount() {
        axios.get('/api/getuserreq').
        then(
            res=>{
                console.log(res.data.message);
                console.log(res.data.data);
                this.setState({ reqdata: res.data.data });

            }
        );
    }

    changestat(e){
        e.preventDefault();
        console.log(e.target.value);
        let values = e.target.value.split(',');
        // console.log(values);        
        // console.log(values[0]);        
        // console.log(values[1]);   
        axios.post('/api/updatereq/'+values[1],{status:values[0]}).
        then(
            res=>{
                console.log(res.data.message);
                console.log(res.data.data);

                window.open('?','_self');
                
            }
        );     
    }
    

    reqinfo(e){
        e.preventDefault();
        axios.get('/api/checkreq').
        then(
            res=>{
                console.log(res.data);
            }
        );
            
    }
    
    render() { 

        let statselect = (
            <select className="dropdown dropdown-toggle" name="status" id="dropdown">
                <option value="pending">pending</option>
                <option value="processing">in progress</option>
                <option value="approve">approved</option>
                <option value="reject">rejected</option>
            </select>
        );

        
        return ( 
            <div>
                <section className="bg-info  p-3">
                    <div className="jumbotron">
                        <div className="display-4">E-BRTA Admin Panel</div>
                        <hr className="my-4"/>
                        <span><h5>Admin Name :</h5> <h5>{this.state.id}</h5></span><br />
                        <span><h5>Admin Role :</h5> <h5>{this.state.role}</h5></span><br />
                        <span><h5>Date :</h5> <h5>{this.state.date}</h5></span>
                    </div>
                    <div className="jumbotron">
                        <div className="h4">Registration Requests</div>
                        <hr className="my-4"/>
                        <div className="table-responsive" style={{maxHeight:'15rem'}}>
                        <table className="table table-dark border-0 rounded " >
                            <thead> 
                                <tr>
                                    <td>Request No.</td>
                                    <td>Request Info No.</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.reqdata.map(
                                        (d,i)=>(
                                            <tr key={i}>
                                                <td>{d.id}</td>
                                                <td><a href="#" className="text-light" role="button" onClick={this.reqinfo} style={{textDecoration:'none'}}>{d.reqinfo_id}</a></td>
                                                <td>
                                                    
                                                    <select key={d} className="dropdown dropdown-toggle" onChange={this.changestat}  name="status" id="dropdown">
                                                        <option value="pending">{d.status}</option>
                                                        <option value={["processing",d.id]}>in progress</option>
                                                        <option value={["approved",d.id]}>approved</option>
                                                        <option value={["rejected",d.id]}>rejected</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                                <tr>
                                    <td>Data</td>
                                    <td> <a href="#" className="text-light" role="button" onClick={this.reqinfo} style={{textDecoration:'none'}}>Data</a></td>
                                    <td>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        </div>
                        

                    </div>
                    <div className="jumbotron">
                    <div className="h4">Renewal Requests</div>
                        <hr className="my-4"/>
                        <div className="table-responsive" style={{maxHeight:'15rem'}}>
                        <table className="table table-dark">
                            <thead> 
                                <tr>
                                    <td>Request No.</td>
                                    <td>Request Info No.</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Data</td>
                                    <td> <a href="#" className="text-light" role="button" onClick={this.reqinfo} style={{textDecoration:'none'}}>Data</a></td>
                                    <td>{statselect}</td>
                                </tr>

                            </tbody>
                        </table>
                        </div>
                    </div>

                </section>
            </div>
         );
    }
}
 
export default adminDashboard;