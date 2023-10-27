import {
  Box,
  Container,
  Select,
  MenuItem,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function Step2({ handleChange }) {
  const [value, setValue] = useState(0);
  const handleChangeSelect = (e) => {
    setValue(e.target.value);
    handleChange(e);
  };
  
  return (
    <Container sx={{ width: "100%" }}>
      <Box sx={{ padding: 4 }}>
        <Typography sx={{ fontSize: 15 }}>Tipo de Seguro</Typography>

        <Select
          sx={{
            width: "100%",
            borderRadius: 2,
            marginBottom: 2,
            color: "black",
          }}
          labelId="demo-simple-select-label"
          label="Selecione"
          placeholder="Selecione"
          value={value}
          name="type"
          onChange={handleChangeSelect}
        > <MenuItem value={0}>Selecione</MenuItem>
          <MenuItem value={1}>Seguro de Garantia</MenuItem>
          <MenuItem value={2}>Vida em Grupo</MenuItem>
          <MenuItem value={3}>Riscos de Engenharia</MenuItem>
          <MenuItem value={4}>Responsabilidade Civil</MenuItem>
        </Select>

        <Typography sx={{ fontSize: 15 }}>
          Selecione os usuários envolvidos
        </Typography>

        <Select
          sx={{ width: "100%", borderRadius: 2, marginBottom: 2 }}
          labelId="demo-simple-select-label"
          label="Selecione"
          value={value}
          onChange={handleChangeSelect}
        >
          <MenuItem value={0}>Selecione</MenuItem>
          <MenuItem value={1}>Americanas</MenuItem>
          <MenuItem value={2}>Casas Bahia</MenuItem>
        </Select>

        <Typography sx={{ fontSize: 15 }}>
          Adicione aqui os detalhes da ordem de serviço
        </Typography>
        <TextField
          sx={{ width: "100%" }}
          multiline
          rows={4}
          variant="outlined"
        />
      </Box>
    </Container>
  );
}
