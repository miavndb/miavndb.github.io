let spelerNaam = "";
let startTime;
let timerInterval;

function beginSpel() {
    spelerNaam = document.getElementById('userName').value;
    if (spelerNaam === "") {
        alert("Vul je naam in om verder te gaan!");
        return;
    }
    document.getElementById('naamLevel').classList.remove('active');
    gaNaarLevel(1);
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('timer').style.display = 'block';
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = `Tijd: ${elapsedTime}s`;
}

function gaNaarLevel(levelNummer) {
    const levels = document.querySelectorAll('.level');
    levels.forEach(level => level.classList.remove('active'));
    if (levelNummer === 99) {
        clearInterval(timerInterval);
        document.getElementById('timer').style.display = 'none';
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('congratsMessage').textContent = `Gefeliciteerd, ${spelerNaam}!`;
        document.getElementById('finalTime').textContent = `Je hebt het spel voltooid in ${elapsedTime} seconden.`;
    }
    const volgendLevel = document.getElementById(levelNummer === 99 ? 'eindLevel' : `level${levelNummer}`);
    volgendLevel.classList.add('active');
}

function voltooiOpdrachtLevel2() {
    document.getElementById('taskButton').style.display = 'none';
    document.getElementById('level3Button').style.display = 'block';
}

function controleerCodeLevel3() {
    const input = document.getElementById('codeInput').value;
    if (input === '12345') {
        gaNaarLevel(4);
    } else {
        document.getElementById('codeFeedback').style.display = 'block';
        setTimeout(() => document.getElementById('codeFeedback').style.display = 'none', 2000);
    }
}

function startMovingButton() {
    const button = document.getElementById('movingButton');
    setInterval(() => {
        button.style.position = 'absolute';
        button.style.left = `${Math.random() * 90}%`;
        button.style.top = `${Math.random() * 90}%`;
    }, 1000);
    button.onclick = () => {
        gaNaarLevel(99);
    };
}
document.addEventListener('DOMContentLoaded', startMovingButton);

function herstartSpel() {
    clearInterval(timerInterval);
    document.getElementById('taskButton').style.display = 'inline-block';
    document.getElementById('level3Button').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('userName').value = "";
    document.getElementById('codeInput').value = "";
    spelerNaam = "";
    const levels = document.querySelectorAll('.level');
    levels.forEach(level => level.classList.remove('active'));
    document.getElementById('naamLevel').classList.add('active');
    document.getElementById('timer').textContent = 'Tijd: 0s';
}