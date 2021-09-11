(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var form = document.querySelector('.form');


  
  ws.onmessage = function(msg) {
    var response = msg.data;
    var words = response.split(' ');
    var first = words[0];
    var second = words[1];
    var third = words[2];
    var seekValue = parseInt(words[1]);
    let r = document.getElementsByClassName("snob");
    let vids = document.getElementsByClassName('snob');

    // console.log(msg);
    // console.log("response "+ response);
    // console.log("words "+ words);
    // console.log("first "+ first);
    // console.log("seekValue "+ seekValue);
    // console.log(typeof seekValue);
    // console.log(typeof seekValue);
    // console.log(typeof seekValue);
    


    switch (first) {

      case "start":
        inscore.postMessageStrStr ("/ITL/scene", "event", "START0");
        
        r[0].currentTime = 0;
        r[1].currentTime = 0;
        r[0].play();
        r[1].play();
        break;

      case "pause":
        inscore.postMessageStrStr ("/ITL/scene", "event", "STOP0");
        
        r[0].pause();
        r[1].pause();
        break;

      case "seek":
        var message = inscore.newMessageM ("date");
        inscore.msgAddF (message, seekValue);
        inscore.postMessage ("/ITL/scene/cursor", message); 
       
        r[0].currentTime = seekValue;
        r[1].currentTime = seekValue;
        break;

      case "dummy":
        console.log("dummy");
        break;

      case "startX":
        inscore.postMessageStrStr ("/ITL/scene", "event", "STARTX");
        // let r = document.getElementsByClassName("snob");
        r[0].play();
        r[1].play();
        break;

      case "stop":
        inscore.postMessageStrStr ("/ITL/scene", "event", "REWIND");
        // let r = document.getElementsByClassName("snob");
        r[0].pause();
        r[1].pause();
        r[0].currentTime = 0;
        r[1].currentTime = 0;
        break;

      case  "hit":

        var NowClientSide = new Date(ts.now());
        var forsee = words[4];
        var difference = forsee - NowClientSide;
        console.log("NowClientSIde "+ NowClientSide.getTime());
        console.log("forsee "+ forsee);
        console.log("difference "+ difference);
        setTimeout( function() {

          inscore.postMessageStrStr("/ITL/scene", "event", "STARTX");
          r[0].play();
          r[1].play();
       
        
        }, difference)
        break;




        case  "smart":

          let vids = document.getElementsByClassName('snob');


switch (second){      

  case "size":
  vids[0].width = third;
  vids[1].width = third;
  break;

  case "distance":
    console.log("hurray");
    console.log(third);
    let t = document.getElementById('interpupilary');
    t.style.width = third ;
  break;

  case "height":
    console.log("hurray");
    console.log(third);
    let x = document.getElementById('divduhaut');
    x.style.height = third;
  break;


}



          break;

        // case  "write":
        //   console.log("receive the write ");
       
        //   document.write("hello world")
        //   break;
          

    }





  }
}());



console.log("smartsop loaded")