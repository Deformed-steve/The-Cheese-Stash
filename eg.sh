#!/bin/bash

# replace this with your existing deployment URL (the one you already uploaded once)
BASE_URL="ixleducationforkids.vercel.app/"

# number of aliases you want
COUNT=5

# output file
OUTPUT="urls.txt"
> $OUTPUT  # clear the file first

for i in $(seq 1 $COUNT); do
  NEW_NAME="ixleducationforkids$i.vercel.app"   # change prefix as needed
  vercel alias set $BASE_URL $NEW_NAME --yes
  echo $NEW_NAME >> $OUTPUT
  echo "Created alias: $NEW_NAME"
done

echo "All aliases logged in $OUTPUT"
