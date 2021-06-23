import axios from "axios";
import React, { Component } from 'react';
import Navbar from './Navbar';

class Renewal extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() { 
        return ( 
            <>
            <Navbar />
            <section id="renewal" className="px-3" style={{paddingTop:'5rem'}} >
                <div className="bg-info">
                    <h1 className="text-light">Renewal Guidline</h1>
                </div>
            </section>

            </>
         );
    }
}
 
export default Renewal;