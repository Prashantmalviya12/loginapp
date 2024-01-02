import React, { useState } from 'react'
import './Login.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Login = () => {
    const[login,setLogin] = useState(false);
  return (
    <div className='login'>
        <div className="login-form ">
            {!login?<h2>Hello,<span>Welcome</span></h2>:<h2>Sign Up</h2>}
        <div className="form-log">
            <div className="form">
                <input type="text" placeholder='Name' />
            </div>
            <div className="form">
                <input type="password" placeholder='password' />
            </div>
            {!login? <div className="forget-pass">
               <div className='check'>
               <input type="checkbox" /><span>Remember me</span>
               </div>
                <span>Forget Password?</span>
            </div>:<div className="form">
                <input type="Email" placeholder='Email' />
            </div>}
            {!login?   
           <div className="btn-log">
            <button>Login</button>
            <button onClick={() => setLogin(true)}>Sign up</button>
            
           </div>:  <div className="btn-log">
            <button onClick={() => setLogin(false)}>Sign in</button>
           </div>}
         {!login?  <div className="social">
            <h4>FOLLOW</h4>
            <FaFacebookF className='ID'/>
            <FaTwitter className='ID'/>
            <FaInstagram className='ID'/>

        </div>:<div></div>
        }
         
        </div>
        
        </div>
        <div className="right-img">
            <img src="https://img.freepik.com/free-vector/gradient-liquid-abstract-background_23-2148928671.jpg" alt="" />
        </div>
    </div>
  )
}

export default Login