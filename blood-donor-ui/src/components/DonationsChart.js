import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Paper, Typography } from "@mui/material";

const data = [
  { month: 'Jan', donations: 2 },
  { month: 'Feb', donations: 4 },
  { month: 'Mar', donations: 1 },
  { month: 'Apr', donations: 3 },
  { month: 'May', donations: 5 }
];

export default function DonationsChart() {
  return (
    <Paper sx={{ mt: 5, p: 3, borderRadius: 4 }}>
      <Typography variant="h6" color="error" sx={{ mb: 2 }}>Donation History</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="donations" fill="#d32f2f" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}