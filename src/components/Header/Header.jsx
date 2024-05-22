import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useState } from "react";

const Header = () => {
    // Header scrolling animation state
    const [scrolling, setScrolling] = useState(false);

    // Header scrolling animation effect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      // Header scrolling animation function
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

    const links = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isActive
                ? `px-5 py-2 rounded bg-lime-500 text-white font-semibold`
                : isPending
                    ? "pending"
                    : ""
        }>Home</NavLink></li>
        <li><NavLink to='/listedbooks' className={({ isActive, isPending }) =>
            isActive
                ? `px-5 py-2 rounded bg-lime-500 text-white font-semibold`
                : isPending
                    ? "pending"
                    : ""
        }>Listed Books</NavLink></li>
        <li><NavLink to='/pagetoread' className={({ isActive, isPending }) =>
            isActive
                ? `px-5 py-2 rounded bg-lime-500 text-white font-semibold`
                : isPending
                    ? "pending"
                    : ""
        }>Page to Read</NavLink></li>
        <li><NavLink to='/blogs' className={({ isActive, isPending }) =>
            isActive
                ? `px-5 py-2 rounded bg-lime-500 text-white font-semibold`
                : isPending
                    ? "pending"
                    : ""
        }>Blogs</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive, isPending }) =>
            isActive
                ? `px-5 py-3 rounded bg-lime-500 text-white font-semibold`
                : isPending
                    ? "pending"
                    : ""
        }>Contact</NavLink></li>
    </>

    return (
            <div className={scrolling ? `navbar-scroll navbar container mx-auto sticky top-0` : `navbar container mx-auto sticky top-0`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            <a className="px-5 py-2 rounded lg:hidden bg-black text-white mb-3 mt-5 text-center">Sign In</a>
                            <a className="px-5 py-2 rounded lg:hidden bg-slate-200 text-black text-center">Sign Up</a>
                        </ul>
                    </div>
                    <Link to='/' className="text-xl font-semibold hidden lg:block">Novely</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <a className="px-5 py-2 rounded bg-lime-500 text-white hidden lg:block">Sign In</a>
                    <a className="px-5 py-2 rounded bg-slate-200 text-black hidden lg:block">Sign Up</a>
                    <Link to='/' className="text-xl font-semibold lg:hidden">Novely</Link>
                </div>
            </div>
    );
};

export default Header;