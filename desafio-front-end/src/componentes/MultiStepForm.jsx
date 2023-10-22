import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

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
    <Container
      maxWidth="md"
      sx={{ mt: 8, backgroundColor: "white", padding: 8 }}
    >
    <Box sx={{border: 1 , borderColor: 'rgb(210, 210, 210)' , padding: 5 , borderRadius:2}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12} sx={{width: '100%'}}>
          {activeStep === 0 && (
            
            <Step1 handleChange={handleChange}/>  
           
          )}
          {activeStep === 1 && (
            <Step2 handleChange={handleChange}/>
          )}
          {activeStep === 2 && (
            <Step3 handleChange={handleChange}/>
          )}
        </Grid>
        <Grid item xs={12}>
        {activeStep == 1 && (
            <Button
              variant="contained"
              onClick={handleBack}
              sx={{ marginRight: 2 , backgroundColor: '#A39DAD'}}
            >
              Selecione outro cliente
            </Button>
          )}
          <Button
            variant="contained"
            sx={{backgroundColor: '#5828AC'}}
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? `Enviar` : `Avançar para ${steps[activeStep + 1]}`}
          </Button>
          {activeStep > 0 && (
            <Button
              variant="contained"
              onClick={handleBack}
              sx={{ marginLeft: 2 , backgroundColor: '#A39DAD'}}
            >
              Voltar
            </Button>
          )}
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default MultiStepForm;
