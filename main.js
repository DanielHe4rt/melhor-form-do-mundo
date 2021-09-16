
const userName = "Neo da Matrix";

document.getElementById('chat').addEventListener('submit', function (e) {
    e.preventDefault()

    let messageDiv = document.getElementById('message');


    let messageBox = document.getElementById('messages');
    messageBox.insertAdjacentHTML('beforeend', sendMessage(userName, messageDiv.value))

    if (messageDiv.value == '!pills') {
        let response = 'demoro lek se liga nessa vermelinha aqui q é o bicho'
        messageBox.insertAdjacentHTML('beforeend', sendMessage('Morpheus da Matrix', response))
    }    

    messageDiv.value = '';
});


function sendMessage(username, message) {
    return `<div>${username}: ${message}</div>`
}