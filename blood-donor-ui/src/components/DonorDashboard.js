import React from "react";
import { Paper, Typography, Chip, Grid, LinearProgress, Divider } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BloodtypeIcon from "@mui/icons-material/LocalHospital";

export default function DonorDashboard() {
  const user = {
    name: "Sarah Johnson",
    totalDonations: 24,
    livesSaved: 72,
    bloodType: "O-",
    donorLevel: "Hero",
    donationProgress: 19,
    nextEligibility: "10/3/2024",
    canDonateDays: 12
  };

  return (
    <Paper sx={{ mt: 3, p: 3, borderRadius: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Donor Dashboard</Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Welcome back, {user.name}! Track your donations, manage your profile, and see your impact.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#f9fafb" }}>
            <Typography fontWeight="bold" fontSize={30}>{user.totalDonations}</Typography>
            <Typography>Total Donations</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#f9fafb" }}>
            <Typography fontWeight="bold" fontSize={30} color="success.main">{user.livesSaved}</Typography>
            <Typography>Lives Potentially Saved</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#fff7f0" }}>
            <BloodtypeIcon color="error" sx={{ fontSize: 30, mb: 1 }} />
            <Typography fontWeight="bold">{user.bloodType}</Typography>
            <Typography>Blood Type</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#f7fff7" }}>
            <Chip icon={<EmojiEventsIcon />} label={user.donorLevel} color="success" variant="outlined" />
            <Typography>Donor Level</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" fontSize={18} color="text.secondary">Donor Level Progress</Typography>
          <Typography fontSize={14}>Your journey to the next donor level</Typography>
          <LinearProgress value={user.donationProgress} variant="determinate" sx={{ height: 12, borderRadius: 6, mt: 2 }} />
          <Typography fontSize={13} color="text.secondary" sx={{ mt: 1 }}>
            - {user.donationProgress} more donations to next level
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" fontSize={18} color="text.secondary">Next Donation Eligibility</Typography>
          <Typography fontSize={25} sx={{ mb: 1 }}>{user.nextEligibility}</Typography>
          <Typography fontSize={14}>
            You can donate again in <b>{user.canDonateDays}</b> days.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
