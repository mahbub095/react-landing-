import React from "react";

const Navbar = () => {
    return (
        <header>
            <nav className='container mx-auto flex justify-between items-center py-6 px-4'>
                {/* logo */}
                <a href="/">Logo</a>
                {/* desktop menu items */}
                <div> Menu items</div>
                {/* Cart icon */}
                <div> cart</div>
            </nav>
        </header>

    )
}

export default Navbar;