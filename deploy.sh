#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
npm run build && git add $1 && git commit -m "Deploying $1 to gh-pages" && git subtree push --prefix $1 origin gh-pages
