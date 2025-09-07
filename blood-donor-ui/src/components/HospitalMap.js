import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Paper, Typography } from "@mui/material";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// fix leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Example hospital data
const hospitals = [
  { id: 1, name: "Red Cross Hospital", lat: 28.7041, lng: 77.1025 },
  { id: 2, name: "General Hospital", lat: 28.6341, lng: 77.2186 },
];

export default function HospitalMap() {
  const center = [28.7041, 77.1025];
  return (
    <Paper sx={{ mt: 5, p: 3, borderRadius: 4 }}>
      <Typography variant="h6" color="error" sx={{ mb: 2 }}>Nearest Hospitals</Typography>
      <MapContainer center={center} zoom={11} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hospitals.map(hospital => (
          <Marker key={hospital.id} position={[hospital.lat, hospital.lng]}>
            <Popup>
              <strong>{hospital.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Paper>
  );
}