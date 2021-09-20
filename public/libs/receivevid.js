(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var form = document.querySelector('.form');

  var vid = document.getElementById('vid');


  
  ws.onmessage = function(msg) {
    var response = msg.data;
    console.log('everybody '+ response);
    var words = response.split(' ');
    var first = words[0];
    var myValue = parseInt(words[1]);
    var myFloat = parseFloat(words[1]);
    var vid = document.getElementById('vid');

    switch (first) {
      
      case "start":
        vid.currentTime = 0;
        vid.play();
        break;

      case "pause":
        vid.pause();
        break;

      case "seek":
        vid.currentTime = myValue;
        break;

      case "dummy":
        console.log("dummy");
        break;

      case "startX":
        vid.play();
        break;

      case "rate":
        console.log("haaaaaaaa"+myFloat);
        console.log(typeof myFloat);
        vid.playbackRate = myFloat;

        break;

      case "stop":
        vid.pause();
        vid.currentTime = 0;
        break;

      case  "hit":
        var NowClientSide = new Date(ts.now());
        var forsee = words[4];
        var difference = forsee - NowClientSide;
        console.log("NowClientSIde "+ NowClientSide.getTime());
        console.log("forsee "+ forsee);
        console.log("difference "+ difference);
        setTimeout( function() { vid.play(); }, difference)
        break;

        // case  "write":
        //   console.log("receive the write ");
       
        //   document.write("hello world")
        //   break;
          

    }





  }
}());
