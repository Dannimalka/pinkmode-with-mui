import { createTheme, ThemeProvider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { blue, pink, grey } from "@mui/material/colors";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode,
      primary: {
        ...blue,
        ...(mode === "dark" && {
          main: pink[800],
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: pink[200],
          paper: pink[500],
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: pink[100],
            }),
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
