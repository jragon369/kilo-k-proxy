export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  try {
    const { message } = req.body;
    
    // Try the official API endpoint first
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
      const errorText = await response.text();
      console.error('Chatbase API Error:', response.status, errorText);
      throw new Error(`Chatbase API error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ error: 'K connection failed: ' + error.message });
  }
}
