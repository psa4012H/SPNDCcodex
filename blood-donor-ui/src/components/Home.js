import React from "react";
import { Paper, Typography, Box, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";

// Awareness images (replace or add more for your own branding)
const awarenessImages = [
  "image1.jpg",
  "image2.jpg"
];

export default function Home() {
  return (
    <Paper sx={{ mt: 4, p: 4, borderRadius: 4 }}>
      <Typography variant="h3" fontWeight="bold" color="error" sx={{ mb: 2 }}>
        Welcome to BloodConnect!
      </Typography>
      <Typography variant="h5" color="primary" sx={{ mb: 2, fontStyle: "italic", fontWeight: "bold" }}>
        “A single pint can save three lives.”
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography fontSize={18} color="text.secondary">
          Become a hero—donate blood and make a difference today. Explore donor stories and real impact below.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" sx={{ mb: 1 }}>Watch Blood Donation Awareness:</Typography>
          <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 3, boxShadow: 3 }}>
            <video
              width="100%"
              height="250"
              controls
              autoPlay
              loop
              style={{ borderRadius: "16px", width: "100%" }}
            >
              <source src="/Blood-donation-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" sx={{ mb: 1 }}>See Real Donation Moments:</Typography>
          <Grid container spacing={2}>
            {awarenessImages.map((img, idx) => (
              <Grid item xs={6} key={idx}>
                <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={img}
                    alt={`Blood donation awareness ${idx + 1}`}
                  />
                  <CardContent sx={{ p: 1 }}>
                    <Typography fontSize={12} color="text.secondary">
                      {idx === 0
                        ? "Donors step up in urgent times"
                        : "Every donation brings hope"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
        <Button variant="contained" color="error" size="large" href="#login">
          Start Your Journey
        </Button>
        <Button variant="outlined" color="error" size="large" href="#donors">
          Search for Donors
        </Button>
      </Box>
      <Typography sx={{ mt: 4, textAlign: "center", color: "#777" }}>
        <strong>BloodConnect:</strong> Educate. Enlighten. Empower. Together we can save lives!
      </Typography>
    </Paper>
  );
}