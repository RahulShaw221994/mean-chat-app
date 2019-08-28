const socket = io();

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated:', count);
// });

// document.querySelector('#increment').addEventListener('click', () => {
//     socket.emit('increment');
//     console.log('clicked');
// });
socket.on('message', (message) => {
    console.log(message);
})