import axios from 'axios';
import React, { Component } from 'react';


class adminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id,
            role:'Host Admin Developer',
            date:'',
            rendata:[]

        }
        this.reqinfo = this.reqinfo.bind(this);
    }

    reqinfo(e){

        axios.get('/api/getuserreq').
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    this.setState({ rendata: res.data.data });
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
                        <div className="display-4">E-BRTC Admin Panel</div>
                        <hr className="my-4"/>
                        <span><h5>Admin Name :</h5> <h5>{this.state.id}</h5></span><br />
                        <span><h5>Admin Role :</h5> <h5>{this.state.role}</h5></span><br />
                        <span><h5>Date :</h5> <h5>YYY-MM-DD</h5></span>
                    </div>
                    <div className="jumbotron">
                        <div className="h4">Registration Requests</div>
                        <hr className="my-4"/>
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
                    <div className="jumbotron">
                    <div className="h4">Renewal Requests</div>
                        <hr my-4/>
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

                </section>
            </div>
         );
    }
}
 
export default adminDashboard;