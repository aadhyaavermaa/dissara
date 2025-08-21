async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message.trim()) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  input.value = "";

  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    // Fallback if data.reply is undefined
    const botReply = data.reply ? data.reply : getBotResponse(message);
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (error) {
    // Fallback to local response if server error
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${getBotResponse(message)}</div>`;
  }
}

function getBotResponse(message) {
  message = message.toLowerCase();
  if (message.includes('diamond cut')) {
    return 'Diamond cut refers to how well a diamond has been shaped and faceted. It affects the diamond\'s brilliance and sparkle.';
  }
  if (message.includes('hello')) {
    return 'Hello! How can I help you today?';
  }
  if (message.includes('price')) {
    return 'Please specify which jewelry item you want the price for.';
  }
  // Add more responses as needed
  return 'Sorry, I did not understand. Can you please rephrase?';
}

// 👇 Add this so that `sendMessage` is available globally
window.sendMessage = sendMessage;
