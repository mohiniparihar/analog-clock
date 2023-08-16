// let hr = document.getElementById('hour');
// let min = document.getElementById('min');
// let sec = document.getElementById('sec');

// function displayTime(){ 
//     let date = new Date();

//     // Getting hour, mins, secs from date
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();

//     let hRotation = 30*hh + mm/2;
//     let mRotation = 6*mm;
//     let sRotation = 6*ss;

//     hr.style.transform = `rotate(${hRotation}deg)`;
//     min.style.transform = `rotate(${mRotation}deg)`;
//     sec.style.transform = `rotate(${sRotation}deg)`;

// }

// setInterval(displayTime, 1000);










function show_clock(){

    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date(); 

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    let sound = new Audio('sound2.mp3');
    sound.play();
}


setInterval(show_clock, 1000);