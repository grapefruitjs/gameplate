#!/usr/bin/env bash

cd ../grapefruit &&
grunt build &&
cp build/gf.js ../dir/js/vendor/gf.js