'use strict';

let md = window.markdownit({html:true}),
	math = document.getElementById('math'),
	text = math.value;

function render() {
	let newText = math.value;
	if (newText === text) {
		return;
	}

	// render Markdown
	document.getElementById('result').innerHTML = md.render(math.value);

	// set tab title
	if (document.getElementsByTagName('h2')[0] !== undefined) {
		document.title = document.getElementsByTagName('h2')[0].innerHTML;
	}

	// render MathJax
	MathJax.Hub.Queue(['Typeset',MathJax.Hub, 'result']);

	// cache
	text = math.value;

	// render dot graphs
	for (let x of document.getElementsByClassName('language-dot')) {
		let dot = x.innerHTML.replace(/&gt;/gi, '>').replace(/&quot;/gi, '"');
		x.innerHTML = Viz(dot);
	}
}

function post() {
	let http = new XMLHttpRequest();
	http.open("POST", '/', true);
	http.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	http.onreadystatechange = () => {
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById('last-saved').innerHTML = 'last saved ' + new Date().toDateString();
		} else {
			document.getElementById('last-saved').innerHTML = 'could\'t save document';
		}
	};
	http.send(JSON.stringify({
		file: document.getElementById('file').value,
		html: document.getElementById('result').innerHTML,
		md: text
	}));
}

render();

setInterval(() => {
	if (document.getElementById('file') !== document.activeElement
	  && document.getElementById('file').value.length > 0
	  && document.getElementById('result').innerHTML.length > 0) {
		post();
	}
}, 5000);