#!/bin/sh

if [ $# -ne 1 ]; then
    echo "引数にディレクトリを指定してください"
    exit 1
fi

echo -n '['
first=1
for file in `find $1 -maxdepth 1 -name "*.json"`; do
    if [ $first -eq 0 ]; then
       echo -n ","
    fi
    title=$(cat $file | jq .title)
    author=$(cat $file | jq .author)
    echo -n "{\"file\":\"$file\", \"name\":$title, \"author\":$author}"
    first=0
done
echo "]"
