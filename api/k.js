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
        'Cookie': 'tracking-preferences=%7B%22analytics%22%3Atrue%2C%22necessary%22%3Atrue%2C%22lastUpdated%22%3A1753572047284%7D; _ga=GA1.1.956912142.1753572048; chatbase_anon_id=841eb9db-9f20-4014-a094-d64c8245d9aa; sidebar-width=240; __stripe_mid=f9b40a37-f08a-4c12-9944-ff8351284c238ffc5f; _gcl_au=1.1.1612301450.1753572047.962413857.1753984705.1753984704; sb-backend-auth-token=base64-eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0ltdHBaQ0k2SW10ellXcFlkRkZSYWtNd1prTXpkblFpTENKMGVYQWlPaUpLVjFRaWZRLmV5SnBjM01pT2lKb2RIUndjem92TDJOd2FuWnhZWEZzWW05eWFIUjRhbmxqYldka0xuTjFjR0ZpWVhObExtTnZMMkYxZEdndmRqRWlMQ0p6ZFdJaU9pSmtPR0UxWm1JNVpDMDBNMlF4TFRRM05Ea3RZV000TXkweU56TXlaREZsWWpFNVl6TWlMQ0poZFdRaU9pSmhkWFJvWlc1MGFXTmhkR1ZrSWl3aVpYaHdJam94TnpVME1UTXpNRGsxTENKcFlYUWlPakUzTlRReE1URTBPVFVzSW1WdFlXbHNJam9pYW1WaGFuVnVaekkwUUdkdFlXbHNMbU52YlNJc0luQm9iMjVsSWpvaUlpd2lZWEJ3WDIxbGRHRmtZWFJoSWpwN0luQnliM1pwWkdWeUlqb2laVzFoYVd3aUxDSndjbTkyYVdSbGNuTWlPbHNpWlcxaGFXd2lYWDBzSW5WelpYSmZiV1YwWVdSaGRHRWlPbnNpWlcxaGFXd2lPaUpxWldGcWRXNW5NalJBWjIxaGFXd3VZMjl0SWl3aVpXMWhhV3hmZG1WeWFXWnBaV1FpT25SeWRXVXNJbkJvYjI1bFgzWmxjbWxtYVdWa0lqcG1ZV3h6WlN3aWMzVmlJam9pWkRoaE5XWmlPV1F0TkROa01TMDBOelE1TFdGak9ETXRNamN6TW1ReFpXSXhPV016SW4wc0luSnZiR1VpT2lKaGRYUm9aVzUwYVdOaGRHVmtJaXdpWVdGc0lqb2lZV0ZzTVNJc0ltRnRjaUk2VzNzaWJXVjBhRzlrSWpvaWNHRnpjM2R2Y21RaUxDSjBhVzFsYzNSaGJYQWlPakUzTlRNMU56SXdOVGg5WFN3aWMyVnpjMmx2Ymw5cFpDSTZJbUpqWVRFeE16VmtMVGsyTVRRdE5HRTROUzFpTkRjd0xXTmlNall5Wm1Oa05tWXdOaUlzSW1selgyRnViMjU1Ylc5MWN5STZabUZzYzJWOS43dkZBajVNT2p5ZEx3NklSWHYyUU11NE0yMjdYZVN5cndKOG5lTnV3cW40IiwidG9rZW5fdHlwZSI6ImJlYXJlciIsImV4cGlyZXNfaW4iOjIxNjAwLCJleHBpcmVzX2F0IjoxNzU0MTMzMDk1LCJyZWZyZXNoX3Rva2VuIjoiNmd5amxrN2x5anVzIiwidXNlciI6eyJpZCI6ImQ4YTVmYjlkLTQzZDEtNDc0OS1hYzgzLTI3MzJkMWViMTljMyIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImVtYWlsIjoiamVhanVuZzI0QGdtYWlsLmNvbSIsImVtYWlsX2NvbmZpcm1lZF9hdCI6IjIwMjUtMDctMjBUMjE6MDA6NTAuNjM5OTkyWiIsInBob25lIjoiIiwiY29uZmlybWF0aW9uX3NlbnRfYXQiOiIyMDI1LTA3LTIwVDIwOjU5OjE1LjkxMTEwNloiLCJjb25maXJtZWRfYXQiOiIyMDI1LTA3LTIwVDIxOjAwOjUwLjYzOTk5MloiLCJsYXN0X3NpZ25faW5fYXQiOiIyMDI1LTA3LTI2VDIzOjIwOjU4LjU2MzIxMVoiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImplYWp1bmcyNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiJkOGE1ZmI5ZC00M2QxLTQ3NDktYWM4My0yNzMyZDFlYjE5YzMifSwiaWRlbnRpdGllcyI6W3siaWRlbnRpdHlfaWQiOiJmNDA3YWFkMC01Y2U2LTQ3NzQtOTc3MS05Zjg4MjhkMDUzZjgiLCJpZCI6ImQ4YTVmYjlkLTQzZDEtNDc0OS1hYzgzLTI3MzJkMWViMTljMyIsInVzZXJfaWQiOiJkOGE1ZmI5ZC00M2QxLTQ3NDktYWM4My0yNzMyZDFlYjE5YzMiLCJpZGVudGl0eV9kYXRhIjp7ImVtYWlsIjoiamVhanVuZzI0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImQ4YTVmYjlkLTQzZDEtNDc0OS1hYzgzLTI3MzJkMWViMTljMyJ9LCJwcm92aWRlciI6ImVtYWlsIiwibGFzdF9zaWduX2luX2F0IjoiMjAyNS0wNy0yMFQyMDo1OToxNS45MDMzNDFaIiwiY3JlYXRlZF9hdCI6IjIwMjUtMDctMjBUMjA6NTk6MTUuOTAzMzg3WiIsInVwZGF0ZWRfYXQiOiIyMDI1LTA3LTIwVDIwOjU5OjE1LjkwMzM4N1oiLCJlbWFpbCI6ImplYWp1bmcyNEBnbWFpbC5jb20ifV0sImNyZWF0ZWRfYXQiOiIyMDI1LTA3LTIwVDIwOjU5OjE1Ljg5NjcxOVoiLCJ1cGRhdGVkX2F0IjoiMjAyNS0wOC0wMlQwNToxMTozNS41MDE4MDJaIiwiaXNfYW5vbnltb3VzIjpmYWxzZX19; __stripe_sid=05538e7e-c93e-405d-8298-3d506ca7b11cc61c87; _ga_TPP1FRFRHT=GS2.1.s1754124985$o20$g1$t1754124988$j57$l0$h0; ph_phc_LRLvwlsuLuCxZe7KPEEdX0O3w2x4e1AiIhmEdaQc7aj_posthog=%7B%22distinct_id%22%3A%2201984909-f9a4-7be7-ae76-4ce95b761c29%22%2C%22%24sesid%22%3A%5B1754125136059%2C%22019869fe-ffcd-79f4-8882-aa2a1f8f26bc%22%2C1754124976066%5D%2C%22%24initial_person_info%22%3A%7B%22r%22%3A%22%24direct%22%2C%22u%22%3A%22https%3A%2F%2Fwww.chatbase.co%2Fauth%2Fsignin%3FredirectedFrom%3D%252Fdashboard%252Fjeajung24s-team%252Fchatbot%252F8aGQScyMDWRoOSlOQRSJG%252Fplayground%22%7D%7D'
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
