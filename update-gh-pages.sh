git checkout gh-pages

make
git add .
git commit -m "Automatic gh-pages update `date`"
git push --all

git checkout develop
