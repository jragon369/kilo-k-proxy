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
    const response = await fetch('https://www.chatbase.co/api/chat/u2FE20IFibqz6cbARRZZy/playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'YOUR_COMPLETE_COOKIE_STRING_HERE'
      },
      body: JSON.stringify(req.body)
    });
    
    if (!response.ok) {
      throw new Error(`Chatbase error: ${response.status}`);
    }
    
    const data = await response.text();
    res.status(200).send(data);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'K is sleeping: ' + error.message });
  }
}
