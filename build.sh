echo 'Building Extension'

echo 'Removing Previous Build'
{
    rm -rf dist/
} || exit
echo 'Removed Previous Build'

echo 'Building Extension UI Project'
tsc --p src/extension-ui/tsconfig.json || exit
echo 'Built Extension UI Project'

echo 'Building Extension Content Scripts Project'
tsc --p src/content-scripts/tsconfig.json || exit

{
    cp -r src/extension-ui/index.html dist/extension-ui/
} || exit
echo 'Built Extension Content Scripts Project'

echo 'Built Extension'