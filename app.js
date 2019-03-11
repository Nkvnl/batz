var express = require("express"); // call express
var app = express();
var mongoose = require('mongoose')
var Gallerij = require('./models/gallerij')

mongoose.connect('mongodb://niek1:batz11@ds235053.mlab.com:35053/batz');
app.set('port', (process.env.PORT || 3003))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res) {
    res.render("index");
});

app.get('/gallerij', function(req, res) {
    Gallerij.find(function(err, gallerij) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(gallerij.length)
            var maxObjects = gallerij.length / 3; //50 //33
            console.log(maxObjects)
            //150               //50
            //100               //50    //100
            if (gallerij.length > maxObjects * 2) {
                var row1 = (gallerij.splice(0, maxObjects)) // 50
                // console.log(gallerij.splice(0, maxObjects)) // 50
                console.log(gallerij.length)
                console.log('row1')
            } // 100                    //50
            if (gallerij.length > maxObjects) {
                var row2 = (gallerij.splice(0, maxObjects))
                // console.log(gallerij.splice(0, maxObjects))
                console.log(gallerij.length) // console.log(row2)
                console.log('row2')
            }
            if (gallerij.length > 0 || gallerij.length < maxObjects) {
                var row3 = (gallerij.splice(0, maxObjects))
                // console.log(gallerij.splice(0, maxObjects))
                console.log(gallerij.length) // console.log(row3)
                console.log('row3')
            }
            res.render('gallerij', { row1: row1, row2: row2, row3: row3, all: gallerij });
        }
    })
});

app.get('/gallerij/:id', function(req, res) {
    Gallerij.findById(req.params.id, function(err, gallerijId) {
        if (err) {
            console.log(err)
        }
        else {
            res.render("show", { fotoId: gallerijId })
        }
    })
})

app.listen(app.get('port'), function() {
    console.log('starting');
});
