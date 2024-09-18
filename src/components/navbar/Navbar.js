import React from 'react'

function navbar() {
    return (
        <div className='shadow-xl shadow-blue-500'>
            <div class="navbar bg-black text-white flex justify-between">
                <div class="navbar-start">
                    {/* <div className='flex justify-between'> */}
                        
                        <div class="dropdown bg-slate-800 text-black">
                            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabindex="0"
                                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>News</a></li>
                                <li><a>All Products</a></li>
                                <li><a>Bot</a></li>
                            </ul>
                        </div>

                     <a class="btn btn-ghost text-3xl  font-bold">U Tech</a>
                        
                       
                    {/* </div> */}
                    
                </div>
                <div class="navbar-center hidden lg:flex ">
                            <ul class="menu menu-horizontal px-1 font-bold text-xl ">
                                <li className=' hover:text-blue-500'><a>News</a></li>
                                <li className=' hover:text-blue-500'><a>All products</a></li>
                                <li className=' hover:text-blue-500'><a>Bot</a></li>
                            </ul>
                        </div>
            </div>
        </div>
    )
}

export default navbar
