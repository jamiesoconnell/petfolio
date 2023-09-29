const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const dotenv = require('dotenv');
dotenv.config();

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

module.exports = {
  // Function to create a new event
  createEvent: async (eventData) => {
    try {
      const response = await calendar.events.insert({
        calendarId: 'primary', // You can change this to the desired calendar
        resource: eventData,
      });

      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },
};
