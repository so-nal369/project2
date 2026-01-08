import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate=useNavigate();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "email") {
            setEmail(value);
        } 
        else if (name === "password") {
            setPass(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let getItem = JSON.parse(localStorage.getItem("user") || "[]");

        let found = false;

        getItem.forEach((item) => {
            if (item.email === email && item.password === pass) {
                found = true;
            }
        });

        if (found) {
            alert("Login successful!");
            navigate("/home")
        } else {
            alert("Incorrect email or password!");
        }
    };

    return (
        <div className="login">
            <Navbar />

            <form className="loginform" onSubmit={handleSubmit}>

                <input 
                    type="email"
                    name="email"
                    placeholder="enter email"
                    value={email}
                    onChange={handleInput}
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="enter password"
                    value={pass}
                    onChange={handleInput}
                />

                <p>Don't have an account?</p>
                <Link to="/">Signup</Link>

                <button className="button">Login</button>

            </form>
        </div>
    );
};

export default Login;
