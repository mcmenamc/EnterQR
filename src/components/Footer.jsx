import { Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

export const Footer = () => {
    return (

        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            width: '100%',
            
            width: '100%'
        }} component="footer" square >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Enter-QR, innovando el acceso seguro.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright ©2022. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
};
