import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    constructor(props){
        super(props);
        var uname = ""; 
        if(this.props.page==='dashboard'){let uData = JSON.parse(localStorage.getItem("cUser"));
        
        this.uname = uData.first_name;
        console.log(this.uname);
    }
        console.log(this.props.page);

        this.hLB = this.hLB.bind(this);
        this.hSB = this.hSB.bind(this);
        
    }


    hLB(e){
        e.preventDefault();
        let trig = {'stat':true}
        localStorage.setItem('loginpage',JSON.stringify(trig));
        window.open('/','_self');
    }

    hSB(e){

    }

    render(){

        let homepage,dashboardpage;
        homepage=(<>
            <li className="nav-item mr-0" style={{marginLeft:'30rem'}}>
                            <a type="button" className="nav-link text-light" onClick={this.hLB} >Login</a>
                            </li>
                            <li className="nav-item mr-0 text-light nav-link">|</li>
                            <li className="nav-item mr-0">
                                <Link to="/register"  className="nav-link text-light">Sign up</Link>
                            </li>
                            </>
        );

        dashboardpage=(
            <>
            <li className="nav-item " >
                            <a className="nav-link text-light" >{this.uname}</a>
                            </li>               
                            <li className="nav-item mr-0 text-light nav-link">|</li>
                            <li className="nav-item mr-0">
                                <Link to="/" onClick={()=>{localStorage.removeItem('cUser')}} className="nav-link text-light">Log Out</Link>
                            </li>
                            
            </>
        );

        return(

            <div className="navbar navbar-default navbar-collapse navbar-expand-lg navbar-light bg-dark fixed-top justify-content-between" id="">
                    <ul className="navbar-nav">
                       
                            <li className="nav-item mr-2"><a className="nav-link text-light"href="#">Home</a></li>
                        <li className="nav-item mr-2"><a className="nav-link text-light"href="#section1">Services</a></li>
                        <li className="nav-item mr-2"><a className="nav-link text-light"href="#section2">Press Release</a></li>
                        <li className="nav-item mr-2"><a className="nav-link text-light"href="#section3">Contacts</a></li>
                      
                    </ul>
                    <ul className="navbar-nav">
                    {this.props.page==='dashboard'?dashboardpage:homepage}
                    </ul>
                                 
                </div >
        );
    }
}

export default Navbar;