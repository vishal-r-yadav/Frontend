import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './AdminNavbar.css';

function AdminNavbar() {
    const[click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton =()=> {
      if(window.innerWidth<= 960){
        setButton(false);
      }
      else{
        setButton(true);
      }
    };
    useEffect(() => {
      showButton();
    },[]);
     

    window.addEventListener('resize',showButton);

    return (
       <>
        <nav className="admin-work">
            <div className="admin-work-container" onClick={closeMobileMenu}>
           
               <ul className={click ? 'nav-menu active':'admin-nav-menu'}>
                 <li className='nav-item'>
                   <Link to = '/addpolicy'
                    className='nav-links'
                     onClick={closeMobileMenu}
                     >
                     Add Policy
                   </Link>
                 </li>
                 <li className='nav-item'>
                   <Link to = '/policy/all'
                    className='nav-links'
                     onClick={closeMobileMenu}
                     >
                     View Policies
                   </Link>
                 </li>
                 <li className='nav-item'>
                   <Link to = '/policyholder/all'
                    className='nav-links'
                     onClick={closeMobileMenu}
                     >
                     View PolicyHolders
                   </Link>
                 </li>
                 <ul className="admin-menu-end">
                 <li className='nav-item-end'>
                   <Link to = '/viewUser'
                    className='admin-nav-links'
                     onClick={closeMobileMenu}
                     >
                     Hello Admin
                   </Link>
                 </li>
                 </ul>
                           
                
               </ul>
               
             </div>
        </nav>

       
       </>
    );
}

export default AdminNavbar;
