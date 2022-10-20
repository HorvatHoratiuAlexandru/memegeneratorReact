import React from "react";
import "./formStyle.css";

export default function SignUp (props){
    return(
        <div>
            <form>
                <input 
                type = "text" 
                placeholder="Email"
                name="email"
                />
                <input 
                type = "text" 
                placeholder="Password"
                name="password"
                />
                <button>Sign up</button>

            </form>
            <p onClick={() => props.hideForm()}>Or SignUp</p>
        </div>
    );
}