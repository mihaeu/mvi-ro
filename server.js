'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json({limit: '50mb'}));

app.post('/', (req, res) => {
  if (!req.body.file.match(/[\/\.md$]/)) {
	  res.statusCode = 400;
	  res.send({message: 'error'});
	  return;
  }
  let file = req.body.file.replace('.md', '');
  fs.writeFileSync('doc/' + file + '.md', req.body.md);
  fs.writeFileSync('doc/' + file + '.html', req.body.html);
	
  console.log('Saved md and html at ' + new Date());
	
  res.statusCode = 200;
  res.send();
});

app.get('/file/:file', (req, res) => {
	res.send({md: fs.readFileSync('doc/'+req.params.file, 'utf8')});
});

app.get('/files', (req, res) => {
	res.send({files: fs.readdirSync('./doc').filter(x => x.match(/\.md/))});
});

app.get('/compile', (req, res) => {
    res.send(template(
		'<h1>MVI</h1>',
		fs.readdirSync('./doc').filter(x => x.match(/\.html/)).reduce((previousValue, currentValue, currentIndex) => {
			return previousValue + '<br>' + fs.readFileSync('doc/'+currentValue);
		}, ''))
	);
});

app.get('/compile/:file', (req, res) => {
	res.send(template('', fs.readFileSync('doc/'+req.params.file+'.html')));
});

app.listen(3000, () => console.log('Listening on port 3000!'));

let template = (title, content) => {
	return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css"
      href="http://yegor256.github.io/tacit/tacit.min.css"/>
</head>
<body style="width:800px;margin: 0 auto;">
${title}
${content}
<script type="text/x-mathjax-config">
          MathJax.Hub.Config({
            asciimath2jax: {
              delimiters: [['$','$'], ['\`','\`']]
            }
          });
        </script>
<script type="text/javascript" async src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_CHTML"></script>
</body>`;
};