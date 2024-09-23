import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";

// Define an array of nav items
const navItems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
];

const NavItems = () => {
    return (
        <ul className="flex flex-col md:flex-row items-center md space-x-8">
            {
                navItems.map((item, index) => (
                    <li>
                        <NavLink to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary font-bold" 
                                    : "hover:text-primary"
                            }
                        >{item.label}</NavLink>

                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
    return (
        <header className={'fixed top-0 left-0 right-0 z-50 trasition duration-300 ease-in-out text-white'}>
            <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4'>
                {/* logo */}
                <Link to="/" className="font-bold">Logo</Link>
                {/* desktop menu items */}
                <div className='hidden md:flex'>
                    <NavItems />
                </div>

                {/* Cart icon */}
                <div className='hidden md:block cursor-pointer relative'> 
                    <FaBasketShopping/>
                    <sup  className="absolute top-0 -right-3 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        0
                    </sup>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;