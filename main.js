const beats = document.querySelectorAll('.drum-pad');
const audios = document.querySelectorAll('audio');
const range = document.querySelector('.slider');
const display = document.getElementById('display');
const power = document.querySelector('.power-btn');
let on=true;

function removeTransition(e){
    if(e.propertyName !== 'transform')return; // stop it if property is not a transform
    this.classList.remove('active-key')
}

function playclick(){
    if(!on)return;
    
    const audio = document.querySelector(`audio[data-key="${this.attributes[2].value}"]`);
    
    audio.currentTime=0;
    audio.play();
    
    this.classList.add('active-key')
    display.value=this.attributes[0].value.
                                        toUpperCase();

    function volAudio(e){
        audio.volume= e.target.value
    }

    range.addEventListener("change",volAudio);
}

function playKey(e){
    if(!on)return;
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
    
    if(!audio)return;
    audio.currentTime=0;
    audio.play();

    key.classList.add('active-key');

    display.value=key.attributes[0].value.
                                        toUpperCase();

    function volAudio(e){
        audio.volume= e.target.value
    }

    range.addEventListener("change",volAudio);
}

function powerDM(e){
    on=!on
    this.classList.toggle('active');
}

window.addEventListener('keydown',playKey);
beats.forEach(beat => beat.addEventListener("click", playclick));
beats.forEach(beat => beat.addEventListener('transitionend',removeTransition));
power.addEventListener("click",powerDM);