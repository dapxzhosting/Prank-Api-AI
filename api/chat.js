export default function handler(req, res) {
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