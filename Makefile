dump:
	find doc -name "*.md" | sed "s/.md//" | sed "s/doc\///" | xargs -I {} wget localhost:3000/compile/{} -O build/{}.html

compile: dump
	echo "<h1>MVI</h1><br><ul>" > index.html
	find doc -name "*.md" | sed "s/.md//" | sed "s/doc\///" | sort | xargs -I {} echo '<li><a href="build/{}.html">{}</a></li>' >> index.html
	echo "</ul><br><br>Compiled at `date`" >> index.html
