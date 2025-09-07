import React, { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import SignupLogin from "./components/SignupLogin";
import DonorSearch from "./components/DonorSearch";
import BloodRequest from "./components/BloodRequest";
import UserDashboard from "./components/UserDashboard";
import QuoteBanner from "./components/QuoteBanner";
import ThemeSwitcher from "./components/ThemeSwitcher";
import HospitalMap from "./components/HospitalMap";
import DonationsChart from "./components/DonationsChart";
import EmergencyAlert from "./components/EmergencyAlert";
import DonorDashboard from "./components/DonorDashboard";
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {

  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#d32f2f" }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ mt: 2, mb: 3, display: "flex", gap: 2 }}>
          <MainNavbar page={page} setPage={setPage} />
        </Box>
        <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        <QuoteBanner />
      
        {page === "home" && <Home />}
        {page === "login" && <SignupLogin />}
        {page === "search" && <DonorSearch />}
        {page === "request" && <BloodRequest />}
        {page === "dashboard" && <UserDashboard />}
        {page === "map" && <HospitalMap />}
        {page === "chart" && <DonationsChart />}
        {page === "alert" && <EmergencyAlert />}
        {page === "donordash" && <DonorDashboard />}
      </Container>
    </ThemeProvider>
  );
}
export default App;