import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";

export default function MainNavbar({ page, setPage }) {
  return (
    <AppBar position="static" color="error" sx={{ mb: 2, borderRadius: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side: Logo & Home */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{ mr: 1 }} color="inherit" onClick={() => setPage("home")}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: "bold", display: { xs: "none", md: "block" } }}>
            BloodConnect
          </Typography>
        </Box>
        {/* Center: Navigation */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" startIcon={<SearchIcon />} onClick={() => setPage("donors")}>Find Donors</Button>
          <Button color="inherit" startIcon={<BloodtypeIcon />} onClick={() => setPage("request")}>Request Blood</Button>
          <Button color="inherit" startIcon={<DashboardIcon />} onClick={() => setPage("dashboard")}>Dashboard</Button>
          <Button color="inherit" onClick={() => setPage("map")}>Hospital Map</Button>
          <Button color="inherit" onClick={() => setPage("chart")}>Donation Chart</Button>
          <Button color="inherit" startIcon={<NotificationsIcon />} onClick={() => setPage("alert")}>Emergency Alert</Button>
          <Button color="inherit" onClick={() => setPage("donor_dashboard")}>Donor Dashboard</Button>
        </Box>
        {/* Right: Mobile Menu Icon (placeholder for drawer) */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}