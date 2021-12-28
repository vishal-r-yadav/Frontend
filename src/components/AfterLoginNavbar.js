import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './AfterLoginNavbar.css';

function AfterLoginNavbar() {
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
        <nav className="navbar">
           <div className="navbar-container">
               <Link to ="/" className ="navbar-logo"  onClick={closeMobileMenu}>
                 HEALTH INSURANCE 
                 <i class="fas fa-file-medical"/>  
               </Link>
               <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
               </div>
               <ul className={click ? 'nav-menu active':'nav-menu'}>
                 <li className='nav-item'>
                   <Link to = '/'
                    className='nav-links'
                     onClick={closeMobileMenu}
                     >
                     Home
                   </Link>
                 </li>
                 {/* <li className='nav-item'>
                   <Link 
                       to = '/Register'
                       className='nav-links'
                        onClick={closeMobileMenu}
                   >
                     Register
                   </Link>
                 </li> */}
                 <li className='nav-item'>
                   <Link to = '/LogOut'
                    className='nav-links-mobile'
                     onClick={closeMobileMenu}
                  >
                    Log Out
                   </Link>
                 </li>
               </ul>
               
               {button && <Button buttonStyle='btn--outline'>LOG OUT</Button>}
           </div>
        </nav>

       
       </>
    );
}

export default AfterLoginNavbar;
