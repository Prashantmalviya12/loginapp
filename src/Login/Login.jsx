import React, { useState } from 'react'
import './Login.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Login = () => {
    const[login,setLogin] = useState(false);
    const[name,setname] = useState("");
    const[pass,setPass] = useState("");
    const[email,setEmail] = useState("");
    const[val,setVal] = useState(false);
    const[val1,setVal1] = useState(false);
    const[val2,setVal2] = useState(false);


    const handlename = (e) =>{
        setname(e.target.value)
        console.log(e.target.value);
    }
    const handlePass = (e) =>{
        setPass(e.target.value)
        console.log(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
        console.log(e.target.value);
    }
    const validvalue = () => {
        if(name === ""){
            setVal(true);
        }else{
            setVal(false);
        }
        if(pass === ""){
            setVal1(true);
        }else {
            setVal1(false)
        }
        if(name !== "" && pass !== "" ){    
            setname("")
            setPass("")  
        }
    }
    const handlesignUp = () =>{
        if(name === ""){
            setVal(true);
        }else{
            setVal(false);
        }
        if(pass === ""){
            setVal1(true);
        }else {
            setVal1(false)
        }
        if(email === ""){
            setVal2(true);
        }else {
            setVal2(false)
        }
        if(name !== "" && pass !== "" && email !== ""){
            setLogin(false)
            setname("")
            setPass("")
            setEmail("")
        }
    }
  return (
    <div className='login'>
        <div className="login-form ">
            <div className={`signin-form ${!login? "sign1":"signin-out"}`}>
            <h2>Hello,<span>Welcome</span></h2>
            <div className='input-form'>
            <div className="form">
                <input type="text" placeholder='Name' required onChange={handlename}/>
                <div className={`${val?"show":"validation"}`}><span className='valid-text'>required to fill</span></div>
            </div>
            <div className="form">
                <input type="password" placeholder='password' required onChange={handlePass} />
                <div className={`${val1?"show":"validation"}`}><span className='valid-text'>required to fill</span></div>
            </div>
           
            </div>
            <div className="forget-pass">
               <div className='check'>
               <input type="checkbox" />
               <div><span>Remember me</span></div>
               </div>
                <span>Forget Password?</span>
            </div>
            <div className="btn-log">
            <button onClick={validvalue}>Login</button>
            <button onClick={() => setLogin(true)}>Sign up</button>
            
           </div>
           <div className="social">
            <h4>FOLLOW</h4>
            <FaFacebookF className='ID'/>
            <FaTwitter className='ID'/>
            <FaInstagram className='ID'/>

        </div>
            </div>
            <div className={`ragister-form ${!login?"sign2":"signin-in"}`} >
            <h2>Sign Up</h2>
            <div className='input-form1'>
             <div className="form">
                 <input type="text" placeholder='Name' onChange={handlename}/>
                 <div className={`${val?"show":"validation"}`}><span className='valid-text'>required to fill</span></div>

             </div>
             <div className="form"> 
                 <input type="password" placeholder='password' onChange={handlePass}/>
                 <div className={`${val1?"show":"validation"}`}><span className='valid-text'>required to fill</span></div>
             </div>
             <div className="form">
                <input type="Email" placeholder='Email' onChange={handleEmail} />
                <div className={`${val2?"show":"validation"}`}><span className='valid-text'>required to fill</span></div>

            </div>
             <div className="btn-log">
            <button onClick={handlesignUp}>Sign in</button>
           </div>
             </div>
            </div>

        
        </div>
    </div>
  )
}

export default Login