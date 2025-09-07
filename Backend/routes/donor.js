const express = require('express');
const User = require('./Backend/models/User');
const router = express.Router();

// Donor search by blood group (and optionally location)
router.get('/search', async (req, res) => {
  try {
    const { bloodGroup, latitude, longitude, radius } = req.query;

    if (!bloodGroup) {
      return res.status(400).json({ message: 'bloodGroup is required.' });
    }

    let where = { role: 'donor', bloodGroup };
    // If latitude, longitude, and radius are provided, filter by radius
    if (latitude && longitude && radius) {
      const lat = parseFloat(latitude);
      const lon = parseFloat(longitude);
      const r = parseFloat(radius); // radius in KM

      // Simple filtering - not true geo, but works for most hackathon demos!
      const earthRadiusKm = 6371;
      const haversine = (lat1, lon1, lat2, lon2) => {
        const toRad = deg => deg * Math.PI / 180;
        const dLat = toRad(lat2-lat1);
        const dLon = toRad(lon2-lon1);
        const a = Math.sin(dLat/2)**2
                + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))
                * Math.sin(dLon/2)**2;
        return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      };

      const donors = await User.findAll({ where });
      const filteredDonors = donors.filter(donor => {
        if (donor.latitude && donor.longitude) {
          const dist = haversine(lat, lon, donor.latitude, donor.longitude);
          return dist <= r;
        }
        return false;
      });

      return res.json({ donors: filteredDonors });
    } else {
      // Simple blood group match
      const donors = await User.findAll({ where });
      return res.json({ donors });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

module.exports = router;