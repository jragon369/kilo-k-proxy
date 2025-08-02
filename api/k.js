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
    console.log('=== PROXY DEBUG ===');
    console.log('Received message:', message);
    console.log('API Key (first 10 chars):', 'YOUR_NEW_API_KEY'.substring(0, 10));
    
    const requestBody = {
      messages: [
        {"content": message, "role": "user"}
      ],
      chatbotId: "u2FE20IFibqz6cbARRZZy",
      stream: false,
      temperature: 0
    };
    
    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer bdd521d9-ff09-4fa2-9d7a-c228e2642c7f`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Chatbase API Error Details:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      
      return res.status(200).json({ 
        error: `Chatbase API Error: ${response.status}`,
        details: errorText,
        debug: {
          status: response.status,
          statusText: response.statusText
        }
      });
    }
    
    const data = await response.json();
    console.log('Chatbase success response:', data);
    
    res.status(200).json(data);
    
  } catch (error) {
    console.error('=== PROXY ERROR ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    res.status(200).json({ 
      error: 'Connection failed',
      details: error.message,
      type: error.name,
      debug: 'Check Vercel function logs for details'
    });
  }
}
