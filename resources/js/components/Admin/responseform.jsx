import React, { Component } from 'react';
import { Modal,ModalBody, ModalHeader,ModalFooter } from 'reactstrap';
import { Alert } from 'reactstrap';

class Resform extends Component {
    constructor(props) {
        super(props);
        this.state={
            regtype:null,
            id:100001,
            open:false,
            ret:{},
            vdata:{},
            ldata:{},
            msg:'Hello people',
            alert:false 
        }

        this.formref = React.createRef();
        this.getdata(this.state.id);
    }

    getdata(id){
        if (id< 200001) {
            axios.get('/api/getvehicle/'+id).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    this.setState({ vdata: res.data.data, regtype:'veh', open:!this.state.open });
                }
            );
            
        } else {
            axios.get('/api/getlicense/'+id).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
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
                <div className="bg-primary">
                <Alert color="primary" >
                    <div className="h5 ">{this.state.msg}</div>
                    
                </Alert>

                </div>
                    

            </Modal>
                
            
            
        );

        if(this.state.regtype === 'veh'){

            vehicleform = (<>
            <h1 className="text-light text-center">Vehicle Registration</h1>
            <form className="container p-2" ref={(el)=>this.formref=el}>
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">Brand
                <input value={this.state.vdata.brand} readOnly={true} type="text" name="brand" placeholder="Toyota" className="form-control form-control " />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Model
                <input value={this.state.vdata.model} readOnly={true} type="text" name="model" placeholder="Axios X series" className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">Engine No.
                <input value={this.state.vdata.engine} readOnly={true} type="text" name="engine" placeholder="BDJDB46587" className="form-control form-control" />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Chasis No.
                <input value={this.state.vdata.chasis} readOnly={true} type="text" name="chasis" placeholder="JD45487445" className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <label htmlFor="" className=" form-group text-light">Year
                <input value={this.state.vdata.year} readOnly={true} type="text" name="year" placeholder="2012" className="form-control form-control " />
                </label> <br />
                 <label htmlFor="" className=" form-group text-light">Registration Date
                <input value={this.state.vdata.rdate} readOnly={true} type="date" name="rdate" placeholder="dd-mm-yyyy" className="form-control form-control " />
                
                 </label>
                 <br />

                 <button type="submit" onClick={this.sendrq} className="btn btn-primary">Approve</button>

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
                <input defaultValue={this.datacol} type="text" name="name" placeholder="" className="form-control form-control " />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">NIID
                <input defaultValue={this.datacol} type="text" name="niid" placeholder="" defaultValue={this.state.niid} className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">D.O.B
                <input defaultValue={this.datacol} type="date" name="dob" placeholder="" className="form-control form-control" />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Address
                <input defaultValue={this.datacol} type="text" name="address" placeholder="" defaultValue={this.state.address} className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                 <label htmlFor="vtype" className="form-group text-light mr-3">Vehicle Type
                 <input name="vtype" type="text" defaultValue={this.datacol} className="form-control "></input>
                 </label>

                 <label htmlFor="" className="form-group text-light mr-3">License Type
                 <input name="ltype" type="text"  className="form-control " defaultValue={this.datacol}></input>
                  </label>
                 
                 <label htmlFor="" className=" form-group text-light">Registration Date
                <input defaultValue={this.datacol} type="date" name="rdate" placeholder="dd-mm-yyyy" className="form-control form-control " />
                
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
                        <th>Reg No.</th>
                        <th>Remarks</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                        <td>Driving License</td>
                        <td>LKJLKJ33434</td>
                        <td>Expires soon</td>
                        <td>
                            <button onClick={this.sendrq} className="btn btn-danger">Renewal Request</button>
                        </td>  
                        </tr>
                        
                        
                    </tbody>
                </table>

                </div>
                
                    </>
                    );
        }
        
        
        return ( 
            <div className="py-3">
                <Modal isOpen={this.state.open} >
                    <div className="container border-0 rounded p-3 bg-dark">
                    {vehicleform}
                    {licenseform}
                    {showalert}
                    </div>
                     
                </Modal>
               
            </div>
         );
    }
}
 
export default Resform;