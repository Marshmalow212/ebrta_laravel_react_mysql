import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Textin from './../Templates/Textin';
import LoginModal from './../User/LoginModal';

class Navbar extends Component{
    constructor(props){
        super(props);
        var uname = ""; 
        if(this.props.page==='dashboard'){let uData = JSON.parse(localStorage.getItem("cUser"));
        
        this.uname = uData.first_name;
        console.log(this.uname);
    }
    this.state = {
        showlogin:false,
        showreg:false
    }
        console.log(this.props.page);

        this.hLB = this.hLB.bind(this);
        this.hSB = this.hSB.bind(this);
        
    }


    hLB(e){
        e.preventDefault();
        let trig = {'stat':true}
        localStorage.setItem('loginpage',JSON.stringify(trig));
            this.setState({ showlogin:!this.state.showlogin  });
        // window.open('/','_self');
    }

    hSB(e){
        e.preventDefault();

        this.setState({ showreg: !this.state.showreg  });

    }

    render(){

        let homepage,dashboardpage;
        homepage=(
        <>
            <li className="nav-item mr-0">
                    <a type="button" className="nav-link text-light" onClick={this.hLB} >Login</a>
            </li>
            <li className="nav-item mr-0 text-light nav-link">|</li>
            <li className="nav-item mr-0">
                {/* <Link to="/register"  className="nav-link text-light">Sign up</Link> */}
                <a type="button" className="nav-link text-light" onClick={this.hSB} >Register</a>
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
            <>
            <div className="navbar navbar-expand-lg  navbar-light fixed-top "  id="navbarcolor">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#togglenavbar" aria-expanded='false'>
    <span class="navbar-toggler-icon"></span>
  </button>
                <div className="collapse navbar-collapse justify-content-between" id="togglenavbar" >
                    <ul className="navbar-nav">
                        
                        <li className="nav-item mr-2"><a className="nav-link text-light"href="/">Home</a></li>
                    <li className="nav-item mr-2 dropdown"><a className="nav-link text-light dropdown-toggle "href="#" role="button" data-toggle="dropdown" aria-expanded="false">Services</a>
                    <div class="dropdown-menu bg-info " aria-labelledby="navbarDarkDropdownMenuLink">
          <a class="dropdown-item " href="/vehiclereg">Vehicle Registration</a>
          <a class="dropdown-item " href="/drivinglicense">Driving License</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item " href="/renewal">Renewal</a>
        </div>
                    </li>
                    <li className="nav-item mr-2"><a className="nav-link text-light"href="#section2">Press Release</a></li>
                    <li className="nav-item mr-2"><a className="nav-link text-light"href="#section3">Contacts</a></li>
                    
                </ul>
                <ul className="navbar-nav">
                {this.props.page==='dashboard'?dashboardpage:homepage}
                </ul>
                            
           </div >

                </div>
                    
                {this.state.showlogin?<LoginModal />:""}
                {this.state.showreg?<Textin />:""}
                </>
        );
    }
}

export default Navbar;