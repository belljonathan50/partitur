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

        case  "smartax":
          console.log(second);
          let arra = ["<div id='mym'> <h1>hddhh</h1> <h1>hddhh</h1>  <h1>hddhh</h1> </div>",
           "<video id='mym' class='snob' width='140px' src='tata.mp4' controls></video>",
            "<div id='mym'><video  class='snob' width='140px' src='tata.mp4' controls></video><video  class='snob' width='140px' src='tata.mp4' controls></video></div>",
            "<div id='mym'> <iframe height='100%' width='100%' id='prism3d' title='Inline Frame Example2' z-index='-1' src='https://score.jonathanbell.eu/tenor-test/prism/index.html' style='opacity: 1; width=100%; height=100%'></iframe></div>",
              "<div id='mym'> <iframe height='40%' width='40%' id='prism3d' title='Inline Frame Example2' z-index='-1' src='https://score.jonathanbell.eu/tenor-test/prism/index.html' style='opacity: 1; display:inline-block;'></iframe> <iframe height='40%' width='40%' id='prism3d' title='Inline Frame Example2' z-index='-1' src='https://score.jonathanbell.eu/tenor-test/prism/index.html' style='opacity: 1; display:inline-block;'></iframe></div>",
               "  <div id='mym'>  <a-scene height='40%' width='40%' ><a-box position='-1 0.5 -3' rotation='0 45 0' color='#4CC3D9'></a-box></a-scene></div>",
                "<div id='mym'>  <a-scene height='40%' width='40%' ><a-box position='-1 0.5 -3' rotation='0 45 0' color='#4CC3D9'></a-box></a-scene><a-scene><a-box position='-1 0.5 -3' rotation='0 45 0' color='#4CC3D9'></a-box></a-scene></div>",
                 "<div id='mym'>     <iframe src='http://localhost:3000/smart3D.html' height='200' width='300' ></iframe> <iframe src='http://localhost:3000/smart3D.html' height='200' width='300' ></iframe>   </div>",
                "<div id='mym'> <iframe id='viewer' name='viewer' allow='fullscreen; xr-spatial-tracking;' src='webgl_animation_skinning_morph.html' style='display: unset;'></iframe> </div>"
                
                
                
                
                ];
          var INSTRUCTION = arra[second];
          let aziz = document.getElementById("mym");
          console.log(second);
          console.log("element "+aziz);
          console.log("array[var] "+arra[second]);
          console.log("string of array[var] "+String(arra[second]));
          
          // aziz.outerHTML= String(arra[1]);


          aziz.outerHTML= arra[second];
          //   r[1].outerHTML= INSTRUCTION;
       
          break;




        case  "smart":

         

switch (second){      

  case "size":
    console.log("hi");
    console.log(third+'px');
  r[0].style.fontSize = third+'px';
  r[1].style.fontSize = third+'px';
  break;



  case "height":
    console.log("hurray");
    console.log(third);
    let x = document.getElementById('divduhaut');
    x.style.height = third;
  break;

  case "distance":
    console.log("hurray");
    console.log(third);
    let t = document.getElementById('interpupilary');
    t.style.width = third ;
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


