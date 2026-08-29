export default function handler(req, res) {
  if (req.method !== "POST" || !req.body || !req.body.messages) {
    return res.status(200).json({
      status: "ok",
      message: "API is running"
    });
  }

  return res.status(200).json({
    id: "chatcmpl-" + Date.now(),
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