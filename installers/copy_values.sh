cd ~/MagicMirror
cp config/config.model.js config/config.js
sed '
s|"\(.*\)"[[:blank:]]*:[[:blank:]]*"\(.*\)"|\1\
\2|
h
s|.*\n||
s|[\&/]|\\&|g
x
s|\n.*||
s|[[\.*^$/]|\\&|g
G
s|\(.*\)\n\(.*\)|s/\1/\2/g|
' config/dictionary.txt | sed -i -f - config/config.js

DISPLAY=:0 npm start
