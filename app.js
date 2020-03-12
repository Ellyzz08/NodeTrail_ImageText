/*jslint node: true */
/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: 0*/

"use strict";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();



app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 8080);



app.use(bodyParser.urlencoded({
    extended: false
}));



//Homepage
app.get('/', function (req, res) {
    res.render('livemessage');
});



//testImage - test upload image, add text, save as png
app.get('/livechat', function (req, res) {
    res.render('livechat');
});

app.get('/livemessage', function (req, res) {
    res.render('livemessage');
});


app.get('/notifications', function (req, res) {
    res.render('notifications');
});


app.get('/facebook', function (req, res) {
    res.render('facebook');
});

app.get('/instagram-post', function (req, res) {
    res.render('instagramPost');
});

app.get('/instagram-profile', function (req, res) {
    res.render('instagramProfile');
});


app.get('/email', function (req, res) {
    res.render('email');
});



app.listen(app.get('port'), function () {
    console.log('listen on port 8080');
});

var pages = {
    'facebook': {
        mainFile: 'facebook',
        settingFile: 'settings/facebookSettings',
        displayFile: 'displays/facebookDisplay'
    }
}

var findPageByPagename = function (pagename, callback) {
    // Perform database query that calls callback when it's done
    // This is our fake database
    if (!pages[pagename])
        return callback(new Error(
            'No page found ' +
            pagename
        ));
    return callback(null, pages[pagename]);
};