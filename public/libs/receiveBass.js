(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var form = document.querySelector('.form');


  
  ws.onmessage = function(msg) {
    var response = msg.data;
    console.log("response "+ response);
    console.log(msg);


    switch (response) {
      case "start":
        inscore.postMessageStrStr ("/ITL/scene", "event", "START0");
        break;
      case "stop":
        inscore.postMessageStrStr ("/ITL/scene", "event", "STOP0");
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
    }





  }
}());
