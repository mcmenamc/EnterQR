import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Container, Toolbar } from '@mui/material'
import { GetAccesosAll } from '../services/usuarios.js'
import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';


export const Admin = () => {
  const [Data, setData] = useState([])
  const Heads = [
    'Nombre Completo', 'Genero', 'Hora de entrada', 'Tipo de acceso', 'Nombre de la entrada'
  ];
  const [page, setPage] = useState(1);

  const Accesos = async (page) => {
    const data = await GetAccesosAll(page);
    data.map(element => {
      const fecha = new Date(element.createdAt)
      element.createdAt = fecha.toLocaleString()
    })
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    Accesos(page);
  }, [])

  const handleChange = (event, value) => {
    setPage(value);
    Accesos(value);
  };


  return (
    <Container>

      <Paper sx={{
        marginTop: 6,
        width: '100%'
      }} >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

          }}
        >
          <h1>Control de Acceso</h1>
        </Toolbar>
        <TableContainer
          component={Paper}>
          <Table sx={{ minWidth: 650 }} >
            <TableHead
            >
              <TableRow>
                <TableCell>Matricula</TableCell>
                {
                  Heads.map((head, i) => (
                    <TableCell key={i} align="right">{head}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                Data.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.usuario.matricula}
                    </TableCell>
                    <TableCell align="right">{row.usuario.nombre + ' ' + row.usuario.apellidoPat + ' ' + row.usuario.apellidoMat}</TableCell>
                    <TableCell align="right">{row.usuario.genero}</TableCell>
                    <TableCell align="right">{row.createdAt}</TableCell>
                    <TableCell align="right">{row.acceso.tipo}</TableCell>
                    <TableCell align="right">{row.acceso.nombre}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination count={15} page={page} onChange={handleChange} />
      </Paper>
    </Container>
  )
}