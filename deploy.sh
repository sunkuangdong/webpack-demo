git add . &&
git commit -m "updata" &&
git push &&
yarn build &&
git checkout gh-pages &&
find . -path ./.dist -prune -o -exec rm -rf {} \; 2> /dev/null &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m "updata" &&
git push &&
git checkout main