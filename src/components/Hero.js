import React from "react";
import HeroImg from "../images/hero-img.jpg";

function Hero(){
    return(
        <section className="hero">
            <img src={HeroImg} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
};

export default Hero;