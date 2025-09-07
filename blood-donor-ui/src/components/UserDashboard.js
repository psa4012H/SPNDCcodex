import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

export default function UserDashboard({ user }) {
  // Example user if not provided
  const demoUser = {
    name: "Naziya Khan",
    role: "Donor",
    bloodGroup: "A+",
    email: "naziyaspn01@gmail.com",
    donated: 3,
    lastDonation: "2025-05-20"
  };
  const u = user || demoUser;

  return (
    <Card sx={{ maxWidth: 350, mx: "auto", mt: 4, bgcolor: "#fff4f3", borderRadius: 4, boxShadow: 5 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "red", width: 60, height: 60 }}>
            <LocalHospitalIcon fontSize="large" />
          </Avatar>
        </Box>
        <Typography align="center" variant="h5" fontWeight="bold">{u.name}</Typography>
        <Typography align="center" color="error">{u.role} • Blood Group: {u.bloodGroup}</Typography>
        <Typography align="center" sx={{ mt: 1 }}>{u.email}</Typography>
        <Typography align="center" fontSize={14} sx={{ mt: 2 }}>
          Donations: <b>{u.donated}</b> | Last: <b>{u.lastDonation}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}