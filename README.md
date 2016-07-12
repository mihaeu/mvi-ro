# MVI

## Info

All files are written in Markdown. I added to custom extensions for formulae and graphs:

### Entering Formulae

You can use either LaTeX or [AsciiMath](asciimath.org) (recommended) for math.

```md
AsciiMath
$ U = lambda / mu$
```

```tex
\LaTeX
$ = \frac{\lambda}{\mu}$
```

### Entering graphs

I just quickly hacked in support for Graphviz dot style graphs. Adding images is prefered. Simply enter dot code in markdown fenced code blocks for dot.

```md
\`\`\`dot
digraph test {
    a -> b
    b -> a
}
\`\`\`
```

### Project structure

```
.
├── build            <-- all generated HTML files (do not edit manually)
├── doc              <-- all documents and other resources (graphs, images, etc.)
├── index.html       <-- auto-generated index (do not edit manually)
├── Makefile         <-- Makefile, mostly for make compile
├── node_modules     <-- node packages, run npm install if you don't have this
├── package.json     <-- node package information
├── public           <-- source code for the Math editor, npm start and visit localhost:3000
├── README.md        <-- this instruction
└── server.js        <-- node backend
```

## Installation

```bash
npm install
```

## Printing

All files are printable. Just visit the GitHub Pages or compile them youself using the node server (see [Usage](#usage)).

## Usage
```bash
npm start

# editor
open localhost:3000

# view single file
open localhost:3000/compile/1-3-3

# view all files
open localhost:3000/compile

# generate and push GitHub Pages
git checkout gh-pages
git merge develop
make compile
git add .
git commit -m "Update GitHub Pages"
git push --all
git checkout develop
```

Douments are available in `.html` and `.md` in the `doc/` directory (GitHub Pages documents are in `build/` on the `gh-pages` branch).

## Hacking

The combination of AsciiMath and Markdown allows for simple extraction and conversion into other formats:

```bash
# extract all formulae
grep -o -P '(?<=\$).*(?=\$)' doc/formelsammlung.md
```
