// This file contains the JavaScript code that handles the chatbot's functionality, including sending and receiving messages.

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage('User', message);
        userInput.value = '';
        getBotResponse(message);
    }
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender.toLowerCase());
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    // Simulate a bot response for demonstration purposes
    const botResponse = `You said: ${userMessage}`;
    setTimeout(() => {
        displayMessage('AI', botResponse);
    }, 1000);
}