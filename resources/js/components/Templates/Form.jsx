import axios from 'axios';
import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Navbar from './../Site/Navbar';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:null,
            isopen:true,
            selop:'',
            regtype:'',
            vehdata:{
                brand:'',
                model:'',
                engine:'',
                chasis:'',
                year:'',
            },
            licdata:{
                name:'',
                niid:'',
                date:'',
                address:'',
                vtype:'',
            },
            rendata:{

            }

        };

        this.selectopt = this.selectopt.bind(this);
        this.datacol = this.datacol.bind(this);
        this.sendrq = this.sendrq.bind(this);
    }

    datacol(e){
        if(this.state.regtype === 'veh'){
            this.setState(prevState=>({
                vehdata:{
                    ...prevState.vehdata ,[e.target.name] : e.target.value
              }}));
        }
        else if(this.state.regtype === 'drl'){
            // this.setState({ ...this.state.licdata,[e.target.name]:e.target.value});
            let targetname = e.target.name
            this.setState(prevState=>({
                licdata: {
                ...prevState.licdata,[targetname] : e.target.value}})); 
        }
             
        else if(this.state.regtype === 'ren'){}
        

        // console.log(this.state.vehdata)
        // console.log(this.state.licdata)
        // Object.keys(this.state.licdata).map(
        //     (i)=> {console.log(i+' '+this.state.licdata[i])}
        // );
        

    }

    sendrq(e){

    }

    selectopt(e){
        console.log(e.target.name+' '+e.target.value);
        this.setState({ [e.target.name]:e.target.value  });
    }
    
    render() {
        let vehicleform;
        let licenseform; 
        let renewalform; 

        if(this.state.regtype === 'veh'){

            vehicleform = (<>
            <h1 className="text-light text-center">Vehicle Registration</h1>
            <form className="container p-2">
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">Brand
                <input onChange={this.datacol} type="text" name="brand" placeholder="Toyota" className="form-control form-control " />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Model
                <input onChange={this.datacol} type="text" name="model" placeholder="Axios X series" className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">Engine No.
                <input onChange={this.datacol} type="text" name="engine" placeholder="BDJDB46587" className="form-control form-control" />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Chasis No.
                <input onChange={this.datacol} type="text" name="chasis" placeholder="JD45487445" className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <label htmlFor="" className=" form-group text-light">Year
                <input onChange={this.datacol} type="text" name="year" placeholder="2012" className="form-control form-control " />
                 </label> <br />

                 <button type="submit" className="btn btn-primary">Send Request</button>

            </form>
                </>
                ); 
            
        }
        else if(this.state.regtype === 'drl'){
            licenseform = (<>
                <h1 className="text-light text-center">Driving License Registration</h1>
            <form className="container p-2">
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">Name
                <input onChange={this.datacol} type="text" name="name" placeholder="" className="form-control form-control " />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">NIID
                <input onChange={this.datacol} type="text" name="niid" placeholder="" className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">D.O.B
                <input onChange={this.datacol} type="text" name="date" placeholder="" className="form-control form-control" />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Address
                <input onChange={this.datacol} type="text" name="address" placeholder="" className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                 <label htmlFor="" className="form-group text-light mr-3">Vehicle Type
                 <select name="vtype" onChange={this.datacol} className="form-control ">
                     <option >Vehicle Type</option>
                     <option value="light">Light</option>
                     <option value="medium">Medium</option>
                     <option value="heavy">Heavy</option>
                 </select>
                 </label>
                 <label htmlFor="" className="form-group text-light">License Type
                 <select name="ltype"  className="form-control " onChange={this.datacol}>
                     <option >License Type</option>
                     <option value="national">National</option>
                     <option value="international">International</option>
                     <option value="roadpermit">Road Permit</option>
                 </select>
                 </label>

                </span> <br />
                

                 <button type="submit" className="btn btn-primary">Send Request</button>

            </form>

                    </>
                    );
        }
        else if(this.state.regtype === 'ren'){
            renewalform = (<>
                <h1 className="text-light text-center">Registration Renewal</h1>
                <div className="container">
                <table className="table table-dark border-0 rounded">
                    <thead>
                        <th>Name</th>
                        <th>Reg No.</th>
                        <th>Remarks</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <td>Driving License</td>
                        <td>LKJLKJ33434</td>
                        <td>Expires soon</td>
                        <td>
                            <button className="btn btn-danger">Renewal Request</button>
                        </td>
                    </tbody>
                </table>

                </div>
                
                    </>
                    );
        }


        return ( 
            <>
            <Navbar/>
            <section id="regform" className="px-3" style={{paddingTop:'5rem'}}>
                <div className="bg-dark form-group text-center mb-0 border-0 rounded"  >
                    <span>
                        
                    <label htmlFor="type" className="h5 text-light p-2" >Registration Type                                      
                    <select className="form-control form-control-md mt-2" id="type" name="regtype"  onChange={this.selectopt}>
                    <option>Select from here</option>
                    <option value="veh">Vehicle</option>
                    <option value="drl">Driving License</option>
                    <option value="ren">Renewal</option>
                    </select>
                    </label>  
                    </span>
                </div>
                <div className="bg-dark form-group border-0 rounded">
                {vehicleform}
                {licenseform}
                {renewalform}
                </div>
                


            </section>

            </>
         );
    }
}
 
export default Form;