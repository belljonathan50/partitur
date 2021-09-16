const fs = require('fs');


for (let i = 0 ; i < 10; i++) {

    fs.appendFileSync('/Users/jonathanbell/Documents/GitHub/partitur/public/gen-inscore/dates-n-durs.txt', 

    "/ITL/scene/sc" + i + " date $sc" + i + "start ;" + "\n" +
    "/ITL/scene/sc" + i + " duration $sc" + i + "duree ;" + "\n" + "\n"
    , 
    function (err) {
        if (err) throw err;
      });
  }




 /*   modele

/ITL/scene/sc0 date 	$sc0start;
/ITL/scene/sc0 duration $sc0duree;

 */