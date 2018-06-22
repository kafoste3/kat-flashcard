// Server to run Foster's Flashers from

var express = require('express');
var path = require('path');
const app = express();

app.use();

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

app.listen(19000, () =>{
  console.log('Hello Fosters Flashers');
});