import React,{useState,setState}  from 'react';
import * as Yup from 'yup';
import './form.css';
import { useNavigate } from "react-router";



 function Form() {
    const [form, setForm] = useState({
      voterid:"",
      fname: "",
      lname:"",
      dob:"",
      email:"",
      eligible:"",
      eligiblereason:"",
      gender:"",
      ward:"",
      status:""

    });
    const navigate = useNavigate();
    
    
    const handelOnChange=(e)=>{
        const{name,value}=e.target
        setForm({
          ...form,[name]:value
        })
      }
    
    
    async function onSubmit(e) {
      e.preventDefault();
    
      
      const newPerson = { ...form };
      await fetch("http://localhost:5000/voter/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
    
      setForm({ voterid:"",
      fname: "",
      lname:"",
      dob:"",
      email:"",
      eligible:"",
      eligiblereason:"",
      gender:"",
      ward:"",
      status:""});
      navigate("/");
    }
   
  return (
    <div >
        <div className="image">
            <img src={require("./Ashoka_Chakra.png")} id="voteimage" style={{width:"500px"}}></img>
        </div>
        <form onSubmit={onSubmit}>
                <div className="form" >
                <div className="form-body">
                <div className="voterid">
                        <label className="form__label" htmlFor="voterid"  id='voterid'>Voter Id</label>
                        <input className="form__input" type="text" id="voterid" name="voterid" required placeholder="Voter ID"value={form.voterid}onChange={ handelOnChange}   />
                    </div>
                    <div className="username">
                        <label className="form__label" htmlFor="firstName" id="fname">First Name </label>
                        <input className="form__input" type="text" id="fname" name="fname" placeholder="First Name" required value={form.fname}onChange={ handelOnChange} />
                    </div>
                    <div className="lastname">
                        <label className="form__label" htmlFor="lastName"  id="lname">Last Name </label>
                        <input  type="text"  id="lastName"  className="form__input"placeholder="LastName" required name="lname"value={form.lname} onChange={ handelOnChange}/>
                    </div>
                    <div className="dob">
                        <label className="form__label" htmlFor="dob" id="dob">Date of Birth </label>
                        <input className="form__input" type="date" id="dob" name="dob"  placeholder="Date of Birth"  required value={form.dob}onChange={ handelOnChange}/>
                    </div>
                    
                    <div className="email">
                        <label className="form__label" htmlFor="email"  id="email">Email </label>
                        <input  type="email" id="email" className="form__input" placeholder="Email" name="email" required value={form.email} onChange={ handelOnChange}/>
                    </div>
                    
                    <div className="eligible" name="eligible">
                        <label className="form__label" htmlFor="eligible" id="eligible">Eligible</label>
                        <input  type="eligible" id="eligible" className="form__input"  name="eligible" required placeholder="Enter Yes or no"value={form.eligible}
                onChange={ handelOnChange}/>
                    </div>
                    <div className="eligiblereason" name="eligiblereason" id="eligiblereason">
                        <label className="form__label" htmlFor="eligiblereason">Eligiblity Reason</label>
                        <input  type="eligiblereason" id="eligiblereason" className="form__input"   name="eligiblereason" placeholder="If  no please give valid reason"value={form.eligiblereason}
                onChange={ handelOnChange}/>
                    </div>
                    <div className='gender'  id="gender">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" name="gender"value={form.gender}
                onChange={ handelOnChange} required>
                                <option >select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Others</option>
                                
                            </select>
                    </div> 
                    <div className='ward' name="ward" id="ward">
                            <label htmlFor="ward">Ward No</label>
                            <select id="ward" name="ward"value={form.ward}
                onChange={ handelOnChange} required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                
                            </select>
                    </div> 
                    {/* <div className="status" id="status">
                        <label className="form__label" htmlFor="status">Status</label>
                        {/* <input  type="status" id="status" className="form__input" placeholder="Email"/> */}
                        {/* <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" value="0" id="flexSwitchCheckChecked" name="status" 
                onChange={ handelOnChange}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Voted</label>
                        </div> */} 
                    {/* </div>  */}
                    </div>
                <div className="footer">
                    <button type="submit" className="btn">Register </button>
                </div>
            </div>     
        </form>     
    </div>
  )
}

export default Form
