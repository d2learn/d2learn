#!/bin/bash
# - security-only-ready, dont modify this file
#npm init vuepress-theme-hope@latest home
#npm run docs:dev

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

current_time=$(date "+%Y-%m-%d %H:%M:%S")

echo "----------------------------------------------------"
echo "--------- D2Learn - $current_time ---------"
echo "----------------------------------------------------"

echo "--------- Sync Courses ---------"
cd $SCRIPT_DIR/courses
bash auto-update.sh

echo "--------- Sync Home ---------"
git pull origin main
cd $SCRIPT_DIR/home
npm run docs:build