import React from 'react';
import '../../App.css'
import AfterLoginNavbar from '../AfterLoginNavbar'; 
import Footer from '../Footer';
import AddPolicy from '../AddPolicy';


function AdminAddPolicy(){
    return(
        <>
        <AfterLoginNavbar/>
        <AddPolicy/>
        <Footer/>
        </>
    )
}
export default AdminAddPolicy;