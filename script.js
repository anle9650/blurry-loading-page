const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Start load at 0%, increment by 1% every 30ms.
let load = 0;
let int = setInterval(blurring, 30);

// Increments load. Updates load text display and opacity on DOM.
function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;

    // Map the load percentage (0-100) to text opacity (1-0).
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // Map load percentage to background blur filter.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Maps a number from a given input range to a given output range.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}