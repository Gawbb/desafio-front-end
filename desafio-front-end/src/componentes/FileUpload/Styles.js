import { styled } from "@mui/material/styles";

export const Input = styled("input")(({ theme }) => ({}));

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px dashed #C6C2CC",
  borderRadius: 4,
  height: 180,
  width: "100%",
  padding: 5,
}));
