import { Container, TextField, Grid, Typography } from "@mui/material";
import FileUpload from "./FileUpload/FileUpload";

export default function Step3({ handleChange }) {
  return (
    <Container>
      <Grid container spacing={3} width='100%'>
        <Grid item xs={6}>
          <Typography sx={{fontSize:14, marginTop:5, marginBottom:1}}>
            Escolha aqui os arquivos que você deseja adicionar
          </Typography>
          <FileUpload/>
        </Grid>
        <Grid item xs={6}>
          <Typography>Arquivos selecionados</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
