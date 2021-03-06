const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      data = require('./controllers/dataController'),
      mongoose = require('mongoose'),
      port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;

app.set('port',port);
app.use('/', express.static('./public'));//for API
app.use(
    (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept");
    res.set("Content-Type", "application/json");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',
  (req,res)=>{
    console.log('home page');
  });

app.post('/login',
    (req,res) =>{
      console.log('path found');
      let succ = new Promise((resolve,reject)=>{ 
      if(true)
      {
        resolve(data.login(req.body.id));
      }else{
        reject('error');
      }
    });

    succ.then((fromResolve)=>{
      res.status(200).json(fromResolve);
    }).catch((fromReject)=>{
      res.status(200).json(fromReject);
    });  
});
app.get('/songs',
    (req,res) =>{
      console.log('path found');
      let succ = new Promise((resolve,reject)=>{ 
      if(true)
      {
        resolve(data.getAllSongs());
      }else{
        reject('error');
      }
    });

    succ.then((fromResolve)=>{
      res.status(200).json(fromResolve);
    }).catch((fromReject)=>{
      res.status(200).json(fromReject);
    });  
});
app.get('/albums',
    (req,res) =>{
      console.log('path found');
      let succ = new Promise((resolve,reject)=>{ 
      if(true)
      {
        resolve(data.getAllAlbums());
      }else{
        reject('error');
      }
    });

    succ.then((fromResolve)=>{
      res.status(200).json(fromResolve);
    }).catch((fromReject)=>{
      res.status(200).json(fromReject);
    });  
});
app.post('/addSongs',
    (req,res) =>{
      console.log('path found');
      let succ = new Promise((resolve,reject)=>{ 
      if(true)
      {
        resolve(data.addSong(req.body.id,req.body.addSongId));
      }else{
        reject('error');
      }
    });

    succ.then((fromResolve)=>{
      res.status(200).json(fromResolve);
    }).catch((fromReject)=>{
      res.status(200).json(fromReject);
    });  
});
app.post('/removeSongs',
    (req,res) =>{
      console.log('path found');
      let succ = new Promise((resolve,reject)=>{ 
      if(true)
      {
        resolve(data.removeSong(req.body.id,req.body.removeSongId));
      }else{
        reject('error');
      }
    });

    succ.then((fromResolve)=>{
      res.status(200).json(fromResolve);
    }).catch((fromReject)=>{
      res.status(200).json(fromReject);
    });  
});
app.all('*',
    (req,res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });
app.listen(port,
() => {
console.log(`listening on port ${port}`);
console.log("url error"+ app.url);
});