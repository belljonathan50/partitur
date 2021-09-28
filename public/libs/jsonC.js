(function() {
  console.log("working");

  document.addEventListener("DOMContentLoaded", function(event) 
{
      let butstop = document.getElementById("butstop");
      butstop.onclick =function() {mybutFunction()};
      function mybutFunction()    {
        vid.pause();
      ws.send("stop");  };

      let butstart = document.getElementById("butstart");
      butstart.onclick =function() {mybutStart()};
      function mybutStart()       {
        ws.send("start");         };

      let butpause = document.getElementById("butpause");
      butpause.onclick =function() {mybutPause()};
      function mybutPause()       {
      ws.send("pause");           };

      let butkill = document.getElementById("butkill");
      butkill.onclick =function() {mybutkill()};
      function mybutkill()       {
        clearTimeout(myVar)      };

        let butrepeat = document.getElementById("butrepeat");
        butrepeat.onclick =function() {mybutrepeat()};
        function mybutrepeat()       {
          var myVar = setInterval(function () {
            var now = new Date(ts.now());
            var mess = ('hit now: '+ now.getTime() +'; later: ' + ( now.getTime() + lag)  );
            console.log(mess);
            var dum = "dummy";
            ws.send(mess);
            console.log('sent dummy');
          }, 6000);
        
        };


});
}());





  manualAdjustment = 0;
  var ts = timesync.create({
    server: '/timesync',
    interval: 10000
  });
 
  ts.on('change', function (offset) {
  });
  setInterval(function () {
    var now = new Date(ts.now());
  }, 5000);







window.tomate=0;





  (function() {
    var HOST = location.origin.replace(/^http/, 'ws');
    var ws = new WebSocket(HOST);
    
    var form = document.querySelector('.form');
    let vid = document.getElementById('vid');

    
    ws.onmessage = function(msg) {

      var response = msg.data;
      var words = response.split(' ');


      var first = words[0];
      // console.log('first '+ first);
      var second = words[1];
      // console.log('second '+ second);
      var third = words[2];
      // console.log('third '+ third);
      var later = parseInt(words[4]);
      // console.log('later  '+ later);
      var last = words[words.length-1];
      // console.log('last '+ last);
      var obj = JSON.parse(last); 
      


   // always update

   switch(first) {
  case "hit":
// when
  var NowClientSide = new Date(ts.now());
  var NowClientNum = NowClientSide.getTime()
  // console.log("now " + NowClientNum+ " later " + later);
  var difference = (later - NowClientNum) + manualAdjustment;
  

  setTimeout( function() { 
    let vid = document.getElementById('vid');

    // update
        if(obj.data.isPlaying=='true'){vid.play();} else {vid.pause();};
        vid.playbackRate = obj.data.rate;
        vid.currentTime = obj.data.seek;
        let resource = vid.src.split('/').pop();
        let stateresource = obj.data.tune+'.mp4';
        if (resource != stateresource) {vid.src = '/libs/vids/s/'+ obj.data.tune +'.mp4'};
        console.log("updated " + obj.data.lag + " or "+ difference + " ms later" )
                         }, difference)
  break;

  default:
    console.log("do nothing")
} 
    };
  }());


  