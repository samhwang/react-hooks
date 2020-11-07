# !/bin/bash

git fetch origin master
git checkout master
git reset --hard origin/master

# Find all ts files and copy into output folders
find src -name "index.ts" | while read fname; do
  echo $fname;

  # get hook name
  trim_prefix=${fname:10}
  hook_name=${trim_prefix};
  echo $hook_name;

  # Copy all ts files into output folder
  cp $fname ./${OUTPUT_FOLDER}/${hook_name}
done;

git fetch origin ${DEPLOY_BRANCH}
git checkout ${DEPLOY_BRANCH}

find . -maxdepth 1 ! -name "${OUTPUT_FOLDER}" ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv ${OUTPUT_FOLDER}/* .
rm -Rf ${OUTPUT_FOLDER}

REMOTE_REPO="https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git add -fA
git commit --allow-empty -m "Update releases"
git push ${REMOTE_REPO} ${DEPLOY_BRANCH}

echo "Successfully built and deployed."