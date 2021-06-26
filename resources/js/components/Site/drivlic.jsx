import axios from "axios";
import React, { Component } from 'react';
import Navbar from './Navbar';

class Dlic extends Component {
    constructor(props) {
        super(props);
        this.state={
            guid:''
        }
    }

    componentDidMount() {
        // console.log('Renewal page loaded');
        this.setState({ guid: '/storage/pdf/drivinglicense.pdf' });
    }
    
    render() { 
        return ( 
            <>
            <Navbar />
            <section id="renewal" className="px-3" style={{paddingTop:'5rem'}} >
                <div className="bg-secondary">
                    <h1 className="text-light text-center pt-2">Driving License Guidline</h1>
                
           
                <div className="container px-2">
                    <iframe src={this.state.guid} frameborder="2" width="100%" height="550rem"></iframe>

                </div>
                </div>

            </section>

            </>
         );
    }
}

export default Dlic;
 

