#!/usr/bin/env bash

cd ../grapefruit &&
grunt build &&
cp build/gf.js ../webstone/js/vendor/gf.js