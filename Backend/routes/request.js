const express = require('express');
const router = express.Router();
const Request = require('./Backend/models/Request');
const User = require('./Backend/models/User');


router.get('/test', (req, res) => {
    res.json({ message: 'Request route is working!'});
});

// Create a blood request
router.post('/create', async (req, res) => {
  try {
    const { patientId, bloodGroup } = req.body;
    if (!patientId || !bloodGroup) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }
    const request = await Request.create({ patientId, bloodGroup });
    res.json({ message: 'Request created.', request });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
});

// List all requests for a patient
router.get('/patient/:id', async (req, res) => {
  try {
    const requests = await Request.findAll({ where: { patientId: req.params.id } });
    res.json({ requests });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
});

module.exports = router;