import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gray-500">
                    <div className="flex-1">
                        <a href='./' className="btn btn-ghost normal-case text-white text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end mr-5">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img  src="https://placeimg.com/80/80/people" alt=''/>
                                </div>
                            </label>
                        
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Navbar;