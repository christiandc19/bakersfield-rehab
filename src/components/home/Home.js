import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css'
import ServicesCards from '../services/ServicesCards';

const Home = () => {
    return (
        <>
        <div className='hero'>
            <div className="container">
                <div className="content">
                    
                <Fade top><h1>Bakersfield Rehab</h1></Fade> 
                
                <Fade bottom>
                    <h2 className='subtitle'>Mental Health  Treatment Facility </h2>
                </Fade>
                    <p>Find your happiness</p>
                    <p>and learn to put it first.</p>
                    <Link to="/about-us">
                    <div><button>Learn More</button></div>
                    </Link>

                </div>
            </div>
        </div>

        <ServicesCards />

        </>
    )
}

export default Home
