const express = require('express');
const path = require('path');
const app = express();
const config = require('./config/config');
//server static files
app.use(express.static(path.join(__dirname + "public")));

//Allow cross origin
app.use(function(req, res, next){
res.header("Access-Control-Allow-Origin", "*");

res.header("Access-Control-Allow-Headers", "Örigin, X-Requested-With, Content-Type, Accept" );
next();
});

require('./routes/route')(app);


var server = app.listen(config.server.port,config.server.host, ()=> {
    console.log("we are live at %s ", server.address().port);
})

