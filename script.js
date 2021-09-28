const deg = 6;
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mn = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
    min.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});
