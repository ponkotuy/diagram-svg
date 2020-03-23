#!/bin/sh

if [ $# -ne 1 ]; then
    echo "引数にディレクトリを指定してください"
    exit 1
fi

echo '['
first=1
for file in `find $1 -maxdepth 1 -name "*.json" | sort`; do
    if [ $first -eq 0 ]; then
       echo -n ","
    fi
    title=$(cat $file | jq .title)
    author=$(cat $file | jq .author)
    company=$(cat $file | jq .company)
    region=$(cat $file | jq .region)
    echo "{\"file\":\"$file\", \"name\":$title, \"author\":$author, \"company\":$company, \"region\":$region}"
    first=0
done
echo ']'
