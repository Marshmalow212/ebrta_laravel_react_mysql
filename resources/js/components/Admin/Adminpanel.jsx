import axios from "axios";
import React, { Component } from 'react';
import LoginModal from "../User/LoginModal";
import { Modal,ModalBody, ModalHeader, ModalFooter, Jumbotron,Form,Label,Input,Button,FormGroup} from "reactstrap";
import adminDashboard from "./Admindashboard";

class Adminpanel extends Component {
    constructor(props) {
        super(props);
        this.state={
            login:false,
            id:'',
            pass:'',
            content:false
        }

        this.hfield = this.hfield.bind(this);
        this.submit = this.submit.bind(this);
    }
    hfield(e){
        this.setState({ [e.target.name]:e.target.value  });

    }
    submit(e){
        e.preventDefault();
        console.log(this.state);
        if(this.state.id === 'admin'){
            if(this.state.pass === '1111'){
                this.setState({ login: !this.state.login, content:true });
                sessionStorage.setItem('admin',JSON.stringify({id:this.state.id}));
                window.open("/admindashboard","_self");
            }
        }
    }
    
    render() { 
        let adminlogin = (
            <Modal isOpen={!this.state.login} size="sm" >
            <ModalHeader className="bg-secondary text-light" >
                <h4>Admin Login</h4>
            </ModalHeader>
            <ModalBody className="bg-secondary">
                <Form className="text-light">
                   <FormGroup>
                       <Label>Admin ID</Label>
                       <Input type="email" name="id" onChange={this.hfield}></Input>
                       
                   </FormGroup>
                    
                   <FormGroup>
                       <Label>Pin Code </Label>
                       <Input type="password" name="pass" onChange={this.hfield}></Input>
                      
                   </FormGroup>
                   <FormGroup>
                       <Button color="primary" onClick={this.submit}>Authorize</Button>
                   </FormGroup>

                </Form>

            </ModalBody>

        </Modal>
        );

        return (
            <>
            <div>
               {adminlogin}

            </div>
            </>
          );
    }
}
 
export default Adminpanel;
