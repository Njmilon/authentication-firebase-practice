import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-indigo-300'>
                <div className="navbar w-[88%] mx-auto">
                    <div className="flex-1">
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Authentication</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><NavLink to='/login'>Log In</NavLink></li>
                            <li><NavLink to='/register'>Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;