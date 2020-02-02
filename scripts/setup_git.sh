#!/bin/sh

git config --global user.name "ponkotuy-bot"
git config --global user.email "web@ponkotuy.com"

git checkout gh-pages
git merge origin/master -m "Merge master"
