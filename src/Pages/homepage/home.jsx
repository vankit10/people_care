import React from "react";
import './home.css';
import doctor from "./doctor.jpg"

function Home(){
    return(
        <div className="main-ctn">
            <div className="upper">
                <h2 className="heading">People Care</h2>
            </div>
            <div className="lower">
                <div className="left">
                    <img className="doctor" src={doctor} alt="not found"/>
                </div>
                <div className="right">
                    <input type="text" placeholder="Enter your Username" className="username"></input>
                    <input type="password" placeholder="Enter your Password" className="password"></input>
                    <button type="Submit" placeholder="Login" className="login">Login</button>
                </div>
            </div>
        </div>
    )
    
    
}
export default Home