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
        vid.play();
        ws.send("start"); 
                                  };

      let butpause = document.getElementById("butpause");
      butpause.onclick =function() {mybutPause()};
      function mybutPause()       {
      ws.send("pause"); };

      

    //   let seekput = document.getElementById("seekslide");
    //   seekput.oninput =function() {mySeek()};
    //   function mySeek()       {
    //   ws.send("seek "+ this.value);
    //   console.log(seektime)
    // }

                                  



});




  
  
  

  

}());


