import React, {Component} from "react";
import './Form.css';
import axios from "axios";
 
const currDate=new Date();

var date=currDate.getDate();

var month=currDate.getUTCMonth();
var monthNew=month+1;

var year=currDate.getUTCFullYear();

var fullDate=date +"/" + monthNew +"/" +year;

export default class Form extends Component
{   
    
    constructor(props){
        super(props);
        this.isChecked=this.isChecked.bind(this);
        this.state=
        {
            empId: "",
            firstName: "",
            lastName: "",
            laptopId: "",
            desktopId:"",
            hotspotId:"",
            machineType: "",
            dateOfAssetReceived: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        
        
        function Form(){

        async function OnClickSubmit(){
        
            axios.post('http://localhost:9090/asset', {
        
                EmpId: '132',
        
                    EmployeeName: 'Suresh kumar'
        
                  })
        
                  .then((response) => {
        
                    console.log(response);
        
                  }, (error) => {
        
                    console.log(error);
        
                  });
        
            }
        }
    }

    isChecked = (chk,laptopSection) => {
        var laptopBox = document.getElementById(laptopSection);
        if (chk.checked == true) {
        laptopBox.disabled = false;
      } else {
        laptopBox.disabled = true;
      };
   
  }
    txtChangeLaptop(e4) {
        this.setState({input: e4.target.checked});
    }  
    
    txtChange(e) {
      this.setState({input: e.target.checked});
      
    }
    txtChangeDesktop(e2) {
        this.setState({input: e2.target.checked});
    }
    txtChangeButton(e3){
        this.setState({button: e3.target.checked});
    }

    idhandler=(event) =>{
        this.setState({
            empId: event.target.value
        })
    }
    firstNamehandler=(event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    lastNamehandler=(event) =>{
        this.setState({
            lastName: event.target.value
        })
    }
    laptophandler=(event) =>{
        this.setState({
            laptopId: event.target.value
        })
    }
    desktophandler=(event) =>{
        this.setState({
            desktopId: event.target.value
        })
    }
    hotspothandler=(event) =>{
        this.setState({
            hotspotId: event.target.value
        })
    }
    machinehandler=(event) =>{
        this.setState({
            machineType: event.target.value
        })
    }
    datehandler=(event) =>{
        this.setState({
            dateOfAssetReceived: event.target.value
        })
    }

    handleSubmit=(event) => {
        alert('  Shipment succesfully delivered!!')
        console.log(this.state);
        this.setState({
            empId:"",
            firstName: "",
            lastName:"",    
            laptopId: "",
            desktopId:"",
            hotspotId:"",
            machineType: "",
            dateOfAssetReceived: "", 
        })
        event.preventDefault()
    
    }

    

    render(){
        return(    
           
            <div>
                <form className="demoForm" onSubmit={this.handleSubmit}>
                 <br></br>
                 <div > 
                 <label>Employee ID:</label> 
                 <br></br>
                 <input 
                 type="text" 
                 className="form-control" 
                 value={this.state.empId} 
                 onChange={this.idhandler} 
                 placeholder="Employee Id"
                 /> 
                 </div>
                 <br></br>

                <div > 
                 <label>Employee Name:</label> 
                 <br></br>
                 <input 
                 type="text" 
                 id="name"
                 className="form-name-control" 
                 value={this.state.firstName} 
                 onChange={this.firstNamehandler} 
                 placeholder="First name"
                 /> 
                <input 
                 type="text" 
                 id="name"
                 className="form-name-control" 
                 value={this.state.lastName} 
                 onChange={this.lastNamehandler} 
                 placeholder="Last name"
                 />                 
                 </div>
                 <br></br>
                 
                        
                 <div >
                 <label>Asset Received </label> 
                 
                 <br></br>
                 <form className="assetForm"> 
                 <div className="form-check">
                     <input type="checkbox" className="form-check-input" id="laptopCheckbox" onChange={this.txtChangeLaptop.bind(this)}/>
                     <label className="form-check-label ms-2">Laptop</label>
                    <input type="text"  disabled={!this.state.input} className="assetTypes" value={this.state.laptopId} onChange={this.laptophandler} id="laptopSection" placeholder="Laptop Id"/><br/>           
                 </div>
                 <div className="form-check">
                    <input type="checkbox" className="form-check-input" onChange={this.txtChangeDesktop.bind(this)}/>
                     <label className="form-check-label ms-2">Desktop</label>
                     <input type="text" disabled={!this.state.input} className="assetTypes2" value={this.state.desktopId} onChange={this.desktophandler} placeholder="Desktop Id"/><br/>
                 </div>
                 <div className="form-check">
                     <input type="checkbox" className="form-check-input" onChange={this.txtChange.bind(this)}/>
                     <label className="form-check-label ms-2">Hotspot</label>
                     <input type="text" disabled={!this.state.input} className="assetTypes3" value={this.state.hotspotId} onChange={this.hotspothandler} placeholder="Hotspot Id"/><br/>
                 </div>
                 </form>
                        <br></br>
                       
                </div>
               

                <div>
                <label>Date of Asset Received: </label> 
                <br></br>
                <input id="dateRequired" type="text" disabled = {true} className="form-control"  defaultValue={fullDate} /><br/> 
                </div> 
                
                <br></br>
                <input type="checkbox" className="confirm-check-input" onChange={this.txtChangeButton.bind(this)}/>
                <label className="confirm-check-label-ms-2">I confirm that product is delivered in good condition</label>

                <div className="fluidButton">
                <button disabled={!this.state.button} onClick={() => Form.OnClickSubmit()}>Submit</button>
                </div>
                </form>
                
            </div>
           
        )
    }



}