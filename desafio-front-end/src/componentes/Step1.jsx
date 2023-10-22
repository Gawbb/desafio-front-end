import { Container, TextField , Card , CardContent , Grid , Typography} from "@mui/material";

export default function Step1({ handleChange }) {
  return (
    <Container>
      <TextField
        label="Nome do cliente ou CNPJ"
        name="name"
        onChange={handleChange}
        fullWidth
        margin="normal"
        //sx={{}}
      />
      <Card sx={{border: 1 , borderColor:'#5828AC'}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography sx={{fontSize: 15 , color:'#C6C2CC'}}>Nome</Typography>
            <Typography sx={{fontSize: 20 , fontWeight: 'bold'}}>Americanas S.A</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{fontSize: 15 , color:'#C6C2CC'}}>CNPJ</Typography>
            <Typography sx={{fontSize: 20 , fontWeight: 'bold'}}>00.776.574/0001-56</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Container>
  );
}
