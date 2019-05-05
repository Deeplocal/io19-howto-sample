const express = require('express');
const path = require('path');

const app = express();
const root = process.cwd();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/succulent-markup', (req, res) => {
  res.sendFile(__dirname + '/public/succulent.html');
});

app.get('/succulent', (req, res) => {
  res.sendFile(__dirname + '/public/succulent-jsonld.html');
});

app.get('/starburst-flower-markup', (req, res) => {
  res.sendFile(__dirname + '/public/starburst-flower.html');
});

app.get('/starburst-flower', (req, res) => {
  res.sendFile(__dirname + '/public/starburst-flower-jsonld.html');
});

app.get('/faq', (req, res) => {
  res.sendFile(__dirname + '/public/faq.html');
});

app.get('/privacypolicy', (req, res) => {
  res.sendFile(__dirname + '/public/privacy-policy.html');
});

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
