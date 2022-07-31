import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'
import Logo from '../../Assets/images/logo.png'

const Navbar = () => {
    return (
        <div className=''>
            <nav className='w-5/6 mx-auto md:grid md:grid-cols-2  py-4'>
                <div>
                    <img className='w-16' src={Logo} alt="" />
                </div>
                <div className='flex justify-around mx-2'>
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeStyle" : "normalStyle"
                    } to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeStyle" : "normalStyle"
                    } to='/reviews'>Reviews</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeStyle" : "normalStyle"
                    } to='/dashbord'>Dashbord</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeStyle" : "normalStyle"
                    } to='/blog'>Blog</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeStyle" : "normalStyle"
                    } to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeStyle" : "normalStyle"
                    } to='/contact'>Contact</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;