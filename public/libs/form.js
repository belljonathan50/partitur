(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var bubu = document.getElementById("but");

  // bubu.onclick = function() {
  //   console.log("zaza")
  // }
  
  ws.onmessage = function(msg) {
    var response = msg.data;

    console.log(response);
    var myVideo = document.getElementById("video1"); 
    myVideo.currentTime = response;

// function settime(toto) { 
// myVideo.currentTime = toto} ;
// settime(response)






  }
}());
