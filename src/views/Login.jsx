import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { loginService } from "../services/usuarios";
import Image from 'mui-image';

import Logo from "../assets/images/utp.png";

const Copyright = (props) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/mcmenamc/EnterQR">
                EnterQR
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export const SignIn = () => {
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [token, setToken] = useState(null);
    const [credenciales, setCredenciales] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        if (token === null) {
            const token = localStorage.getItem("token");
            token ? setToken(token) : setToken(null);
        }
    }, []);

    const handleLogin = async event => {
        event.preventDefault();
        try {
            const user = await loginService(credenciales);
            localStorage.setItem("token", user.token);
            setToken(user.token);
            navigate("/home");
        } catch (err) {
            setError(err.response.data.message);
            setOpen(true);
            setTimeout(() => setOpen(false), 3000);
            setToken(null);
        }
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <>
            {/* {token ? <Navigate to="/" /> : <Outlet />} */}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Image width={85} src={Logo} />
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleLogin}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="matricula"
                            onChange={({ target }) =>
                                setCredenciales({
                                    ...credenciales,
                                    matricula: target.value,
                                })
                            }
                            label="Matrícula o usuario"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            id="password"
                            fullWidth
                            onChange={({ target }) =>
                                setCredenciales({
                                    ...credenciales,
                                    password: target.value,
                                })
                            }
                            label="Password"
                            type="text"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="remember" color="primary" />
                            }
                            label="Recordarme"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    ¿Olvidaste la contraseña?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message={error}
                    action={action}
                />
            </Container>
        </>
    );
};
