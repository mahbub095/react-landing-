import React from "react";
import { Link } from "react-router-dom";

// Define an array of nav items
const navItems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
];

const NavItems = () => {
    return(
        <ul>
            {
                navItems.map((item,index)=> (
                    <li>
                        <Link to ={item.path}>{item.label}</Link>

                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
    return (
        <header>
            <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4'>
                {/* logo */}
                <Link to="/" className="font-bold">Logo</Link>
                {/* desktop menu items */}
                <div>
                    <NavItems/>
                </div>
               
                {/* Cart icon */}
                <div> cart</div>
            </nav>
        </header>

    )
}

export default Navbar;