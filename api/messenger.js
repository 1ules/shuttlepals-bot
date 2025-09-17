const axios = require('axios');

const PAGE_ACCESS_TOKEN = 'EAAdGZApNObsABPVVz2VvtIQwAlf688VteIKUK5nHm1Jh6L6b5hNvKNcqyNt4UjDcTyV8ayZCpj3DTqY0rZBLeFdN90AXZAJtviAZCiy0XIOqBG2ZAfFLZCZAX7H843dakbbgewDQE3OjZBUiLC1AbmEwrDw7HPDH6ylcDkrtVmf2ZAWIjBkVpNZCRtES6lU2OpFoo7Ws5pXplC4rupEaTqPHFlNzEkZD';
const GROUP_CHAT_ID = 'YOUR_GROUP_CHAT_ID';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }
  
  const { message } = req.body;
  
  try {
    await axios.post(
      `https://graph.facebook.com/v18.0/${GROUP_CHAT_ID}/messages`,
      {
        message: { text: message }
      },
      {
        headers: {
          'Authorization': `Bearer ${PAGE_ACCESS_TOKEN}`
        }
      }
    );
    res.status(200).send('Message sent');
  } catch (error) {
    console.error('Error:', error.response?.data || error);
    res.status(500).send('Failed to send message');
  }
};