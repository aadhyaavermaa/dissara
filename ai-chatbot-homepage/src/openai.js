// Load environment variables
const API_KEY = import.meta.env?.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY;

// DOM Elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

async function getAIResponse(userMessage) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant for a jewelry store called Dissara." },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return "I'm sorry, I'm having trouble connecting to the AI service.";
  }
}

// Function to add message to chat
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to show typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.id = 'typing-indicator';
  typingDiv.className = 'message bot-message';
  typingDiv.innerHTML = '<span class="typing-dot">.</span><span class="typing-dot">.</span><span class="typing-dot">.</span>';
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  return typingDiv;
}

// Function to hide typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Handle sending messages
async function sendMessage() {
  const message = userInput.value.trim();
  
  if (!message) return;
  
  // Add user message to chat
  addMessage(message, true);
  userInput.value = '';
  
  // Show typing indicator
  showTypingIndicator();
  
  try {
    // Get AI response
    const botResponse = await getAIResponse(message);
    addMessage(botResponse, false);
  } catch (error) {
    console.error('Error:', error);
    addMessage("I'm sorry, something went wrong. Please try again.", false);
  } finally {
    hideTypingIndicator();
  }
}