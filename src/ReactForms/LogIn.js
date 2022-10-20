import React from "react";
import "./formStyle.css";

export default function LogIn (props){

    const[logFormData, setLogFormData] = React.useState(
        {
            email:"",
            password:"",
        }
    );
    console.log(logFormData)
    function handleChange(event){
        setLogFormData((old) => {
            const {name, value, checked} = event.target;
            return {
                ...old ,
                [name] : value
            }
        })   
    }

    function handleSubmit(event){
        event.preventDefault();
        const valid = props.logIn(logFormData)
        if(valid === true){
            console.log("loged in")
        }else{
            console.log("loged in failed")
        }
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type = "text" 
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value = {logFormData.email}
                />
                <input 
                type = "text" 
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value = {logFormData.password}
                />
                <button>Log in</button>

            </form>
            <p onClick={() => props.hideForm()}>Or SignUp</p>
        </div>
        
    );
}