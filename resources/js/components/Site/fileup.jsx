import React,{Component} from 'react';
import axios from 'axios';
import { divide } from 'lodash';

class Fileup extends Component{

    constructor(props){
        super(props);

        this.state={
            image:'',
            raw:'',
            retfile:'',
            take:'',
        }

        var data;
        var dataraw;

        this.hFile = this.hFile.bind(this);
        this.inFile = this.inFile.bind(this);
        this.takein = this.takein.bind(this);
        this.sendd = this.sendd.bind(this);
        
    }

    takein(e){
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );

    }
    sendd(e){
        e.preventDefault()



        const datatake = {
            take:this.state.take
        }

        console.log(datatake);
        const name = 'erfan'

        axios.put('http://localhost:8000/api/testout/'+ name,datatake).
        then((res)=>{
            console.log(res.data);
        }

        );

    }

    inFile(e){        
        this.data = e.target.files[0];
        this.dataraw = e.target.files;
        this.setState({
            raw:this.dataraw
        });
        // console.log(this.data);

        let reader = new FileReader();

        reader.onload = (e)=>{
            this.setState({
                image:e.target.result
            });
        };

        reader.readAsDataURL(this.data);
    }



    hFile(e){
        e.preventDefault();

        console.log(this.dataraw);
        // console.log(this.state.image);
        const dataA = new FormData();
        dataA.append("files",this.state.image);
        dataA.append("fileraw",this.state.raw[0]);
        // let A = {
        //     'files':this.state.image,
        //     'fileraw':this.state.raw[0]
        // }
        // const dataA = new FormData(A);
    
        
        axios.post('http://localhost:8000/api/fileupload',dataA)
        .then((response)=>{
            console.log('Response : '+response.data.message+'\n'+response.data.file);
        }

        );
    }



    render(){

        return(
            <div className="container">
                <img src={this.state.image} id="picdata"/>
                <form onSubmit={this.hFile} encType="multipart/form-data">
                <label className="form-group">Profile Photo</label>                                    
                 <input type="file" name="propic" className="form-control"  onChange={this.inFile}/>
                             
                 <br/>

                <button type="submit" className="btn btn-success mr-2" >Sign up</button> 

                </form>

                {/* <img src="storage/img/mask.jpg" id="picdata"/> */}

                <div className="container bg-light">
                    <span><input name="take" type="text" onChange={this.takein} /> <br/>
                    <input className="btn btn-success btn-small" type="submit" onClick={this.sendd}/></span>
                </div>

            </div>
        );
    }
}

export default Fileup;