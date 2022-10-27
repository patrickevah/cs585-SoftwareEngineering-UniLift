import React, { useState } from "react";

export const Forgotpassword = (props) => {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <h2> Reset Password </h2>
        <form className= "reset-password" onSubmit ={handleSubmit}>
            <label for= "email"></label>
            <input value = {email} onChange = {(e) => setEmail (e.target.value)} type="email" placeholder="email" id="email" name="email" />
        </form>
        <button type = "submit"> Submit </button>
        </div>
    )

}    