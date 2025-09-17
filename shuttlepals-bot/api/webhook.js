const axios = require('axios');

// Your tokens
const PAGE_ACCESS_TOKEN = 'EAAdGZApNObsABPVVz2VvtIQwAlf688VteIKUK5nHm1Jh6L6b5hNvKNcqyNt4UjDcTyV8ayZCpj3DTqY0rZBLeFdN90AXZAJtviAZCiy0XIOqBG2ZAfFLZCZAX7H843dakbbgewDQE3OjZBUiLC1AbmEwrDw7HPDH6ylcDkrtVmf2ZAWIjBkVpNZCRtES6lU2OpFoo7Ws5pXplC4rupEaTqPHFlNzEkZD';
const VERIFY_TOKEN = 'shuttlepals_verify_2024';

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Facebook verification
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    
    if (mode && token === VERIFY_TOKEN) {
      console.log('Webhook verified');
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send('Forbidden');
    }
  }
  
  // Handle POST from Facebook
  if (req.method === 'POST') {
    console.log('Webhook received:', JSON.stringify(req.body));
    
    // Store thread ID if it's from a group
    if (req.body.entry && req.body.entry[0].messaging) {
      const messaging = req.body.entry[0].messaging[0];
      const threadId = messaging.sender.id;
      console.log('Thread ID:', threadId);
      // You'll use this threadId to send messages
    }
    
    return res.status(200).send('EVENT_RECEIVED');
  }
  
  return res.status(405).send('Method Not Allowed');
};