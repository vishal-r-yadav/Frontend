import React from 'react';
import '../../App.css'
import Navbar from '../Navbar';
import Footer from '../Footer';
import HomeSection from '../HomeSection'
import Cards from '../Cards';


function Home(){
    return(
        <>
        <Navbar/>
        <HomeSection/>
        <Cards/>
        <Footer/>
        </>
    )
}
export default Home;