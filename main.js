
const userName = "Neo da Matrix";

document.getElementById('chat').addEventListener('submit', function (e) {
    e.preventDefault()

    let messageDiv = document.getElementById('message');

    document.getElementById('messages').insertAdjacentHTML('beforeend', sendMessage(messageDiv.value))

    messageDiv.value = '';
});


function sendMessage(message) {
    return `<div>${userName}: ${message}</div>`
}