import React, { useState } from 'react';

const Form = (props) => {

    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {first_name, last_name, email, password};
        console.log("welcome", newUser, "Successfully Created Object");
        setFormSubmitted(true);

        //Add the next 4 lines if you want to clear the form input fields without refreshing the page. 

        // setFirst_Name("");
        // setLast_Name("");
        // setEmail("");
        // setPassword("");
    }

    const formMessage = () => {
        if(formSubmitted === true){
            return "Thank you for submitting the form!"
        }
        else{
            return "Welcome, please submit the form!"
        }
    }

    return (
        <div>
            <form onSubmit = {createUser}>
                <h3>{ formMessage() }</h3>
                <div className = "first_name">
                    <label>First Name:</label>
                    <input type = "text" onChange = { (e) => setFirst_Name(e.target.value)} value = {first_name} />
                    {/* { first_name.length < 2 ? <p>First name needs to be longers than 2 characters</p> : null} */}
                    
                    {/* this validation will show up on load */}

                    { first_name.length < 2 && first_name.length >0 ? <p>First name needs to be longers than 2 characters</p> : null}

                    {/* if we want the validation to not show on load then do this */}
                </div>

                <div className = "last_name">
                    <label>Last Name:</label>
                    <input type = "text" onChange = { (e) => setLast_Name(e.target.value)} value = {last_name} />
                    { last_name.length < 2 ? <p>First name needs to be longers than 2 characters</p> : null}
                </div>

                <div className = "email">
                    <label>Email:</label>
                    <input type = "text" onChange = { (e) => setEmail(e.target.value)} value = {email} />
                    { email.length < 5 ? <p>Email must be at least 5 characters</p> : null }
                </div>

                <div className = "password">
                    <label>Password:</label>
                    <input type = "text"onChange = { (e) => setPassword(e.target.value)}  value = {password} />
                    {password.length <8 ? <p>Password must be at least 8 characters</p> : null}
                </div>

                <div className = "confirmPassword">
                    <label>Confirm Password:</label>
                    <input type = "text"onChange = { (e) => setConfirmPassword(e.target.value)}  value = {confirmPassword} />
                    { confirmPassword !== password ? <p>Passwords need to match</p> : null}
                </div>

                <input type = "submit" value = "Create User" />
                {/* Technically we dont need this submit button because its updating in real time */}
            </form>

            <div className = "FormData">
                <p>First Name: { first_name }</p>
                <p>Last Name: { last_name }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
            </div>
        </div>
    );
};

export default Form;