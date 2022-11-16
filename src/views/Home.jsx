import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { QRCodeSVG } from 'qrcode.react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GetUsuarios } from "../services/usuarios";
import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";

export const Home = () => {
  const token = localStorage.getItem('token');
  const [tokenUser, setTokenUser] = useState(token);
  const myDecodedToken = decodeToken(token);

  const [matricula, setMatricula] = useState(() => {
    return myDecodedToken.matricula;
  });
  const [usuario, setUsuario] = useState({});
  const [imagenUsuario, setImagenUsuario] = useState('');
  const [mostrarQR, setMostrarQR] = useState(false);

  useEffect(() => {
    GetUsuarios(matricula)
      .then(data => {
        setUsuario(data);

        let matricula = data.matricula;
        matricula = matricula.slice(3);

        while (true) {
          if (matricula[0] == '0')
            matricula = matricula.slice(1);
          else break;
        }
        setImagenUsuario('https://sicea.utpuebla.edu.mx/control/fotos/aspirantes/' + matricula + '.jpg');
      });
  }, []);


  const handleMostrarQR = () => {
    setMostrarQR(!mostrarQR);
  }

  return (
    <Container >
      <Grid
        marginTop={3}
        marginBottom={3}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        item xs={12}
      >
        <Card sx={{ maxWidth: 700 }}>
          <Typography align="center" gutterBottom variant="h5" component="div">
            Bienvenido
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            {
              mostrarQR ?
                <QRCodeSVG
                  value={matricula}
                  height={350}
                  width={350}
                  level="H"
                  includeMargin={true}
                /> :
                <CardMedia
                  component="img"
                  loading="lazy"
                  height="350"
                  width="350"
                  image={imagenUsuario}
                  sx={{ objectFit: 'contain', }}
                  alt="Foto de perfil"
                />
            }

          </Grid>
          <CardContent>
            <Typography align="center" gutterBottom variant="h6" component="div">
              {usuario.nombre + ' ' + usuario.apellidoPat + ' ' + usuario.apellidoMat}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Button variant="contained" size="medium">Ver perfil</Button>
              <Button variant="contained" onClick={handleMostrarQR} size="medium">
                {
                  mostrarQR ? 'Ver foto' : 'Ver QR'
                }
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>

    </Container >
  )
};