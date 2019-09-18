
const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')


const name = prompt('What is your name ? ')
appendMessage('You joined !\n')
socket.emit('new-user', name)

socket.on('chat-message', function(data){
    //console.log(data)
    appendMessage(`${data.name} :         ${data.message}`)
})

socket.on('user-connected', function(name){
    //console.log(data)
    appendMessage(`${name} connected`)
})

socket.on('user-disconnected', function(name){
    //console.log(data)
    appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', function(event){
    event.preventDefault()
    var message = messageInput.value
    appendMessage(`You :         ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    var messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
    
}

