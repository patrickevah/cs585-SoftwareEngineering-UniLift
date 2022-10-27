import React, { useState } from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <h2>Create an account</h2>
        <form className= "register-form" onSubmit ={handleSubmit}>
            <label></label>
            <input value= {firstname} onChange = {(e) => setfirstName (e.target.value)} id="firstname" placeholder="First Name"/>
            <br></br>
            <label></label>
            <input value= {lastname} onChange = {(e) => setlastname (e.target.value)} id="lastname" placeholder="Last Name"/>
            <br></br>
            <label for= "email"></label>
            <input value = {email} onChange = {(e) => setEmail (e.target.value)} type="email" placeholder="youremail@wiu.edu" id="email" name="email" />
            <br></br>
            <label for= "password"></label>
            <input value = {password} onChange = {(e) => setpassword (e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <br></br>
            <label for= "confirmpassword"></label>
            <input value = {confirmpassword} onChange = {(e) => setconfirmpassword (e.target.value)} type="password" placeholder="Confirm Password" id="confirmpassword" name="password" />
            <br></br>
            <button type = "submit"> Submit </button>
        </form>
        <button className="link-btn" onClick={ () =>props.onFormSwitch('Login')}> Already have an account? Login here</button>
        </div>
    )

}