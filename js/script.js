/* GET OUR ELEMENTS */
const player = document.querySelector('.player')
const video = player.querySelector('.viewner');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const copyText = document.getElementById('copiar');
const checkbox = document.getElementById('checkbox');

const fileVideo = document.getElementById('iframefile').files[0];


const produto = document.getElementById('urlProduct');
const tempo = document.getElementById('tempo');

const result = document.getElementById('result');


checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

console.log(checkbox)


const colorInput = document.getElementById('colorPicker')
// const theColor = colorInput.value;



/* BUILD OUT FUNCTIONS */

function togglePlay() {

    const method = video.paused ? 'play' : 'pause';

    video[method]();
    
}

function toggleMute() {
    if(video.muted) {
        video.muted = false;
    }
    else {
        video.muted = true
    }
}

function updateButton() {
    const icon = this.paused ? '▶' : 'Pause';
    console.log(icon);
    toggle.textContent = icon; 
}

function skip() {
    console.log(this.dataset);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.name); 
    console.log(this.value);
    bolinhaRange.style.backgroundColor = `${colorInput.value}`
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    progressBar.style.backgroundColor = `${colorInput.value}`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
    console.log(e);
}


/* HOOK UP THE EVENT LISTENERS */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('click', toggleMute);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false)

colorInput.value(localStorage['setcolor']);
colorInput.onchange(() => {
    var colorvalue = this.value;
    localStorage.setItem('setcolor', colorvalue);

})


bolinhaRange.value(localStorage['setcolor']);
bolinhaRange.onchange(() => {
    var colorvalue = this.value;
    localStorage.setItem('setcolor', colorvalue);

})







