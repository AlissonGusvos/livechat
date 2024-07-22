const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesLabel = document.getElementById('messages');

messageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (messageInput.value) {
        socket.emit('chat message', messageInput.value);
        messageInput = " ";
    }
});

socket.on('chat message',(msg)=>{
    const item = document.createElement('li');
    item.textContent = msg;
    messagesLabel.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});