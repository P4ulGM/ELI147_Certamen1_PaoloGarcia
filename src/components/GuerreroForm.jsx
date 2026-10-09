import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Rating from '@mui/material/Rating'

function GuerreroForm({onCreateGuerrero = ()=>{}}) {

    const rango = [
        { value: "Capitan", label: "Capitan" },
        { value: "Berserker", label: "Berserker" },
        { value: "Explorador", label: "Explorador" },
        { value: "Asediador", label: "Asediador" }
    ];

    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("Orco");
    const [nivelCombate, setNivelCombate] = useState(50);
    const [categoria, setCategoria] = useState(rango[0].value);
    const [nivelAmenaza, setNivelAmenaza] = useState(1);

    const handleClick = () => {
        const guerrero = {};
        guerrero.nombre = nombre;
        guerrero.tipo = tipo;
        guerrero.nivelCombate = nivelCombate;
        guerrero.categoria = categoria;
        guerrero.nivelAmenaza = nivelAmenaza;
        onCreateGuerrero(guerrero);
    }

  return (
    <Card raised>
        <CardHeader title="Ingresar Guerrero"></CardHeader>
        <CardContent>
            <div className="mt-3">
                <TextField fullWidth id="nombre-guerrero" value={nombre} label="Nombre" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="mt-3">
                    <FormControl>
                        <FormLabel id="tipo-radio-label">Tipo Guerrero</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="tipo-radio-label"
                            name="tipo-radio-group"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
                            <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
                        </RadioGroup>
                    </FormControl>
            </div>

            <div className="mt-3">
                <FormLabel id="nivel-combate-label">Nivel de Combate</FormLabel>
                <Box sx={{ px: 1, mt: 1 }}>
                    <Slider
                        aria-labelledby="nivel-combate-label"
                        value={nivelCombate}
                        onChange={(_, value) => setNivelCombate(Number(value))}
                        valueLabelDisplay="auto"
                        min={1}
                        max={100}
                        step={1}
                    />
                </Box>
                <Typography>
                    Valor actual: {nivelCombate}
                </Typography>
            </div>
            <div className="mt-3">
                    <Select
                        fullWidth 
                        value={categoria}
                        id="categoria-guerrero" 
                        label="Categoria"
                        onChange={e=>setCategoria(e.target.value)}>
                        { rango.map((r)=> 
                            <MenuItem  key={r.value} value={r.value}>{r.label}</MenuItem>
                        )}
                    </Select>
            </div>
            <div className="mt-3">
                    <Typography>Nivel de Amenaza</Typography>
                    <Rating
                        name="simple-controlled"
                        value={nivelAmenaza}
                        onChange={(_, newValue) => {
                            setNivelAmenaza(newValue);
                        }}
                    />
                </div>
        </CardContent>
        <CardActions>
            <Button  fullWidth variant="outlined" color="secondary" onClick={handleClick}>
                Registrar Guerrero
            </Button>
        </CardActions>
    </Card>
  )
}

export default GuerreroForm
