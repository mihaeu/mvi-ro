/**
 * PLEASE FOR THE LOVE OF EVERYTHING THAT IS HOLY TO YOU DO NOT LOOK AT THIS CODE
 *
 * I SHOULD BE STUDYING MATH AND INSTEAD I STARTED HACKING THIS TOGETHER
 *
 * THIS IS DEFINITELY NOT HOW I WOULD NORMALLY WRITE CODE ;)
 *
 * PROMISE!
 */

'use strict';

let md = window.markdownit({html:true}),
	math = document.getElementById('math'),
	text = math.value;

/**
 * Render Markdown, Graphviz Dot and AsciiMath/LaTeX formulae
 */
function render() {
	let newText = math.value;
	if (newText === text) {
		return;
	}

	// render Markdown
	document.getElementById('result').innerHTML = md.render(math.value);

	// set tab title
	if (document.querySelector('#result h1') !== null) {
		document.title = 'Editor | ' + document.querySelector('#result h1').innerHTML;
	} else if (document.getElementsByTagName('h2')[0] !== undefined) {
		document.title = 'Editor | ' + document.getElementsByTagName('h2')[0].innerHTML;
	} else {
		document.title = 'Editor';
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

function load() {
	let files = document.getElementById('files');
	fetchFile(files.options[files.selectedIndex].innerHTML);
}

/**
 * @param {string} file
 */
function fetchFile(file) {
	let http = new XMLHttpRequest();
	http.open("GET", '/file/'+file, true);
	http.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	http.onreadystatechange = () => {
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById('math').innerHTML = JSON.parse(http.responseText).md;
			document.getElementById('file').value = file;
			render();
		} else {
			console.log('fail');
		}
	};
	http.send(JSON.stringify({file: file}));
}

/**
 * Fetches a list of all available files
 */
function fetchFiles() {
	let http = new XMLHttpRequest();
	http.open("GET", '/files', true);
	http.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	http.onreadystatechange = () => {
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById('files').innerHTML =
				JSON.parse(http.responseText).files
					.reduce((prev, current) => `${prev}<option>${current}</option>`, '<option>[select]</option>');
		} else {
			console.log('fail');
		}
	};
	http.send();
}

/**
 * Saves markdown and html content if the content changed
 */
function post() {
	if (document.getElementById('file') === document.activeElement
		|| document.getElementById('file').value.length == 0
		|| document.getElementById('result').innerHTML.length == 0) {
		return;
	}

	let http = new XMLHttpRequest();
	http.open("POST", '/', true);
	http.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	http.onreadystatechange = () => {
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById('last-saved').innerHTML = 'last saved ' + new Date().toString();
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

fetchFiles();
