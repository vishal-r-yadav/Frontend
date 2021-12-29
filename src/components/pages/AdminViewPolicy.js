import React from 'react';
import '../../App.css'
import AfterLoginNavbar from '../AfterLoginNavbar'; 
import Footer from '../Footer';
import GetAllPolicy from'../GetAllPolicy';


function AdminViewPolicy(){
    return(
        <>
        <AfterLoginNavbar/>
        <GetAllPolicy/>
        <Footer/>
        </>
    )
}
export default AdminViewPolicy;