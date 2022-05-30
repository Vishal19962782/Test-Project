import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";
const StyledButton = styled(Button)({
  color:"text.primary",
  borderRadius: "0px",
});
function Subheader() {
  return (
    <Stack  gap={2} direction>
      <StyledButton variant="text" startIcon={<CodeIcon />}>Details</StyledButton>
      <StyledButton variant="text" startIcon={<CodeIcon />}>Code</StyledButton>
      <StyledButton variant="text" startIcon={<CodeIcon />}>Validation</StyledButton>
      <StyledButton variant="text" startIcon={<CodeIcon />}>Model Version</StyledButton>
      <StyledButton variant="text" startIcon={<CodeIcon />}>Build History</StyledButton>
    </Stack>
  );
}

export default Subheader;
