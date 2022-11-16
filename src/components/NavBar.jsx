import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



export const NavBar = () => {

    let navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token)
            setIsLogin(true);
        else
            setIsLogin(false);
    }, []);

    setInterval(() => {
        const token = localStorage.getItem("token");
        if (token)
            setIsLogin(true);
        else
            setIsLogin(false);
    }, 3000);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogin(false);
        navigate("/login");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        EnterQR
                    </Typography>
                    <>
                        {isLogin ? (
                            <Button color="inherit" onClick={handleLogout}>
                                Salir
                            </Button>
                        ) : <NavLink style={{
                            color: "white",
                        }} to="/login">
                            <Button color="inherit">Entrar</Button>
                        </NavLink>
                        }
                    </>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
