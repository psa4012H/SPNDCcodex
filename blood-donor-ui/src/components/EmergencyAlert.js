import React from "react";
import { Box, Paper, Typography, Chip, Button, Divider, Grid } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsIcon from "@mui/icons-material/Directions";
import PhoneIcon from "@mui/icons-material/Phone";
import WarningIcon from "@mui/icons-material/Warning";

const requests = [
  {
    hospital: "City General Hospital",
    address: "123 Medical Center Dr, Downtown",
    distance: "0.8 miles",
    verified: true,
    severity: "Critical",
    bloodGroup: "O-",
    unitsNeeded: 8,
    reason: "Multi-vehicle accident - trauma patients",
    posted: "15 minutes ago",
    deadline: "2 hours",
    responses: 3,
    phone: "(555) 911-1234"
  },
  {
    hospital: "Children's Medical Center",
    address: "456 Pediatric Way, Midtown",
    distance: "1.5 miles",
    verified: true,
    severity: "High",
    bloodGroup: "A+",
    unitsNeeded: 4,
    reason: "Pediatric surgery complications",
    posted: "45 minutes ago",
    deadline: "6 hours",
    responses: 1,
    phone: "(555) 911-5678"
  }
];

export default function EmergencyAlert() {
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Paper sx={{ bgcolor: "#ffeaea", p: 2 }}>
        <Typography color="error" fontWeight="bold" display="flex" alignItems="center">
          <WarningIcon sx={{ mr: 1 }} /> Emergency Alert System
        </Typography>
        <Typography sx={{ mt: 1, fontSize: "0.95rem" }}>
          These are urgent blood requests from verified medical facilities. Your immediate response can save lives.
        </Typography>
      </Paper>
      {requests.map((req, idx) => (
        <Paper key={idx} sx={{ mt: 3, p: 2, borderRadius: 3 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <LocalHospitalIcon color="error" sx={{ fontSize: 32 }} />
            </Grid>
            <Grid item xs>
              <Typography variant="h6">{req.hospital}</Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                {req.verified && <Chip label="Verified" color="success" size="small" />}
                <Chip label={req.severity} color={req.severity === "Critical" ? "error" : "warning"} size="small" />
              </Box>
              <Typography fontSize={15} sx={{ color: "#555" }}>{req.address} <span style={{ color: "#aaa" }}>• {req.distance}</span></Typography>
            </Grid>
            <Grid item>
              <Typography color="error" fontWeight="bold" fontSize={22}>{req.bloodGroup}</Typography>
              <Typography fontSize={15}>{req.unitsNeeded} units needed</Typography>
            </Grid>
          </Grid>
          <Typography sx={{ mt: 1 }}>
            <b>Reason:</b> {req.reason}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography fontSize={14} color="text.secondary">
            <span>Posted: {req.posted}</span> • <span>Deadline: {req.deadline}</span>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <PhoneIcon fontSize="small" sx={{ mr: 1 }} /> 
            <Typography fontSize={15}>Current Responses: {req.responses} • {req.phone}</Typography>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap"}}>
            <Button variant="contained" color="error" sx={{ minWidth: 140 }}>Respond Now</Button>
            <Button variant="outlined" color="info" startIcon={<DirectionsIcon />} sx={{ minWidth: 120 }}>Directions</Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}