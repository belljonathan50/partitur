function myFunction() {
  bubu.onclick = function() {
    console.log("start");
    var text = "start";
    ws.send(text);
  }
}


function myFunction2() {
  toto.onclick = function() {
    console.log("stop");
    var text = "stop";
    ws.send(text);
  }
}



function DisplayChange(value) {
  console.log("seek "+value);
  ws.send("seek "+value);
}


