const express = require('express');
const passport = require('passport')
const app = express();
const port = process.env.PORT ||8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));// Use this after the variable declaration
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./middleware/passport')(passport)

const routes = require('./settings/routes')
routes(app)

app.listen (port,() => {
    console.log(`App listen on port ${port}`);
})