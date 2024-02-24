import React from "react"
import './newsletters.css'
const NewsLetters=()=>{
    return(
        <div className="newsletters">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email Id"/>
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default NewsLetters