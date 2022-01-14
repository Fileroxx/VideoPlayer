/* GET OUR ELEMENTS */
const player = document.querySelector('.player')
const video = player.querySelector('.viewner');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const copyText = document.getElementById('copiar')
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

console.log(checkbox)


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
    
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
 
function scrub(e) {
    const scrubTime = (e.offSetX / progress.offsetWidth)
    console.log(e);
}


function copiarElemento() {
   

    copyText.select();
    copyText.setSelectionRage(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text:" + copyText.value)

}


/* HOOK UP THE EVENT LISTENERS */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('click', toggleMute)

copyElement.addEventListener('click', copiarElemento)

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);

