"use client";

import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';

export default function Accueil(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Team/>
            <Testimonial/>
            <Blog/>
            <Footer/>
        </>
    )
}
