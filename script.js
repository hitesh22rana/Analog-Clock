const deg = 6;
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

let audio = document.getElementById('tick-tick');
let resp = audio.play();
audiofixed(resp);

setInterval(() => {   
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mn = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    audioloop(audio);

    hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
    min.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});


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
    resp = audio.play();   
    audiofixed(resp);
}

function audiofixed(resp) {
    if (resp!== undefined) {
        resp.then(_ => {
            // autoplay starts!
        }).catch(error => {
        //show error
        });
    }
}