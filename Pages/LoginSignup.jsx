import React from "react"
import "./CSS/loginsignup.css"
const LoginSignup=()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                 <input type="text" placeholder="Your Name" />
                 <input type="email" placeholder="Email Address" />
                 <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have a account <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="text" name="" id="" />
                    <p>continuing,i agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup