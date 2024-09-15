import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <header className="bg-gray-50 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="block text-blue-600 dark:text-blue-400" to="/">
                            <h2 className="text-2xl font-bold">VerbaLearn</h2>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link
                                        className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* <li>
                                    <Link
                                        className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li> */}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <div className="hidden sm:flex">
                                    <Link 
                                        to='/generate-course' 
                                        className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800'
                                    >
                                        Start Course
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
