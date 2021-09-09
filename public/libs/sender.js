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

function myDelayedFunction() {
  delbut.onclick = function() {

    var now = new Date(ts.now());
    var mess = ('hit now: '+ now.getTime() +'; later: ' + ( now.getTime() + 2000 )  );
    console.log(mess);
    ws.send(mess);
   
   
    // ws.send(mess);
  }
}



function SeekChange(value) {
  console.log("seek "+value);
  ws.send("seek "+value);
}

function DelayPlay(value) {
  var latency = value;
  console.log("DelayPlay "+value);
  ws.send("DelayPlay "+value);
}


