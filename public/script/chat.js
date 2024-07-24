const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesArea = document.getElementById('messages');

messageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (messageInput.value) {
        socket.emit('message', messageInput.value);
        messageForm.reset();
        messageInput.focus();
    }
});

socket.on('message',(msg)=>{
    const item = document.createElement('li');
    item.textContent = msg;
    messagesArea.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});