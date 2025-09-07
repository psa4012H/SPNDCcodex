import React, {useState } from "react";
import {
  Container, Box, Typography, TextField,
  Button, Grid, Card, CardContent, Avatar
} from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

export default function DonorSearch() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchDonors = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDonors([]);
    try {
      const res = await fetch(`http://localhost:5000/api/donor/search?bloodGroup=${bloodGroup}`);
      const data = await res.json();
      setDonors(data.donors || []);
    } catch (error) {
      setDonors([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 6, bgcolor: "#fff0f0", p: 4, borderRadius: 5 }}>
        <Typography variant="h3" sx={{ mb: 2, color: "red", fontWeight: 700 }}>
          Find Blood Donors
        </Typography>
        <form onSubmit={searchDonors}>
          <TextField label="Blood Group" variant="outlined"
                     value={bloodGroup}
                     onChange={e => setBloodGroup(e.target.value)}
                     required sx={{ mr: 2 }} />
          <Button type="submit" variant="contained" color="error">
            Search
          </Button>
        </form>
        {loading && <Typography sx={{ mt: 2 }}>Searching donors...</Typography>}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {!loading && donors.length === 0 && (
            <Grid item xs={12}>
              <Typography sx={{ color: "#888" }}>
                No donors found yet. Try searching for A+, B+, O-, etc.
              </Typography>
            </Grid>
          )}
          {donors.map(donor => (
            <Grid item xs={12} md={4} key={donor.id}>
              <Card sx={{ bgcolor: "#ffe6e6", borderRadius: 3, boxShadow: 4 }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: "red", mb: 1 }}>
                    <BloodtypeIcon />
                  </Avatar>
                  <Typography variant="h6">{donor.name}</Typography>
                  <Typography>Blood Group: <b>{donor.bloodGroup}</b></Typography>
                  <Typography>Email: {donor.email}</Typography>
                  <Typography>Location: {donor.latitude}, {donor.longitude}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}