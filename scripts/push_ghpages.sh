#!/bin/sh

git add -A
git commit -m "Auto push gh-pages"
git push origin HEAD:gh-pages
