#!/bin/sh

git add -A
git commit -m "Auto push gh-pages"
git push -f origin gh-pages
