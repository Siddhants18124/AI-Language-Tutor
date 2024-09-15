import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';
import Cookies from 'js-cookie';
import { setLoggedOut } from '../../redux/logoutSlice';
import { clearUser } from '../../redux/userSlice';
import userService from '../../services/userService';
import Navbar from '../../components/Navbar/Navbar';
import Homepage from '../../components/Home/Homepage';
const Home = () => {
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
        <div className="home">
            <Homepage/>
        </div>
    )
};

export default Home;