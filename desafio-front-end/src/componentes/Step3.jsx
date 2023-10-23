import { Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/app-context";
import CardUpload from "./CardUpload/CardUpload";
import FileUpload from "./FileUpload/FileUpload";

export default function Step3({ handleChange }) {
  const Context = useContext(AppContext);
  return (
    <Container>
      <Grid container spacing={3} width="100%">
        <Grid item xs={6}>
          <Typography sx={{ fontSize: 14, marginTop: 5, marginBottom: 1 }}>
            Escolha aqui os arquivos que você deseja adicionar
          </Typography>
          <FileUpload />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: 14, marginTop: 5, marginBottom: 1 }}>
            Arquivos selecionados
          </Typography>
          {Context?.files?.map((file, i) => (
            <CardUpload key={Math.random().toString()} index={i} file={file} />
          ))}
          {/* <CardUpload />
          <CardUpload />
          <CardUpload />
          <CardUpload /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
