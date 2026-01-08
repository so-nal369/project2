import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const homeHandle = () => {
        localStorage.removeItem("user"); // logout
        navigate("/"); // go to signup/login page
    };

    return (
        <div>
            <Navbar />
            <div className="home-page">
                <h1>Welcome to home page</h1>

                <button onClick={homeHandle} className="button">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
