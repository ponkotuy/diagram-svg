#!/bin/sh

git config --global user.name "ponkotuy-bot"
git config --global user.email "web@ponkotuy.com"

git checkout -b gh-pages
git merge master
rm .gitignore
