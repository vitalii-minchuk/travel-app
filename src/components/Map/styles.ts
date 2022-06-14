import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

export const MiniContainer = styled("div")(() => ({
  position: "absolute",
  zIndex: 1,
  "&:hover": {
    zIndex: 2
  },
  transform: "translate(-50%, -50%)"
}))

export const MiniPaper = styled(Paper)(() => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  transform: "translate(-50%, -50%)",
  justifyContent: 'center',
  width: '100px'
}))