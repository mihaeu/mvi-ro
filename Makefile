all: dump build

dump:
	find doc -name "*.md" | sed "s/.md//" | sed "s/doc\///" | xargs -I {} wget localhost:3000/compile/{} -O {}.html

build:
	echo "<h1>MVI</h1><br><ul>" > index.html
	find doc -name "*.md" | sed "s/.md//" | sed "s/doc\///" | xargs -I {} echo '<li><a href="{}.html">{}</a></li>' >> index.html
	echo "</ul><br><br>`date`" >> index.html
