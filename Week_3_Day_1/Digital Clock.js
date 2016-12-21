function refreshData(){
   x = 1;  
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    if (h<=9) {h = '0'+h}
    if (s<=9) {s = '0'+s}
    if (m<=9) {m = '0'+m}
    
    var    color = '#'+h+m+s;
    
   $("div.background").css("background-color", color );
   $("p#hex").text(color);
    
   setTimeout(refreshData, x*500);
}
 
refreshData();