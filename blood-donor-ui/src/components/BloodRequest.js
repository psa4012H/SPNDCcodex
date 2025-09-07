import React, { useState } from "react";
import {
  Container, Box, Typography, TextField, Button, Paper
} from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

export default function BloodRequest() {
  const [patientId, setPatientId] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitRequest(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/request/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientId, bloodGroup })
      });
      const data = await res.json();
      setMessage(data.message || JSON.stringify(data));
    } catch(err) {
      setMessage("Network error.");
    }
    setLoading(false);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={8} sx={{ p: 5, borderRadius: 5, bgcolor: "#fff8f8" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <BloodtypeIcon color="error" sx={{ fontSize: 48, mr: 2 }} />
            <Typography variant="h4" color="error" fontWeight="bold">
              Request Blood
            </Typography>
          </Box>
          <form onSubmit={submitRequest}>
            <TextField label="Patient ID" variant="outlined"
                       value={patientId}
                       onChange={e => setPatientId(e.target.value)}
                       required fullWidth sx={{ mb: 3 }} />
            <TextField label="Blood Group" variant="outlined"
                       value={bloodGroup}
                       onChange={e => setBloodGroup(e.target.value)}
                       required fullWidth sx={{ mb: 3 }} />
            <Button type="submit" variant="contained" color="error"
                    fullWidth sx={{ fontWeight: "bold", fontSize: 18 }}
                    disabled={loading}>
              {loading ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
          {message && (
            <Box sx={{ mt: 3 }}>
              <Typography color={message.includes("success") || message.includes("created") ? "green" : "error"}>
                {message}
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
}