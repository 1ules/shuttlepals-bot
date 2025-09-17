const axios = require('axios');

const PAGE_ACCESS_TOKEN = 'EAAdGZApNObsABPVVz2VvtIQwAlf688VteIKUK5nHm1Jh6L6b5hNvKNcqyNt4UjDcTyV8ayZCpj3DTqY0rZBLeFdN90AXZAJtviAZCiy0XIOqBG2ZAfFLZCZAX7H843dakbbgewDQE3OjZBUiLC1AbmEwrDw7HPDH6ylcDkrtVmf2ZAWIjBkVpNZCRtES6lU2OpFoo7Ws5pXplC4rupEaTqPHFlNzEkZD';

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { message, threadId } = req.body;
  
  if (!message || !threadId) {
    return res.status(400).json({ error: 'Missing message or threadId' });
  }
  
  try {
    // Send message to Messenger
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/me/messages`,
      {
        recipient: { id: threadId },
        message: { text: message }
      },
      {
        headers: {
          'Authorization': `Bearer ${PAGE_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Message sent successfully:', response.data);
    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error('Error sending message:', error.response?.data || error.message);
    return res.status(500).json({ 
      error: 'Failed to send message', 
      details: error.response?.data || error.message 
    });
  }
};