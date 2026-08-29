export default function handler(req, res) {
  const auth = req.headers['authorization'] || '';
  const apiKey = auth.replace('Bearer ', '');

  if (apiKey !== 'dapxz-ai-2913913') {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  return res.status(200).json({
    id: "chatcmpl-prank",
    object: "chat.completion",
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content: "WKWK KENA PRANK 🤡"
        },
        finish_reason: "stop"
      }
    ],
    content: [
      { type: "text", text: "WKWK KENA PRANK 🤡" }
    ],
    response: "WKWK KENA PRANK 🤡"
  });
}