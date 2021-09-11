(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var form = document.querySelector('.form');


  
  ws.onmessage = function(msg) {
    var response = msg.data;
    var words = response.split(' ');
    var first = words[0];
    var paramValue = words[1];


    


    switch (first) {

      case "write":

        function add() {
          var node = document.createElement("LI");
          var textnode = document.createTextNode("Water");
          node.appendChild(textnode);
          document.getElementById("adding").appendChild(node);
        }  ;
        add();
      


        break;
    }





  }
}());
