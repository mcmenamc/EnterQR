import { Login } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { NavLink, Route, useNavigate } from 'react-router-dom'

// const RedireccionarRouter = () => {

//     return (
//         <Button>
//             <NavLink to="/login">Login</NavLink>
//         </Button>
//     );

// };


const Pruebas = () => {

    let navigate = useNavigate();
    const handleLogout = () => {
        navigate("/ger");
        handleLogout();
    };

    const [isLogin, setIsLogin] = useState(false);


    return (
        <>
            <div>
                <h1>Pruebas</h1>
            </div>
            <Button onClick={handleLogout}>btn clicked</Button>
        </>

    );
};


export default Pruebas;