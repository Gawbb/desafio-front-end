import { Typography } from "@mui/material";
import { Input, Form } from "./Styles";
import { CloudUpload } from "@mui/icons-material";
export default function FileUpload() {
  return (
   
      <Form>
        <CloudUpload sx={{color:'#C6C2CC', fontSize:50}}/>
        <Input type="file" hidden />
        <Typography sx={{fontSize:18, color:'#C6C2CC'}}>Envie aqui suas documentações</Typography>
        <Typography sx={{fontSize:14, color:'#C6C2CC'}}>PDF, Word, Excel, outros arquivos</Typography>
      </Form>
    
  );
}
