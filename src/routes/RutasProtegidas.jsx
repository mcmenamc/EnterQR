import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useJwt } from 'react-jwt';


export const RutasProtegidas = ({ children }) => {

    const tokenLocal = localStorage.getItem('token');
    const [token, setToken] = useState(tokenLocal);
    const { isExpired } = useJwt(token);

    useEffect(() => {
        if (token === null) {
            const token = localStorage.getItem('token');
            token ? setToken(token) : setToken(null);
        }

    }, [token]);

    if (token === null) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />
    }

    if (isExpired) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />
    }


    return children;
}