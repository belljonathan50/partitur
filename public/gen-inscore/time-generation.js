const fs = require('fs');


for (let i = 0 ; i < 65; i++) {

    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/partitur/public/gen-inscore/times.txt', 

    "sc" + i + "start = " + i*2.5 +  " ;" + "\n" +
    "sc" + i + "end = " + (i+1)*2.5 +  " ;" + "\n" 
    , 
    function (err) {
        if (err) throw err;
      });
  }

