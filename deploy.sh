#!/bin/bash
set -e 

npm run build

SOURCE_BRANCH="master"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy."
    exit 0
fi


cd public
git init

git config user.name "Travis CI"
git config user.email "leocardosoti@gmail.com"

git add .
git commit -m "Deploy to GitHub Pages"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master > /dev/null 2>&1
