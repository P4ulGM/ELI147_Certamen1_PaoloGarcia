import { Alert, Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer,TableHead, TableRow, Button, Chip } from '@mui/material'
import React from 'react'

function GuerreroView( {guerreros = [], onQuitar = ()=>{}} ) {

    if(!guerreros?.length) {
    return <Alert severity="info">No hay guerreros registrados</Alert>
  }

  const handleQuitar = (guerrero)=>{
    onQuitar(guerrero);
  }

  const getChipColor = (tipo) => {
    if (tipo === 'Orco') return 'error';
    if (tipo === 'Uruk') return 'warning';
    return 'default';
  }

  return (
    <Card>
        <CardHeader title="Guerreros Registrados"></CardHeader>
        <CardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Nivel de Combate</TableCell>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Nivel de Amenaza</TableCell>
                            <TableCell>Clasificación</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {guerreros.map((j) =>
                            <TableRow key={j.nombre}>
                                <TableCell>{j.nombre}</TableCell>
                                <TableCell>{j.tipo}</TableCell>
                                <TableCell>{j.nivelCombate}</TableCell>
                                <TableCell>{j.categoria}</TableCell>
                                <TableCell>{j.nivelAmenaza}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={j.tipo}
                                        color={getChipColor(j.tipo)}
                                        variant="filled"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant='outlined' color='error' onClick={() => handleQuitar(j)}>
                                        Asesinado por la aparición
                                    </Button>
                                </TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
  )
}

export default GuerreroView
