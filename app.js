var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cache = require('js-cache');
var underscore = require('underscore');

// New Code
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/blogdb');

//

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/users', users);

var data = [{
            id : "1",
            title : "Come buy! Farmer spends £2,000 converting car into a SHEEPDOG (and no, it wasn't a Rover!)",
            content : "When she began her career as a professional sheep dog Floss was impressive - the sheep responded well to her, she was faster than your average and she certainly looked good. But farmer Dave Issac has reluctantly decided to sell Floss as she is now too big to get through his farmyard gates - because she is a Peugeot estate car. Mr Issac, 46, who lives on an 180-acre farm near Battle in East Sussex, converted the family car into a working sheep dog in tribute to his dog which had recently died.",
            date : "12/01/2012"
        },
        {
            id : "2",
            title : "What will your favourite Christmas coffee do your waistline? MailOnline reveals what’s really in those festive lattes – and how going skinny might be even WORSE",
            content : "From gingerbread to eggnog, toffee nut to roasted hazelnut, lattes bursting with a flavour of Christmas tempt us each year.But rather than thinking of the delicious nectar as 'just a coffee', the hidden calories and high sugar levels lurking in your festive cup mean it should really come with a health warning. Warming and tasty though they are, the majority contain more than a person's daily recommended sugar intake in one medium-sized portion. And going skinny won't help either. In many cases, drinks made from skimmed milk contained more sugar than full fat options. Either way, drinking one every day until Christmas could see your weight creep up by half a stone, experts warn.",
            date : "07/10/2000"
        },
        {
            id : "3",
            title : "The real meaning of English word (what does 'Monday' mean?)",
            content : "The best day to do everything you had planned last week. Meams 'never' if used with the word 'next'.",
            date : "11/11/2001"
        },
        {
            id : "4",
            title : "Paulo Coelho",
            content : "'Life becomes interesting for the possibility to fulfill a dream.' ― Paulo Coelho'",
            date : '24/05/2011'
        },
        {
            id : "5",
            title : "Kissing for ten seconds passes on 80million bugs - but it keeps you healthy! Bacteria transferred helps improve immune system",
            content : "There is nothing as romantic as two lovers sharing a kiss. But scientists have come up with an evolutionary explanation which perhaps threatens to kill the passion. Academics think that kissing helps partners share bacteria, shoring up their immune systems and enabling them to better fight disease.",
            date : '24/05/2011'
        },
        {
            id : "6",
            title : "We're running out of chocolate - and it's because we're eating more than is being produced, says world's biggest confectionary firm",
            content : "They are words which will strike fear into every addict - we're running out of chocolate. That's according to the world's largest confectionary producer, which has joined Mars in warning of a massive shortfall which could reach a million tonnes a year by 2020. Switzerland's Barry Callebaut Group said soaring demand have helped chocolate prices hit more than double what they were just eight years ago.",
            date : '24/05/2011'
        },
        {
            id : "7",
            title : "How to switch keyboards in Android Lollipop",
            content : "One of the best things about Android is the way you can change core components and customize things to your liking. Keyboards are a big part of that, and there are certainly plenty of great ones to choose from in Google Play. The one thing you need to know before you can use any of them, is how to switch which keyboard is active.",
            date : '24/05/2011'
        },
        {
            id : "8",
            title : "The Plan to Map Illegal Fishing From Space",
            content : "Illicit fishing goes on every day at an industrial scale. But large commercial fishers are about to get a new set of overseers: conservationists—and soon the general public—armed with space-based reconnaissance of the global fleet.",
            date : '24/05/2011'
        },
        {
            id : "9",
            title : "Virtual reality helps boost self-confidence: Avatars could be used to treat depression and feelings of insecurity",
            content : "Many people judge themselves harshly against others. But scientists claim we could better learn to accept ourselves, and ultimately boost our self-confidence, with the help of a virtual reality 'avatar'. Experts say that receiving therapy in a virtual reality world, using a computer generated image of yourself, reduces self-criticism and boosts self-compassion and feels of contentment.",
            date : '24/05/2011'
        }];

app.post('/addPost', function(req, res) {
  data.push(req.body);
  res.send(data);
});

app.post('/removePost', function(req, res) {
  data = underscore._.reject(data, function (list) { return list.id == req.body.id });
  res.send(data);
});

app.get('/getData', function(req, res) {
  res.send(data);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
