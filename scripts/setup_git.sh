#!/bin/sh

git config --global user.name "ponkotuy-bot"
git config --global user.email "web@ponkotuy.com"

git checkout origin/gh-pages
git merge master
rm .gitignore
