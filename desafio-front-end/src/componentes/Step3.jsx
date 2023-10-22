import { TextField } from "@mui/material";

export default function Step3({ handleChange }) {
  return (
    <TextField
      label="Nome do cliente ou CNPJ"
      name="name"
      onChange={handleChange}
      fullWidth
      margin="normal"
      //sx={{}}
    />
  );
}
