import React from 'react';
import '../../App.css'
import AfterLoginNavbar from '../AfterLoginNavbar'; 
import Footer from '../Footer';
import ViewPolicyHolder from '../ViewPolicyHolder';



function AdminViewPolicyHolder(){
    return(
        <>
        <AfterLoginNavbar/>
        <ViewPolicyHolder/>
        <Footer/>
        </>
    )
}
export default AdminViewPolicyHolder;