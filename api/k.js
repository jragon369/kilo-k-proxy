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
    
    // Try the exact format from Chatbase docs
    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer bdd521d9-ff09-4fa2-9d7a-c228e2642c7f`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          {"content": message, "role": "user"}
        ],
        chatbotId: "u2FE20IFibqz6cbARRZZy",
        stream: false,
        temperature: 0
      })
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', [...response.headers.entries()]);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Chatbase API Error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `Chatbase error: ${response.status} - ${errorText}`,
        details: errorText
      });
    }
    
    const data = await response.json();
    console.log('Chatbase success:', data);
    
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ 
      error: 'Proxy error: ' + error.message,
      details: error.stack
    });
  }
}
