import React from "react";

export default function Forms(){
    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    console.log(form);

    function handleChange(event){
        setForm(
            (oldVal) => {
                return {
                    ...oldVal,
                    [event.target.name]: event.target.value
                }


            }
        );
    }
    return(
        <form>
            <input 
            type ="text"
            placeholder = "First Name"
            onChange={handleChange}
            name = "firstName"
            value={form.firstName}
            />
            <input 
            type ="text"
            placeholder = "Last Name"
            onChange={handleChange}
            name = "lastName"
            value={form.lastName}
            />
            <input 
            type ="text"
            placeholder = "email"
            onChange={handleChange}
            name = "email"
            value={form.email}
            />
            
        </form>
    );
}