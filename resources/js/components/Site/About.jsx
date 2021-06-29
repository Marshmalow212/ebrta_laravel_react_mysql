import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Navbar from './Navbar';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() { 
        return (<div>
            <Navbar />            
            <Jumbotron style={{paddingTop:'5rem'}}>
                <h1 className="display-3">About BRTA</h1>
                <hr className="my-2" />
                <p className="lead">
                Bangladesh Road Transport Authority (BRTA) was Established under section 2A of Motor Vehicle Ordinance 1983, (Amendment-1987) Vide SRO No-303/Law/87/MVRT/1E-7/84(part), Dated 20/12/87 and has been functioning since January 1988.
BRTA is a regulatory body to control manage and ensure discipline in the road transport sector and road safety related areas in Bangladesh. It is an authority under Road Transport and Highways Division of the Ministry of Road Transport and Bridges for carrying out the purposes mentioned in the Road Transport Act, 2018 and Bangladesh Road Transport Authority Act, 2017. The Chairman is the chief executive of the authority. He exercises such power and performs such function as prescribed by rules and assigned by the government from time to time.
As per revised organogram total number of circle is 62 (57 District Circle + 5 Metro Circle). At present 57 circles are working where 61 AD (Engg.) is posted as head of the office. Rest of the sanctioned circles are administered from near by circles (57 circles).
According to revised organogram the number of sanctioned office staff is 815 out of which 479 are working presently & Vacant Post 336. The remaining post are in the process of recruitment.
Circle offices of BRTA are headed by Assistant Director (Engg.) and the divisional offices by Deputy Director (Engg.).
                    
                </p>
            </Jumbotron> 
            <Jumbotron >
                <h1 className="display-3">Mission & Vision</h1>
                <hr className="my-2" />
                <p className="lead">
                A way to less people's hassle for one of the civil services with the help of ICT division.                     
                </p>
            </Jumbotron> 

        </div>);
    }
}
 
export default About;