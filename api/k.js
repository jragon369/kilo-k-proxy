export default async function handler(req, res) {
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
    
    // Use your original playground endpoint that was working
    const response = await fetch('https://www.chatbase.co/api/chat/u2FE20IFibqz6cbARRZZy/playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        stream: false
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Chatbase Error:', response.status, errorText);
      throw new Error(`Chatbase error: ${response.status}`);
    }
    
    // The playground endpoint might return text, not JSON
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { text: text };
    }
    
    console.log('Chatbase response:', data);
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ error: 'K connection failed: ' + error.message });
  }
}
