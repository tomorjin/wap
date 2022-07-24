window.onload = function () {
    'use strict';
    let timer;
    let delay = 250;
    let currentAnimation = 'blank';

    function getElement(id) {
        return document.getElementById(id);
    }

    function startAnimation() {
        var textarea = getElement('animation-player');
        const anim = ANIMATIONS[currentAnimation].split('=====\n');
        let count = 0;
        timer = setInterval(() => {
            if (count === anim.length) {
                count = 0;
            }
            textarea.value = anim[count];
            count++;
        }, delay);
        getElement('btn-play').disabled = true;
        getElement('animation').disabled = true;
        getElement('btn-stop').disabled = false;
    }

    function stopAnimation() {
        if (timer) {
            clearInterval(timer);
            getElement('btn-play').disabled = false;
            getElement('btn-stop').disabled = true;
            getElement('animation').disabled = false;
        }
    }

    function onChangeAnimation(e) {
        getElement('animation-player').value = ANIMATIONS[e.currentTarget.value];
        currentAnimation = e.currentTarget.value;
    }

    function onSizeChange(e) {
        getElement('animation-player').style.fontSize =
            e.currentTarget.value + 'pt';
    }

    function onSpeedChange() {
        if (getElement('speed').checked == true) {
            delay = 50;
        } else {
            delay = 250;
        }
        stopAnimation();
        startAnimation();
    }

    getElement('btn-play').onclick = startAnimation;
    getElement('btn-stop').onclick = stopAnimation;
    getElement('animation').onchange = onChangeAnimation;
    getElement('size').onchange = onSizeChange;
    getElement('speed').onchange = onSpeedChange;
};
