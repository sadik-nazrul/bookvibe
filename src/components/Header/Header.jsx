import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
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
        <div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Novely</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <a className="px-5 py-2 rounded bg-lime-500 text-white">Sign In</a>
                    <a className="px-5 py-2 rounded bg-slate-200 text-black">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;