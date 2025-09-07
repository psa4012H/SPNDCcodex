import React from "react";
import { Paper, Typography } from "@mui/material";

const quotes = [
  "“Your blood can give someone another chance at life.”",
  "“Donate blood, save lives.”",
  "“A single pint can save three lives.”",
  "“Be a hero in someone’s life.”"
];

export default function QuoteBanner() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <Paper elevation={4} sx={{ mt: 4, mx: "auto", p: 3, bgcolor: "#ffe9ec", borderRadius: 5 }}>
      <Typography align="center" variant="h6" fontStyle="italic" color="error">
        {quote}
      </Typography>
    </Paper>
  );
}