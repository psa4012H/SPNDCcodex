import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

export default function ThemeSwitcher({ darkMode, setDarkMode }) {
  return (
    <FormControlLabel
      control={
        <Switch color="error" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      }
      label={darkMode ? "Dark Mode" : "Light Mode"}
      sx={{ mt: 2 }}
    />
  );
}