import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

export default function LoggingContainer (){
    const [logData, setLogData] = React.useState([{
        email: "admin@gmail.com",
        password: "admin",
        newsletter: false
    }]);
    const [logState, setLogState] = React.useState(true);
    function toggleLogState (){
        setLogState(!logState);
    }
    function handleLogIn(dataToLog){
        const succesfullLog = logData.map((entry)=>{
            if(dataToLog.email === entry.email && dataToLog.password === entry.password){
                return true;
            }
        })
        console.log(succesfullLog)
    
        return (succesfullLog[0] === true);
        
    }
    return (
        <div>
            {logState && <LogIn
                hideForm = {toggleLogState}     
                logIn = {handleLogIn}     
            />}
            {!logState && <SignUp
                hideForm = {toggleLogState}
            />}
        </div>
    );
}