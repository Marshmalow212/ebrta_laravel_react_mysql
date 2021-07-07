import axios from 'axios';
import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Alert} from 'reactstrap';
import Navbar from './../Site/Navbar';

class Form extends Component {
    constructor(props) {
        super(props);
        let uData = JSON.parse(localStorage.getItem('cUser'));
        this.state={
            id:uData.id,
            isopen:true,
            selop:'',
            niid:uData.niid,
            address:uData.address,
            regtype:'',
            alert:false,
            msg:'Hello people',
            vehdata:{
                user_reg_id:uData.id,
                brand:'',
                model:'',
                engine:'',
                chasis:'',
                year:'',
                rdate:''
            },
            licdata:{
                user_reg_id:uData.id,
                name:'',
                niid:uData.niid,
                dob:'',
                address:uData.address,
                vtype:'',
                ltype:'',
                rdate:''
            },
            rendata:[]

        };

        this.selectopt = this.selectopt.bind(this);
        this.datacol = this.datacol.bind(this);
        this.sendrq = this.sendrq.bind(this);
        this.formref = React.createRef();
    }

    componentDidMount() {
        if(this.state.regtype === 'ren'){
            axios.get('/api/urecord/'+this.state.id).
            then(
                res=>{
                    console.log(res.data.message);
                    // console.log(res.data.datar);
                    // console.log(res.data.datai);
                    this.setState({ 
                        rendata:res.data.datar
                      });
                    console.log(this.state.rendata);
                    // console.log(this.state.info);
                }
            );            
        }
    }
    

    datacol(e){
        e.persist();
        console.log(e.target.name+' '+e.target.value);
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
                ...prevState.licdata,[e.target.name] : e.target.value}})); 
        }
             
        else if(this.state.regtype === 'ren'){
            
        }
        

        // console.log(this.state.vehdata)
        // console.log(this.state.licdata)
        // Object.keys(this.state.licdata).map(
        //     (i)=> {console.log(i+' '+this.state.licdata[i])}
        // );
        

    }

    sendrq(e){
        e.preventDefault();

        // Object.keys(this.state.licdata).map(
        //     (i)=> {console.log(i+' '+this.state.licdata[i])}
        // );
        if(this.state.regtype === 'drl'){
            axios.post('/api/addlicense',this.state.licdata).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    console.log(res.data.reqinfo);
                    this.setState({ msg: res.data.message });
                    setTimeout(() => {
                        this.formref.reset();
                        this.setState({ alert:!this.state.alert});
                    }, 2000);
                    this.setState({ alert: !this.state.alert });
                }
            );
        }
        else if(this.state.regtype === 'veh'){
            axios.post('/api/addvehicle',this.state.vehdata).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    console.log(res.data.reqinfo);
                    this.setState({ msg: res.data.message });
                    setTimeout(() => {
                        this.formref.reset();
                        this.setState({ alert:!this.state.alert});
                    }, 2000);
                    this.setState({ alert: !this.state.alert });
                }
            );
        }
        
    }

    selectopt(e){
        e.preventDefault();
        // console.log(e.target.name+' '+e.target.value);
        this.setState({ [e.target.name]:e.target.value  });
        if(e.target.value === 'ren'){
            axios.get('/api/urecord/'+this.state.id).
            then(
                res=>{
                    console.log(res.data.message);
                    // console.log(res.data.datar);
                    // console.log(res.data.datai);
                    this.setState({ 
                        rendata:res.data.datar
                      });
                    console.log(this.state.rendata);
                    // console.log(this.state.info);
                }
            ); 
        }
    }
    
    render() {
        let vehicleform;
        let licenseform; 
        let renewalform; 

        let showalert = (
            <Modal isOpen={this.state.alert}>
                <Alert color="success">
                    <div className="h4">{this.state.msg}</div>
                    
                </Alert>    

            </Modal>
                
            
            
        );

        if(this.state.regtype === 'veh'){

            vehicleform = (<>
            <h1 className="text-light text-center">Vehicle Registration</h1>
            <form className="container p-2" ref={(el)=>this.formref=el}>
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
                 <label htmlFor="" className=" form-group text-light">Registration Date
                <input onChange={this.datacol} type="date" name="rdate" placeholder="dd-mm-yyyy" className="form-control form-control " />
                
                 </label>
                 <br />

                 <button type="submit" onClick={this.sendrq} className="btn btn-primary">Send Request</button>

            </form>
                </>
                ); 
            
        }
        else if(this.state.regtype === 'drl'){
            licenseform = (<>
                <h1 className="text-light text-center">Driving License Registration</h1>
            <form className="container p-2" ref={(el)=>this.formref=el}>
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">Name
                <input onChange={this.datacol} type="text" name="name" placeholder="" className="form-control form-control " />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">NIID
                <input onChange={this.datacol} type="text" name="niid" placeholder="" defaultValue={this.state.niid} className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">D.O.B
                <input onChange={this.datacol} type="date" name="dob" placeholder="" className="form-control form-control" />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Address
                <input onChange={this.datacol} type="text" name="address" placeholder="" defaultValue={this.state.address} className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                 <label htmlFor="vtype" className="form-group text-light mr-3">Vehicle Type
                 <select name="vtype" onChange={this.datacol} className="form-control ">
                     <option >Vehicle Type</option>
                     <option value="light">Light</option>
                     <option value="medium">Medium</option>
                     <option value="heavy">Heavy</option>
                 </select>
                 </label>
                 <label htmlFor="" className="form-group text-light mr-3">License Type
                 <select name="ltype"  className="form-control " onChange={this.datacol}>
                     <option >License Type</option>
                     <option value="national">National</option>
                     <option value="international">International</option>
                     <option value="roadpermit">Road Permit</option>
                 </select>
                 </label>
                 
                 <label htmlFor="" className=" form-group text-light">Registration Date
                <input onChange={this.datacol} type="date" name="rdate" placeholder="dd-mm-yyyy" className="form-control form-control " />
                
                 </label>
                 <br />

                </span> <br />
                

                 <button type="submit" onClick={this.sendrq} className="btn btn-primary">Send Request</button>

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
                    <tr>
                        <th>Name</th>
                        <th>Issue Date</th>
                        <th>Expiration Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                        { this.state.rendata.map(
                            (d,i)=>(
                                <tr key={i}>
                                <td>{d.name}</td>
                                <td>{d.issued}</td>
                                <td>{d.expires}</td>
                                <td>
                                    <button onClick={this.sendrq} className="btn btn-danger">Renewal Request</button>
                                </td>  
                                </tr>
                            )
                        )                        
                        }
                        
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
            {this.state.alert?showalert:""}
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