import React from 'react'
import { FaLeanpub } from "react-icons/fa";
import './LandingPage.css';

function LandingPage() {
    return (
        <React.Fragment>
        <div class="area" >
        <div className="app">
            <FaLeanpub style={{ fontSize: '6rem', color:'white' }} /><br />
            <span style={{ fontSize: '4rem', color:'white'}}>Let's Start Learning!</span>
        </div>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        
        
        </React.Fragment>
    )
}

export default LandingPage
