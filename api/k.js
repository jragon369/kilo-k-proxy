export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  try {
    // Add the complete chatbot object that Chatbase expects
    const requestBody = {
      ...req.body,
      chatbot: {
        id: "u2FE20IFibqz6cbARRZZy",
        name: "K",
        model: "claude-sonnet-4",
        collect_leads_settings: null,
        current_training_id: null,
        custom_domains: [],
        embeddings_metadata: {},
        embedding_model: "text-embedding-ada-002",
        allowed_domains: [],
        index_name: null,
        initial_messages: [],
        instructions: "",
        profilePicture: null,
        canBeEmbeded: true,
        creditsCost: 1,
        ip_limit: 20,
        ip_limit_message: "",
        ip_limit_timeframe: "24h",
        is_embeddings_on_supabase: false,
        last_message_at: new Date().toISOString(),
        last_trained_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        temp: 0.7,
        notifications_settings: {},
        num_of_characters: 0,
        only_allow_on_added_domains: false,
        retraining_interval: null,
        size: "medium",
        status: "active",
        styles: {},
        supabase_training_id: null,
        suggested_messages: [],
        account_id: "default",
        visibility: "public",
        freeze_topics: false,
        shouldDisplayCollectLeads: false,
        credits_limit: 1000,
        credits_used: 0
      }
    };
    
    const response = await fetch('https://www.chatbase.co/api/chat/u2FE20IFibqz6cbARRZZy/playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'YOUR_COMPLETE_COOKIE_STRING_HERE'
      },
      body: JSON.stringify(requestBody)
    });
    
    const data = await response.text();
    res.status(200).send(data);
