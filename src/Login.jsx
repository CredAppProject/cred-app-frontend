import React , { useState } from "react";

export const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return {
        <div className = "auth_form-container">
            <form className= "login-form" onSubmit={handleSubmit}>
                <><label for="email"></label>
                <input value="email" placeorder="youremail@gmail.com" id="email" name="email" />
                <><label for="Password"></label>
                <input value="password" placeorder="**********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button classNAME="link-btn" onClick ={() => props.onFormSwitch('register')}>Dont have an account ? </button>
    }
}