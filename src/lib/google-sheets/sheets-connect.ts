import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: Buffer.from(process.env.GOOGLE_PRIVATE_KEY || '', 'base64').toString('utf-8'),
  scopes: SCOPES
});

const sheets = google.sheets({ version: 'v4', auth });

export default sheets;
