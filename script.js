document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const changeGreetingBtn = document.getElementById('changeGreetingBtn');

    const greetings = [
        'Hello, World!', 
        'Bonjour, le Monde!', 
        'Hola, Mundo!', 
        'Ciao, Mondo!', 
        'こんにちは、世界！'
    ];

    let currentGreetingIndex = 0;

    changeGreetingBtn.addEventListener('click', () => {
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[currentGreetingIndex];
    });
});
