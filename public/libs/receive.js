(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var form = document.querySelector('.form');


  
  ws.onmessage = function(msg) {
    var response = msg.data;
    console.log("response "+ response);
    console.log(msg);



    inscore.postMessageStrStr ("/ITL/scene", "event", "START0");


  }
}());
