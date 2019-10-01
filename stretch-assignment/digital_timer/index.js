const secondTenEl = document.getElementById('secondTens');
const secondOneEl = document.getElementById('secondOnes');
const msHundredEl = document.getElementById('msHundreds');
const msTenEl = document.getElementById('msTens');
const colonEl = document.getElementById('colon');

let tenthMilliseconds = 0;
let hundredthMillisecond = 0;
let oneSecond = 0;
let tenSecond = 0;
let timesRun = 0;

let timer = setInterval(() => {
    // Tenth millisecond
    tenthMilliseconds++
    msTenEl.textContent = tenthMilliseconds;
    if (tenthMilliseconds == 10) {
        tenthMilliseconds = 0;
        msTenEl.textContent = 0;
        hundredthMillisecond++;
        msHundredEl.textContent = hundredthMillisecond;
    }

    // Hundredth millisecond
    if (hundredthMillisecond == 10) {
        hundredthMillisecond = 0;
        msHundredEl.textContent = 0;
        oneSecond++;
        secondOneEl.textContent = oneSecond;
    }

    // Seconds
    secondOneEl.textContent = oneSecond; // preset to zero in dom
    secondTenEl.textContent = tenSecond; // preset to zero in dom
    if(oneSecond == 10 ) {
        oneSecond = 0;
        secondOneEl.textContent = 0;
        tenSecond++;
        secondTenEl.textContent = tenSecond;
        timesRun += 1;
    }

    if(tenSecond) {
        clearTimeout(timer);
        secondTenEl.style.color = 'red';
        secondOneEl.style.color = 'red';
        msHundredEl.style.color = 'red';
        msTenEl.style.color = 'red';
        colonEl.style.color = 'red';
    }
}, 10);