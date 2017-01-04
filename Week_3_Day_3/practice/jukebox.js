function Sound(name, url){ // sound objects have name, url, audio
  this.name = name;
  this.url = url;
  this.audioElement = new Audio(src=url);
}

function Jukebox(){

  this.soundList = []; // collection of sound objects
  
  this.addSound = function(sound){ // add song to collection
    this.soundList.push(sound);
  };

  this.play = function(soundName){ 
    $(this.soundList).each(function(){
      if (this.name == soundName){ // play if not playing, else pause
        if (this.audioElement.paused == true){
          this.audioElement.play();
        } else {
          this.audioElement.pause();
        }
      } 
    });
  };

  this.stop = function(soundName, volume){ // stop (and reset) audio
    $(this.soundList).each(function(){
      if (this.name == soundName){
        this.audioElement.load();
      } 
    });
  };

  this.isPaused = function(soundName){ // return pause state
    var paused = false;
    $(this.soundList).each(function(){
      if (this.name == soundName){
        paused = this.audioElement.paused;
        return false;
        } 
    });
    return paused;
  };

  this.volumeUp = function(soundName, volume){ // increment volume
    $(this.soundList).each(function(){
      if (this.name == soundName){
        if (this.audioElement.volume < 0.9){ // limit ceiling to avoid exceptions
          this.audioElement.volume += 0.1;
        } else {
          this.audioElement.volume = 1.0;
        }
      } 
    });
  };

  this.volumeDown = function(soundName, volume){ // decrement volume
    $(this.soundList).each(function(){
      if (this.name == soundName){
        if (this.audioElement.volume > 0.1){ // limit floor to avoid exceptions
          this.audioElement.volume -= 0.1;
        } else {
          this.audioElement.volume = 0;
        }
      } 
    });
  };
  
  this.setVolume = function(soundName, volume){ // set volume explicitly
    $(this.soundList).each(function(){
      if (this.name == soundName){
        this.audioElement.volume = volume;
      } 
    });
  };

  this.getVolume = function(soundName){ // return current volume
    var currentVolume = false;
    $(this.soundList).each(function(){
      if (this.name == soundName){
        currentVolume = this.audioElement.volume;
        return false;
      } 
    });
    return currentVolume;
  };

  this.toggleLoop = function(soundName, loop){ // set looping/repeating, loop argument is boolean
    $(this.soundList).each(function(){
      if (this.name == soundName){
        this.audioElement.loop = loop;
      } 
    });
  };

  this.playAll = function(){ // cycle through all sounds and play
    $(this.soundList).each(function(){
      this.audioElement.play();
    });
  };

  this.pauseAll = function(){ // cycle through all sounds and pause
    $(this.soundList).each(function(){
      this.audioElement.pause();
    });
  };

  this.stopAll = function(){ // cycle through all sounds and stop/reload
    $(this.soundList).each(function(){
      this.audioElement.load();
    });
  };

  this.randomize = function(){
    $(this.soundList).each(function(){
      // randomize volumes of all sounds
      this.audioElement.volume = Math.random();
      // play a random subset of sounds 
      var randomBoolean = Math.random() < 0.5;
      if(randomBoolean){
        this.audioElement.play();
      }
    });
  };
    
}