import React from 'react';
import '../../App.css'
import AfterLoginNavbar from '../AfterLoginNavbar'; 
import Footer from '../Footer';
import AdminHomeSection from '../AdminHomeSection';
import AdminNavbar from '../AdminNavbar';

function AdminDashBoard(){
    return(
        <>
        <AfterLoginNavbar/>
        <AdminNavbar/>
        <AdminHomeSection/>
        <Footer/>
        </>
    )
}
export default AdminDashBoard;