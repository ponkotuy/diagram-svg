## なにこれ
規定フォーマットのCSVのURLをブチ込むと標準出力からダイヤ可視化ツール(https://ponkotuy.github.io/diagram-svg/menu.html)で使えるJSONが、標準出力から吐き出されるツール。以下サンプル。

https://docs.google.com/spreadsheets/d/e/2PACX-1vTTjgpjWa1c_nRzUyKRIs_RLRJ1JFzRM2En78xBfQkg9WSZyDamsk1uy8sSOef-9KRY4W15-sqHounG/pubhtml?gid=0&single=true

特にGoogle Spreadsheetは作った表計算シートをCSVとして公開できるので、これをPythonスクリプトの引数に渡すと簡単にJSONを作れる。

[ファイル]→[Webに公開]から当該シートをCSVで公開すればよい。

```
$ pipenv run ./csv2json.py `URL`
```
