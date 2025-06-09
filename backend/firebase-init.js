// const admin = require('firebase-admin');
// const dotenv = require('dotenv');
// dotenv.config();

// const serviceAccount = require('./serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: process.env.FIREBASE_DATABASE_URL
// });

// const db = admin.database();
// module.exports = db;

const admin = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();

let serviceAccount;

try {
  serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);
} catch (error) {
  console.error('❌ Failed to parse SERVICE_ACCOUNT_KEY. Make sure it is a valid JSON string.');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.database();
module.exports = db;
