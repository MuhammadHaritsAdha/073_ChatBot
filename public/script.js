const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

const messages = [];

function addMessage(sender, text) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    const content = document.createElement('div');
    content.textContent = text;
    message.appendChild(content);
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
    return content;
}

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    addMessage('user', message);
    messages.push({ role: 'user', content: message });
    
    userInput.value = '';
    userInput.disabled = true;
    const button = chatForm.querySelector("button");
    button.disabled = true;
    button.textContent = "Menunggu...";
});