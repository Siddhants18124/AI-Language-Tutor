import Cookies from 'js-cookie';

const isAuthenticated = () => {
    const token = Cookies.get('language-jwt-token');
    return !!token;
};

export { isAuthenticated };