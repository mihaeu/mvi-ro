'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  if (req.body.file.match(/[\/\.]/)) {
	  res.statusCode = 400;
	  return;
  }
  fs.writeFileSync('doc/' + req.body.file + '.md', req.body.md);
  fs.writeFileSync('doc/' + req.body.file + '.html', req.body.html);
  res.send();
});

app.listen(3000, () => console.log('Listening on port 3000!'));
