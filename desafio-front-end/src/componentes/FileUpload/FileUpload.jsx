import { Button, Typography } from "@mui/material";
import { Input, Form } from "./Styles";
import { CloudUpload } from "@mui/icons-material";
export default function FileUpload() {
  return (
   
      <Form>
        <CloudUpload sx={{color:'#C6C2CC', fontSize:50}}/>
        <Input type="file" hidden className="input-field" />
        <Typography sx={{fontSize:18, color:'#C6C2CC'}}>Envie aqui suas documentações</Typography>
        <Typography sx={{fontSize:14, color:'#C6C2CC'}}>PDF, Word, Excel, outros arquivos</Typography>
        <Button sx={{border:2, borderRadius:2, borderColor:'#5828AC', marginTop:2}} type="button" onClick={() => document.querySelector(".input-field").click()}>
            <Typography color='#5828AC' fontSize={12} >Selecionar Arquivos</Typography>
        </Button> 
      </Form>
    
  );
}
