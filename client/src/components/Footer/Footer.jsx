import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';
import Cookies from 'js-cookie';
import { setLoggedOut } from '../../redux/logoutSlice';
import { clearUser } from '../../redux/userSlice';
import userService from '../../services/userService';

function Footer() {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        dispatch(ShowLoading());
        try {
            await userService.logoutUser({});
            Cookies.remove('language-jwt-token');
            dispatch(setLoggedOut());
            dispatch(clearUser());
        } catch (error) {
            message.error(error.response.data);
        }
        dispatch(HideLoading());
    };
    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600 dark:text-teal-300">
                    <h2 className="text-2xl font-bold text-blue-400">VerbaLearn</h2>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
                Learn new Languages with the help of AI.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <Link
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            to="/generate-course"
                        >
                            Start Course
                        </Link>
                    </li>

                    <li>
                        <button
                            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            onClick={handleLogout}
                        >
                            LogOut
                        </button>
                    </li>

                </ul>

            </div>
        </footer>
    )
}

export default Footer