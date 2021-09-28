const deg = 6;
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

let audio = new Audio('./clock-sounds/clock-ticking.mp3');

function audioloop (audio) {

    if (typeof audio.loop == 'boolean') {
        audio.loop = true;
    }
    
    else {
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    audio.play();
}

setInterval(() => {   
    audioloop(audio);
    let day = new Date();
    let hh = day.getHours() * 30;
    let mn = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
    min.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});