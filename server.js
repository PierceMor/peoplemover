const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

//define middleware
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// server up static assets 
if (process.env.NODE_ENV === 'production' ){
    app.use(express.static('client/'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost" );

app.listen(PORT, function(){
    console.log( `API Server now listening on PORT ${PORT}!`);
});