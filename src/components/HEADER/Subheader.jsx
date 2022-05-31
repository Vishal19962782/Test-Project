import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";
import CodeContext from "../../Context/CodeContext";
import axios from "axios";
import TableContext from "../../Context/tableContext";

const StyledButton = styled(Button)({
  color: "black",
  borderRadius: "0px",
  height: "30px",
});
function Subheader() {
  const [code, setCode] = React.useContext(CodeContext);
  const [table, setTable] = React.useContext(TableContext);
  const handleRunCode = () => {
    axios
      .post("https://dabler.app/api/test/runquery", {
        query: code,
      })
      .then(({ data }) => {
        console.log(data);
        setTable(data);
      });
  };
  return (
    <Stack
      direction
      justifyContent={"space-between"}
      sx={{ pl: "10px", pr: "50px",height:"40px",mt:"5px" }}
    >
      <Stack gap={2} direction>
        <StyledButton
          startIcon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5001 4.58317H17.5001V3.58317H16.5001V4.58317ZM19.1966 10.7573L18.9541 11.7274L18.9541 11.7274L19.1966 10.7573ZM18.015 10.4619L17.7725 11.432L18.015 10.4619ZM18.015 11.5378L17.7725 10.5676H17.7725L18.015 11.5378ZM19.1966 11.2424L18.9541 10.2722L18.9541 10.2722L19.1966 11.2424ZM16.5001 3.58317H12.8334V5.58317H16.5001V3.58317ZM12.8334 18.4165H14.5001V16.4165H12.8334V18.4165ZM19.4391 9.78716L18.2575 9.49176L17.7725 11.432L18.9541 11.7274L19.4391 9.78716ZM17.5001 8.52162V4.58317H15.5001V8.52162H17.5001ZM17.5001 15.4165V13.4781H15.5001V15.4165H17.5001ZM18.2575 12.5079L19.4391 12.2125L18.9541 10.2722L17.7725 10.5676L18.2575 12.5079ZM17.5001 13.4781C17.5001 13.0192 17.8124 12.6192 18.2575 12.5079L17.7725 10.5676C16.437 10.9015 15.5001 12.1015 15.5001 13.4781H17.5001ZM18.2575 9.49176C17.8124 9.38047 17.5001 8.98048 17.5001 8.52162H15.5001C15.5001 9.89822 16.437 11.0982 17.7725 11.432L18.2575 9.49176ZM18.9541 11.7274C18.1966 11.5381 18.1966 10.4616 18.9541 10.2722L19.4391 12.2125C20.7016 11.8969 20.7016 10.1028 19.4391 9.78716L18.9541 11.7274ZM14.5001 18.4165C16.1569 18.4165 17.5001 17.0734 17.5001 15.4165H15.5001C15.5001 15.9688 15.0524 16.4165 14.5001 16.4165V18.4165Z"
                fill="#23496C"
              />
              <path
                d="M5.49992 17.4168H4.49992V18.4168H5.49992V17.4168ZM2.80339 11.2427L3.04593 10.2726L3.04593 10.2726L2.80339 11.2427ZM3.98499 11.5381L4.22752 10.568L3.98499 11.5381ZM3.98499 10.4622L4.22753 11.4324H4.22753L3.98499 10.4622ZM2.80339 10.7576L3.04593 11.7278L3.04593 11.7278L2.80339 10.7576ZM5.49992 18.4168H9.16658V16.4168H5.49992V18.4168ZM9.16658 3.5835H7.49992V5.5835H9.16658V3.5835ZM2.56086 12.2128L3.74245 12.5082L4.22752 10.568L3.04593 10.2726L2.56086 12.2128ZM4.49992 13.4784V17.4168H6.49992V13.4784H4.49992ZM4.49992 6.5835V8.52194H6.49992V6.5835H4.49992ZM3.74245 9.49209L2.56086 9.78749L3.04593 11.7278L4.22753 11.4324L3.74245 9.49209ZM4.49992 8.52194C4.49992 8.98081 4.18762 9.3808 3.74245 9.49209L4.22753 11.4324C5.56303 11.0985 6.49992 9.89855 6.49992 8.52194H4.49992ZM3.74245 12.5082C4.18762 12.6195 4.49992 13.0195 4.49992 13.4784H6.49992C6.49992 12.1018 5.56302 10.9018 4.22752 10.568L3.74245 12.5082ZM3.04593 10.2726C3.8034 10.4619 3.80339 11.5384 3.04593 11.7278L2.56086 9.78749C1.29843 10.1031 1.29841 11.8972 2.56086 12.2128L3.04593 10.2726ZM7.49992 3.5835C5.84307 3.5835 4.49992 4.92664 4.49992 6.5835H6.49992C6.49992 6.03121 6.94763 5.5835 7.49992 5.5835V3.5835Z"
                fill="#23496C"
              />
            </svg>
          }
          variant="text"
        >
          Details
        </StyledButton>
        <StyledButton
          variant="text"
          sx={{ borderBottom: "3px solid" }}
          startIcon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16.9478V19.3689H7.26333V16.9478H0ZM0 2.42111V4.84222H12.1056V2.42111H0ZM12.1056 21.79V19.3689H21.79V16.9478H12.1056V14.5267H9.68444V21.79H12.1056ZM4.84222 7.26333V9.68444H0V12.1056H4.84222V14.5267H7.26333V7.26333H4.84222ZM21.79 12.1056V9.68444H9.68444V12.1056H21.79ZM14.5267 7.26333H16.9478V4.84222H21.79V2.42111H16.9478V0H14.5267V7.26333Z"
                fill="#23496C"
              />
            </svg>
          }
        >
          Code
        </StyledButton>
        <StyledButton
          startIcon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#F7F9FB" />
              <circle cx="12" cy="12" r="9" stroke="#23496C" stroke-width="2" />
              <path d="M8 12L11 15L16 9" stroke="#23496C" stroke-width="2" />
            </svg>
          }
          variant="text"
        >
          Validation
        </StyledButton>
        <StyledButton
          startIcon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14"
                stroke="#23496C"
                stroke-width="2"
              />
              <rect
                x="10"
                y="10"
                width="10"
                height="10"
                rx="2"
                stroke="#23496C"
                stroke-width="2"
              />
            </svg>
          }
          variant="text"
        >
          Model Version
        </StyledButton>
        <StyledButton
          startIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.7809 6.12469C11.1259 5.69343 11.056 5.06414 10.6247 4.71913C10.1934 4.37412 9.56414 4.44404 9.21913 4.87531L7.79186 6.65939L5.5547 5.16795C5.09517 4.8616 4.4743 4.98577 4.16795 5.4453C3.8616 5.90483 3.98577 6.5257 4.4453 6.83205L7.25459 8.70491C7.79408 9.06457 8.51901 8.95202 8.92405 8.44572L10.7809 6.12469Z"
                fill="#23496C"
              />
            </svg>
          }
          variant="text"
        >
          Build History
        </StyledButton>
      </Stack>
      <Button
        variant="contained"
        sx={{
          ml: "600px",
          height: "30px",
          backgroundColor: "#06CA6B",
          borderRadius: "0px",
        }}
        onClick={handleRunCode}
      >
        TEST RUN
      </Button>
    </Stack>
  );
}

export default Subheader;
