import {
  CardHeader,
  Card,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { UploadFile, Delete } from "@mui/icons-material";
export default function CardUpload() {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<UploadFile sx={{ fontSize: 38 }} />}
        action={
          <IconButton aria-label="settings">
            <Delete sx={{ color: "#C6C2CC" }} />
          </IconButton>
        }
        title={
          <Box>
            <Typography fontWeight="bold">contrato_garantia.xls</Typography>
          </Box>
        }
        subheader={
          <Box>
            <Box sx={{ display: "flex", marginBottom: 2 }}>
              <Typography fontSize={12} marginRight={2}>
                Anexado: 19/06/2023
              </Typography>
              <Typography fontSize={12}>
                Enviado por: Daniella Barbosa
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize={12} marginRight={2}>
                Selecione o tipo de arquivo
              </Typography>
              <select
                placeholder="Selecione"
                style={{
                  width: "40%",
                  backgroundColor: "#5828AC",
                  height: 22,
                  borderRadius: 8,
                  color: "white",
                  border: "none",
                  textAlign: "center",
                }}
              >
                <option>Selecionar</option>
                <option>Teste 1</option>
                <option>Teste 1</option>
                <option>Teste 1</option>
              </select>
            </Box>
          </Box>
        }
      />
    </Card>
  );
}
