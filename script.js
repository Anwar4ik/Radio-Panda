let isPlaying = false;
const audio = new Audio('https://stream.zeno.fm/zzr7db0h0iquv');

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
