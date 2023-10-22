import { Box, Container, Select, MenuItem, Typography, TextField } from "@mui/material";

export default function Step2({ handleChange }) {
  return (
    <Container sx={{ width: "100%" }}>
      <Box sx={{padding:4}}>
        <Typography sx={{ fontSize: 15 }}>Tipo de Seguro</Typography>

        <Select
          sx={{ width: "100%" , borderRadius:2 , marginBottom:2 , color:"black"}}
          labelId="demo-simple-select-label"
          label="Selecione"
          placeholder="Selecione"
        >
          <MenuItem>Seguro de Garantia</MenuItem>
          <MenuItem>Vida em Grupo</MenuItem>
          <MenuItem>Riscos de Engenharia</MenuItem>
          <MenuItem>Responsabilidade Civil</MenuItem>
        </Select>

        <Typography sx={{ fontSize: 15 }}>
          Selecione os usuários envolvidos
        </Typography>

        <Select
          sx={{ width: "100%" , borderRadius:2 , marginBottom:2}}
          labelId="demo-simple-select-label"
          label="Selecione"
        >
          <MenuItem>Americanas</MenuItem>
          <MenuItem>Casas Bahia</MenuItem>
        </Select>

        <Typography sx={{ fontSize: 15 }}>Adicione aqui os detalhes da ordem de serviço</Typography>
        <TextField sx={{width:'100%'}} multiline rows={4} variant='outlined'/>
      </Box>
    </Container>
  );
}
