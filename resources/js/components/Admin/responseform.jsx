import React, { Component } from 'react';
import { Modal,ModalBody, ModalHeader,ModalFooter } from 'reactstrap';
import { Alert } from 'reactstrap';

class Resform extends Component {
    constructor(props) {
        super(props);
        this.state={
            regtype:'',
            id:(this.props.reqid?this.props.reqid:100001),
            open:false,
            ret:{},
            vdata:{},
            ldata:{},
            msg:'Hello people',
            alert:false,
            formdata:new FormData()
        }

        this.formref = React.createRef();
        this.getdata(this.state.id);
        this.closethis = this.closethis.bind(this);
        this.sendreq = this.sendreq.bind(this);
        this.fileh = this.fileh.bind(this);

    }

    fileh(e){
        // e.preventDefault();
        // this.setState({ file: [e.target.files[0]] });
        const fileraw = e.target.files[0];
        console.log(fileraw);
        this.state.formdata.append('file',e.target.files[0]);
    }

    sendreq(e){
        e.preventDefault();
        // console.log(this.state.file);
        if(this.state.regtype === 'veh'){
            console.log(this.state.vdata);
            for(var i in this.state.vdata){
                this.state.formdata.append(i,this.state.vdata[i]);
            }
            console.log(this.state.formdata.get('file')); 
            
            axios.post('/api/updatereq',this.state.formdata).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    console.log(res.data.reqdata);
                    console.log(res.data.info);
                    this.setState({msg: res.data.message , alert: !this.state.alert });  
                    setTimeout(() => {
                        this.setState({alert: !this.state.alert });                     
                    }, 3000);
                    this.formref.reset();
                    setTimeout(() => {
                        this.setState({ open: !this.state.open });
                    }, 2000);
                  
                    window.open("/admindashboard","_self");

                }
            );

        }
        else if(this.state.regtype === 'drl'){
            
            console.log(this.state.ldata);
            for(var i in this.state.ldata){
                this.state.formdata.append(i,this.state.ldata[i]);
            }
            console.log(this.state.formdata.get('file')); 
            
            axios.post('/api/updatereq',this.state.formdata).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    console.log(res.data.reqdata);
                    console.log(res.data.info);
                    this.setState({msg: res.data.message , alert: !this.state.alert });  
                    setTimeout(() => {
                        this.setState({alert: !this.state.alert });                     
                    }, 3000);
                    this.formref.reset();
                    setTimeout(() => {
                        this.setState({ open: !this.state.open });
                    }, 2000);
                  
                    window.open("/admindashboard","_self");

                }
            );

        }
    }

    closethis(e){
        e.preventDefault();
        this.setState({ open: !this.state.open });
        window.open("/admindashboard","_self");
    }
    

    getdata(id){
        console.log(id);
        if(!id){
            // setTimeout(() => {
            //     this.setState({ open:!this.state.open });
            // }, 3000);
        }
        else if (id< 200001) {
            axios.get('/api/getvehicle/'+id).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    this.setState({ vdata: res.data.data, regtype:'veh',open: !this.state.open  });
                }
            );
            
        } else {
            axios.get('/api/getlicense/'+id).
            then(
                res=>{
                    console.log(res.data.message);
                    console.log(res.data.data);
                    this.setState({ ldata: res.data.data, regtype:'drl',open: !this.state.open });
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
            <form className="container p-2" ref={(el)=>this.formref=el} encType="multipart/form-data">
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
                <input value={this.state.vdata.rdate} readOnly={true} type="date" name="rdate" placeholder="dd-mm-yyyy" className="form-control  " />
                
                 </label><br />
                 <label htmlFor="" className="form-group text-light">Attach License File
                 <input type="file" className="form-control form-control-input" onChange={this.fileh}/>
                     </label>                
                 <br />
                <div className="form-group text-light button-group">
                <button type="submit" onClick={this.sendreq} className="btn btn-primary mr-2">Approve</button>
                <button type="submit" onClick={this.closethis} className="btn btn-primary">Cancel</button>
                </div>
                 

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
                <input value={this.state.ldata.name} readOnly={true} type="text" name="name" placeholder="" className="form-control form-control " />
                 </label>    
                 
                             
                </span><br />
                <span>
                <label htmlFor="" className=" form-group text-light mr-3">D.O.B
                <input value={this.state.ldata.dob} readOnly={true} type="date" name="dob" placeholder="" className="form-control form-control" />
                 </label>    
                 <label htmlFor="" className=" form-group text-light">Address
                <input value={this.state.ldata.address} readOnly={true} type="text" name="address" placeholder="" className="form-control form-control " />
                 </label>  
                             
                </span><br />
                <span>
                 <label htmlFor="vtype" className="form-group text-light mr-3">Vehicle Type
                 <input name="vtype" type="text" value={this.state.ldata.vtype} readOnly={true} className="form-control "></input>
                 </label>

                 <label htmlFor="" className="form-group text-light mr-3">License Type
                 <input name="ltype" type="text"  className="form-control " value={this.state.ldata.ltype} readOnly={true}></input>
                  </label>
                 
                 <label htmlFor="" className=" form-group text-light">Registration Date
                <input value={this.state.ldata.rdate} readOnly={true} type="date" name="rdate" placeholder="dd-mm-yyyy" className="form-control form-control " />
                
                 </label>
                 <br />

                </span> <br />
                <label htmlFor="" className="form-group text-light">Attach License File
                 <input type="file" className="form-control form-control-input" onChange={this.fileh}/>
                     </label>                
                 <br />
                

                <div className="form-group text-light" className="button-group">
                <button type="submit" onClick={this.sendreq} className="btn btn-primary mr-2">Approve</button>
                <button type="submit" onClick={this.closethis} className="btn btn-primary">Cancel</button>
                </div>

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