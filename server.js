const express     = require('express');
var timesyncServer = require('timesync/server');
const app         = express();
// const Max = require("max-api");


const router = express.Router();
const path = require('path');




const expressWs   = require('express-ws')(app);
const morgan      = require('morgan');
const compression = require('compression');
const serveStatic = require('serve-static');
const basicAuth   = require('basic-auth-connect');

const user = process.env.USER;
const pass = process.env.PASS;

let connects = [];

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(basicAuth(user, pass));
}


app.use(morgan('dev'));
app.use(compression());
// app.use(serveStatic(`${__dirname}/public`));



app.use(express.static(path.join(__dirname, 'public')));

var publicPath = path.join(__dirname, 'public');


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});


app.get('/new', function (req, res) {
    res.sendfile(publicPath + '/new.html');
});

app.get('/mezzo', function (req, res) {
    res.sendfile(publicPath + '/mezzo.html');
});

app.get('/sop', function (req, res) {
    res.sendfile(publicPath + '/sop.html');
});

app.get('/inscore3', function (req, res) {
    res.sendfile(publicPath + '/index3.html');
});

app.get('/tenor', function (req, res) {
    res.sendfile(publicPath + '/tenor.html');
});

app.get('/inscore1', function (req, res) {
    res.sendfile(publicPath + '/inscore1.html');
});

app.get('/bass', function (req, res) {
  res.sendfile(publicPath + '/bass.html');
});

app.get('/baba', function (req, res) {
  res.sendfile(publicPath + '/baba.html');
});

app.get('/banana', function (req, res) {
  res.sendfile(publicPath + '/banana.html');
});

app.get('/ideas', function (req, res) {
  res.sendfile(publicPath + '/ideas.html');
});

app.get('/ar', function (req, res) {
  res.sendfile(publicPath + '/ar.html');
});

app.get('/leducmus', function (req, res) {
  res.sendfile(publicPath + '/leducmus.html');
});

app.get('/dos', function (req, res) {
  res.sendfile(publicPath + '/dos.html');
});

app.get('/controlvid', function (req, res) {
  res.sendfile(publicPath + '/controlvid.html');
});


app.get('/vid', function (req, res) {
  res.sendfile(publicPath + '/vid.html');
});

app.get('/sound', function (req, res) {
  res.sendfile(publicPath + '/sound.html');
});

app.get('/smartsop', function (req, res) {
  res.sendfile(publicPath + '/smartsop.html');
});

app.get('/smartex', function (req, res) {
  res.sendfile(publicPath + '/smartex.html');
});

app.get('/smartimg', function (req, res) {
  res.sendfile(publicPath + '/smartimg.html');
});

app.get('/smartvid', function (req, res) {
  res.sendfile(publicPath + '/smartvid.html');
});

app.get('/smartex', function (req, res) {
  res.sendfile(publicPath + '/smartex.html');
});


app.get('/conductor', function (req, res) {
  res.sendfile(publicPath + '/conductor.html');
});

app.get('/controller', function (req, res) {
  res.sendfile(publicPath + '/controller.html');
});

// app.use('/static', express.static(path.join(__dirname, 'public')))

app.ws('/', (ws, req) => {
  connects.push(ws);

  ws.on('message', message => {
    console.log('Received -', message);
    
    connects.forEach(socket => {
      socket.send(message);
    });
  });
  
  ws.on('close', () => {
    connects = connects.filter(conn => {
      return (conn === ws) ? false : true;
    });
  });
});




// router.ws('/echo', function(ws, req) {
//   ws.on('message', function(msg) {
//     ws.send(msg);
//     ws.send(msg);
//     ws.send(msg);
//   });
// });

app.use("/ws-stuff", router);




// const sender = function (a, b, c) {
//     ws.send(JSON.stringify({
//       "value_1": a,
//       "value_2": b,
//       "value_3": c
//     }));
//   };

  // Handle the Max interactions here...



// Max.addHandler("send", (...args) => {
//     console.log("send args: " + args);
//     if (args.length === 3) {
//       sender(args[0], args[1], args[2]);
//     }
//   });

// Max.addHandler("seek", (args) => {
//     console.log("send args: " + args);
    
//      console.log(args);
//      const stringifie =   String(args);
//      console.log(stringifie);
    
//     connects.forEach(socket => {
//       socket.send(stringifie);
      
//     });

//   });


// Max.addHandler("seek", (args) => {
//     console.log("send args: " + args);
//      console.log("rate " + args);
//      const stringifie =   String(args);
//      console.log(stringifie);
//     connects.forEach(socket => {
//       socket.send(stringifie);
//     });
//   });




  // Max.addHandler("msg", (args) => {
  //   console.log("temporal args: " + args);
  //   console.log("hi");
  //   //  ts.now();
    
  //    console.log("what's the time " + args);
  //    const stringifie =   String(args);
  //    console.log("as a string, and sent over socket " +stringifie);
  //   connects.forEach(socket => {
  //     socket.send(stringifie);
  //   });
  // });


  app.use('/timesync', timesyncServer.requestHandler);


app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'));
});


