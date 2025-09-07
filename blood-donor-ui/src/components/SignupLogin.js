import React, { useState } from "react";
import {
  Paper, Typography, Avatar, TextField, Button,
  Grid, MenuItem, Box
} from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

export default function SignupLogin() {
  const [view, setView] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor",
    bloodGroup: "",
    latitude: "",
    longitude: ""
  });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSignup(e) {
    e.preventDefault();
    setMessage("");
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
    };
    if (form.role === "donor") {
      payload.bloodGroup = form.bloodGroup;
      payload.latitude = form.latitude;
      payload.longitude = form.longitude;
    }
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setMessage(data.message || JSON.stringify(data));
  }

  async function handleLogin(e) {
    e.preventDefault();
    setMessage("");
    const payload = {
      email: form.email,
      password: form.password,
    };
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      setMessage("Login successful!");
    } else {
      setMessage(data.message || "Login failed");
    }
  }

  return (
    <Paper elevation={8} sx={{ mt: 4, p: 4, borderRadius: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ m: 1, bgcolor: "red" }}>
          <BloodtypeIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          {view === "login" ? "Sign In to Blood Donor" : "Register as Blood Donor/Patient"}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Button fullWidth variant={view === "signup" ? "contained" : "outlined"} onClick={() => setView("signup")}>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant={view === "login" ? "contained" : "outlined"} onClick={() => setView("login")}>
              Sign In
            </Button>
          </Grid>
        </Grid>
        <Box component="form" onSubmit={view === "login" ? handleLogin : handleSignup} sx={{ mt: 2, width: "100%" }}>
          {view === "signup" && (
            <>
              <TextField margin="normal" fullWidth label="Name" name="name" value={form.name} onChange={handleChange} autoFocus required />
              <TextField margin="normal" fullWidth label="Email Address" name="email" value={form.email} onChange={handleChange} required />
              <TextField margin="normal" fullWidth label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
              <TextField select label="Role" name="role" value={form.role} onChange={handleChange} fullWidth margin="normal">
                <MenuItem value="donor">Donor</MenuItem>
                <MenuItem value="patient">Patient</MenuItem>
              </TextField>
              {form.role === "donor" && (
                <>
                  <TextField margin="normal" fullWidth label="Blood Group" name="bloodGroup" value={form.bloodGroup} onChange={handleChange} required />
                  <TextField margin="normal" fullWidth label="Latitude" name="latitude" value={form.latitude} onChange={handleChange} />
                  <TextField margin="normal" fullWidth label="Longitude" name="longitude" value={form.longitude} onChange={handleChange} />
                </>
              )}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "red" }}>
                Register
              </Button>
            </>
          )}
          {view === "login" && (
            <>
              <TextField margin="normal" fullWidth label="Email Address" name="email" value={form.email} onChange={handleChange} required />
              <TextField margin="normal" fullWidth label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "red" }}>
                Sign In
              </Button>
            </>
          )}
        </Box>
        {message && <Typography sx={{ mt: 2 }} color={message.includes("success") ? "green" : "red"}>{message}</Typography>}
        {token && <Box sx={{ mt: 1 }}><b>JWT Token:</b> <span style={{ wordBreak: "break-all" }}>{token}</span></Box>}
      </Box>
    </Paper>
  );
}