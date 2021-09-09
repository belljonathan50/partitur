function myFunction() {
  but.onclick = function() {
    console.log("start");
    var text = "start";
    ws.send(text);
  }
}

function myFunctionX() {
  cur.onclick = function() {
    console.log("startX");
    var text = "startX";
    ws.send(text);
  }
}


function myFunctionPause() {
  butpause.onclick = function() {
    console.log("pause");
    var text = "pause";
    ws.send(text);
  }
}

function myFunctionStop() {
  butstop.onclick = function() {
    console.log("stop");
    var text = "stop";
    ws.send(text);
  }
}



function DisplayChange(value) {
  console.log("seek "+value);
  ws.send("seek "+value);
}


