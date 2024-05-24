import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';

let GMAIL_AUTH = null;
const AWAITING_AUTH_PROMISES = [];
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// to find out where to get tokens, see https://developers.google.com/gmail/api/quickstart/nodejs
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    // to find out where to get tokens, see https://developers.google.com/gmail/api/quickstart/nodejs
    console.error('You have to install gmail api credentials for emails to be sent...');
    return null;
  }
}

/**
 * Serializes credentials to a file compatible with GoogleAuth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

async function getGmailAPIAuth() {
  if (GMAIL_AUTH === null) {
    return new Promise((resolve) => AWAITING_AUTH_PROMISES.push(resolve));
  }
  return GMAIL_AUTH;
}

export default async function sendEmail(
  toEmail,
  subject,
  body,
  fromName = 'DO-NOT-REPLY',
  fromEmail = 'cses@ucsd.edu',
  toName = 'CSES Member',
) {
  // await api auth
  const gmailAuth = await getGmailAPIAuth();
  const gmail = google.gmail({ version: 'v1', auth: gmailAuth });
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    `From: ${fromName} <${fromEmail}>`,
    `To: ${toName} <${toEmail}>`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    `${body}`,
  ];
  const message = messageParts.join('\n');

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  try {
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });
  } catch (e) {
    console.error(`Could not send the email! ${e}`);
  }
}

authorize()
  .then((auth) => {
    // got auth completed
    GMAIL_AUTH = auth;
    AWAITING_AUTH_PROMISES.forEach((resolve) => resolve(auth));
  })
  .catch(console.error);
