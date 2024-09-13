let isPlaying = false;
const audio = new Audio('https://your-radio-stream-url');

function toggleRadio() {
    const button = document.getElementById('radioButton');

    if (isPlaying) {
        audio.pause();
        button.classList.remove('pulse');
        button.classList.remove('playing');
    } else {
        audio.play();
        button.classList.add('pulse');
        button.classList.add('playing');
    }

    isPlaying = !isPlaying;
}