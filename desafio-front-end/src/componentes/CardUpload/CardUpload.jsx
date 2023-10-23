import { Delete, UploadFile } from "@mui/icons-material";
import { Box, Card, CardHeader, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/app-context";
export default function CardUpload({ file, index }) {
  const { handleRemoveFile } = useContext(AppContext);
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<UploadFile sx={{ fontSize: 38 }} />}
        action={
          <IconButton
            onClick={(e) => handleRemoveFile(index)}
            // aria-label="settings"
          >
            <Delete sx={{ color: "#C6C2CC" }} />
          </IconButton>
        }
        title={
          <Box>
            <Typography fontWeight="bold">{file.name}</Typography>
          </Box>
        }
        subheader={
          <Box>
            <Box sx={{ display: "flex", marginTop: 1 }}>
              <Typography fontSize={12} marginRight={2}>
                Anexado: {new Date().toLocaleString("pt-br").split(",")[0]}
              </Typography>
              {/* <Typography fontSize={12}>
                Enviado por: Daniella Barbosa
              </Typography> */}
            </Box>
            {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            </Box> */}
          </Box>
        }
      />
    </Card>
  );
}
