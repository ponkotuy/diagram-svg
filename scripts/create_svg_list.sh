#!/bin/sh

if [ $# -ne 1 ]; then
    echo "引数にディレクトリを指定してください"
    exit 1
fi

echo '['
for file in `find $1 -maxdepth 1 -name "*.json"`; do
    echo "  \"$file\","
done
echo ']'
