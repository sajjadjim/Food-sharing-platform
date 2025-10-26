import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';



const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    // console.log(user)
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then((result) => {
                console.log('Logged out', result);
                navigate('/')
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-[#5e7784] shadow-sm p-6">

                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-10 mt-3 w-52 p-2 shadow text-black"
                        >
                            <Link to="/">Home</Link>
                            <Link to="/availableFood">Available Foods</Link>
                            <Link to="/about">About Us</Link>
                            {user && (
                                <>
                                    <Link to="/addFood">Add Food</Link>
                                    <Link to="/manageFood">Manage My Foods</Link>
                                    <Link to="/myFood">My Food Requests</Link>
                                </>
                            )}
                        </ul>
                    </div>
                    <h2 className="text-black text-xl font-bold ml-2">Share A Bite</h2>
                    <img className="w-12 h-12 ml-2 rounded-b-full" src={logo} alt="Food Logo" />
                </div>


                <div className="navbar-center space-x-4 text-black hidden md:flex">
                    <Link to="/">Home</Link>
                    <Link to="/availableFood">Available Foods</Link>
                    <Link to="/about">About Us</Link>
                    {user && (
                        <>
                            <Link to="/addFood">Add Food</Link>
                            <Link to="/manageFood">Manage My Foods</Link>
                            <Link to="/myFood">My Food Requests</Link>
                        </>
                    )}
                </div>


                <div className="navbar-end flex items-center gap-4">

                    {user ? (
                        <div className="flex items-center gap-4">

                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                                <img
                                    src={user.photoURL || 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?uid=R183836372&ga=GA1.1.1518060000.1737402150&semt=ais_hybrid&w=740'}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-white text-xl font-bold hover:cursor-pointer"
                            >
                                Logout
                            </button>

                        </div>
                    )
                        :
                        (<>
                            <Link className="text-black text-xl font-bold" to="/login">Login</Link>
                            <Link className="text-black text-xl font-bold" to="/signUp">SignUp</Link>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
