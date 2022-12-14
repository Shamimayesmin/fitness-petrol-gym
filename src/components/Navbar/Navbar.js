import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gray-500">
                    <div className="flex-1">
                        <a href='./' className="btn btn-ghost normal-case text-blue-400 text-3xl">Fitness Petrol Gym</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control sm:block hidden">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end mr-5">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img  src="https://i.ibb.co/vkQKPHw/logo.jpg" alt=''/>
                                </div>
                            </label>
                        
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Navbar;