var sayHello = require('./sayHello.js');

window.addEventListener('load', () => setWelcomeMessage());

let setWelcomeMessage = () => {
    document.getElementById('welcome-message').innerHTML = sayHello.greet('WebPack!');
};
