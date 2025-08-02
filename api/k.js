export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { message } = req.body;
    console.log('Received message:', message);
    
    // Call the real Chatbase API
    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5c761495-ab16-47fd-a35b-2ca2b0fff559'
      },
      body: JSON.stringify({
        messages: [
          {"content": message, "role": "user"}
        ],
        chatbotId: 'u2FE20IFibqz6cbARRZZy',
        stream: false,
        temperature: 0
      })
    });
    
    if (!response.ok) {
      const errorText = await response.tex
