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

$.ajax({
   method: "GET",   
   url: "https://api.spotify.com/v1/search", 
   data: { 
       type: "track", 
       q: "Collective Soul Listen" 
   },
   success: function(response){  
     spotifyResponse = response; 
     console.log(response);  
   }
});

$.ajax({
   method: "GET", 
   url: "https://api.spotify.com/v1/search", 
   data: { 
       type: "track", 
       q: "Don Henly The Heart of The Matter" 
   },
   success: function(response){ 
     spotifyResponse = response; 
     console.log(response);  
   }
});

$.ajax({
   method: "GET", 
   url: "https://api.spotify.com/v1/search", 
   data: { 
       type: "track", 
       q: "Billy Joel Pressure" 
   },
   success: function(response){ 
     spotifyResponse = response; 
     console.log(response);   
   }
});
