const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController'); // Create this controller

// Authorization route
router.get('/authorize', calendarController.authorize);

// Callback route
router.get('/callback', calendarController.callback);

// Calendar events routes (e.g., create, update, delete)
router.post('/createEvent', calendarController.createEvent);
router.put('/updateEvent/:eventId', calendarController.updateEvent);
router.delete('/deleteEvent/:eventId', calendarController.deleteEvent);

module.exports = router;
