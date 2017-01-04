$(document).ready(function(){
    $('#song1link').on('click', function(){
        if(document.getElementById('song1').paused) {
        } 
        else {
        }
    });
    });

function playOrStop(audioElement){
    var audio = document.getElementsByTagName('audio');
    for (i = 0; i < audio.length; i++) {
        if(audioElement != audio[i]){
            audio[i].pause();
        }
    }
    if(audioElement.paused){
        audioElement.play();
    } else {
        audioElement.pause();
    }
}