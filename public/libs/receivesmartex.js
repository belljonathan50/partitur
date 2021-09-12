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

        case  "smartex":
          let arra = ["stand up", "sit down", "hit him", "kiss him", "run away", "cry", "lift up your leg", "sing beautifully", "make ugly noise", "lay down"];
          var INSTRUCTION = arra[second];
            r[0].innerHTML= INSTRUCTION;
            r[1].innerHTML= INSTRUCTION;
       
          break;




        case  "smart":

         

switch (second){      

  case "size":
    console.log("hi");
    console.log(third+'px');
  r[0].style.fontSize = third+'px';
  r[1].style.fontSize = third+'px';
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


let r = document.getElementsByClassName("snob");
console.log("smartsop loaded")