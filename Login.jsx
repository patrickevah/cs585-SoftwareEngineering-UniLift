import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className= "login-form" onSubmit ={handleSubmit}>
            <label for= "email"></label>
            <input value = {email} onChange = {(e) => setEmail (e.target.value)} type="email" placeholder="youremail@wiu.edu" id="email" name="email" />

            <label for= "password"></label>
            <input value = {password} onChange = {(e) => setPass (e.target.value)} type="password" placeholder="password" id="password" name="password" />

            <button type = "submit"> Login </button>
        </form>
        <button className="link-btn" onClick={ () =>props.onFormSwitch('Forgotpassword')}> Forgot Password </button>
        <button className="link-btn" onClick={ () =>props.onFormSwitch('Register')}> Don't have an account? Register here</button>
        </div>
         
    )

}