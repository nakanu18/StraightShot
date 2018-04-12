#!/bin/bash

echo "Killing all instances of Metro bundler"
kill -9 $(lsof -ti tcp:8081)

echo "Resetting watchman"
watchman watch-del-all

echo "Deleting temp directory files"
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/haste*

echo "Deleting node_modules"
rm -rf node_modules/

echo "Removing yarn cache"
yarn cache clean

yarn install

echo "Running yarn start to clear cache."
echo "Ctrl+C when it's finished!"
yarn start --reset-cache
