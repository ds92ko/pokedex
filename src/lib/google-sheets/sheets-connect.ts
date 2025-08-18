import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const serviceAccount = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT ?? '', 'base64').toString('utf-8')
);

const auth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: SCOPES
});

const sheets = google.sheets({ version: 'v4', auth });

export default sheets;
