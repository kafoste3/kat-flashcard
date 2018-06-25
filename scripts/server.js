// Server to run Foster's Flashers from

var express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var nunjucks = require('nunjucks');

var path = require('path');
const app = express();

MongoClient.connect('link-to-mongodb', (err, database) =>{

});

app.use(express.static('scripts'));
app.use(express.static('Styles'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/help', (req, res) => {
  res.sendFile(path.join(__dirname, '../help.html'));
});

app.get('/creations', (req, res) => {
  res.sendFile(path.join(__dirname, '../creations.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, '../history.html'));
});

app.get('/study', (req, res) => {
  res.sendFile(path.join(__dirname, '../study.html'));
});

app.listen(?????, () =>{
  console.log('Hello Fosters Flashers');
});