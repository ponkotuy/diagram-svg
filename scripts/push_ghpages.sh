#!/bin/sh

git config --global user.name "ponkotuy-bot"
git config --global user.email "web@ponkotuy.com"

git checkout -b gh-pages
git merge master
git add -A
git commit -m "Auto push gh-pages"
git push -f origin gh-pages
