// tady je místo pro náš program

function priNajeti() {
    let tucnyOdstavec;
    tucnyOdstavec = document.querySelector('.odstavec');
    tucnyOdstavec.classList.add('ztucneno');
}

function barevnyKlik() {
    let cervenePismo = document.querySelector('.odstavec');
    cervenePismo.classList.toggle('cervena');
}

function zvetsenyKlik(event) {
    console.log(event)
    style = window.getComputedStyle(odstavec, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    odstavec.style.fontSize = (currentSize + 1) + "px";
}

let prehravac = document.querySelector('.mujPrehravac');
let count = 0;
   
    function pauzniAudio() {
        if(count == 0){
            count = 1;
            mujPrehravac.play();
        }else{
            count = 0;
            mujPrehravac.pause();
        }
    }

    function resetniAudio() {
        prehravac.currentTime = 0;
    }

    function pridejVolume() {
        var curVolume = document.getElementById('mujPrehravac').volume;
            if (curVolume > 0.5) {
                curVolume = 0.5;
            } else if (curVolume > 0) {
                curVolume = 0;
            }else {
                curVolume = 1;
            }
document.getElementById('mujPrehravac').volume = curVolume;
}