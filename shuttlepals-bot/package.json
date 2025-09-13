const axios = require('axios');

// Your tokens
const PAGE_ACCESS_TOKEN = 'EAAdGZApNObsABPVVz2VvtIQwAlf688VteIKUK5nHm1Jh6L6b5hNvKNcqyNt4UjDcTyV8ayZCpj3DTqY0rZBLeFdN90AXZAJtviAZCiy0XIOqBG2ZAfFLZCZAX7H843dakbbgewDQE3OjZBUiLC1AbmEwrDw7HPDH6ylcDkrtVmf2ZAWIjBkVpNZCRtES6lU2OpFoo7Ws5pXplC4rupEaTqPHFlNzEkZD';
const VERIFY_TOKEN = 'shuttlepals_verify_2024';
const GROUP_CHAT_ID = 'YOUR_GROUP_CHAT_ID';

module.exports = async (req, res) => {
  // Handle GET request (Facebook verification)
  if (req.method === 'GET') {
    if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
      return res.send(req.query['hub.challenge']);
    }
    return res.status(403).send('Forbidden');
  }
  
  // Handle POST request (incoming messages)
  if (req.method === 'POST') {
    res.status(200).send('OK');
  }
};