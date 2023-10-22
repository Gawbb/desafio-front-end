import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const steps = ["Informações Básicas", "Detalhes", "Envio de Arquivos"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container maxWidth="sm"  sx={{ mt: 8, backgroundColor:'white' , padding: 10}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          {activeStep === 0 && (
            <>
              <Typography variant="h6">Etapa 1</Typography>
              <TextField
                label="Name"
                name="name"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="h6">Step 2</Typography>
              <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography variant="h6">Step 3</Typography>
              <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
          {activeStep > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleBack}
              sx={{ marginLeft: 8 }}
            >
              Back
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MultiStepForm;