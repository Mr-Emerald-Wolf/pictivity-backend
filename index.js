const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
require('dotenv').config()



const app = express()

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Configure express-session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

// Initialize passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());


const db = require("./api/models");

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

const routes = require("./api/routes/index");
app.use('/', routes)

app.get('/',(req,res) =>{
   res.send({
        data: req.session
   })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});