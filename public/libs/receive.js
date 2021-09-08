(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var form = document.querySelector('.form');


  
  ws.onmessage = function(msg) {
    var response = msg.data;
    var words = response.split(' ');
    var first = words[0];
    var seekValue = parseInt(words[1]);

    console.log(msg);
    console.log("response "+ response);
    console.log("words "+ words);
    console.log("first "+ first);
    console.log("seekValue "+ seekValue);
    console.log(typeof seekValue);
    console.log(typeof seekValue);
    console.log(typeof seekValue);
    


    switch (first) {
      case "start":
        inscore.postMessageStrStr ("/ITL/scene", "event", "START0");
        break;
      case "stop":
        inscore.postMessageStrStr ("/ITL/scene", "event", "STOP0");
        break;
      case "seek":

        var message = inscore.newMessageM ("date");
        inscore.msgAddF (message, seekValue);
        inscore.postMessage ("/ITL/scene/cursor", message); 

        // inscore.postMessageStrStr ("/ITL/scene/cursor", "date", "3");


        // /ITL/scene/cursor date 0,

        break;
      case "dummy":
        console.log("dummy");
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
