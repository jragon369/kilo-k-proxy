export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  try {
    const response = await fetch('https://www.chatbase.co/api/chat/u2FE20IFibqz6cbARRZZy/playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'YOUR_COMPLETE_COOKIE_STRING_HERE'
      },
      body: JSON.stringify(req.body)
    });
    
    const data = await response.text();
    console.log('Chatbase response:', data);
    console.log('Response status:', response.status);
    
    res.status(200).json({
      status: response.status,
      chatbaseResponse: data,
      message: 'Debug info - check logs'
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
