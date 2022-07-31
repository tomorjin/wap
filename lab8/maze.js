isStarted = false;

function startFunc() {
    isStarted = true;
    $('.boundary').removeClass('youlose');
    $('#status').text('The Maze game started. ;)');
}

function endFunc() {
    if (!isStarted) return;

    isStarted = false;
    $('#status').text('You win! :)');
}

function loseFunc() {
    if (!isStarted) return;

    isStarted = false;
    $('.boundary').addClass('youlose');
    $('#status').text('You lost. :(');
}

$(document).ready(function () {
    $('#end').mouseover(endFunc);
    $('#start').click(startFunc);
    $('#maze').mouseleave(loseFunc);
    $('#maze .boundary').mouseover(loseFunc);
});