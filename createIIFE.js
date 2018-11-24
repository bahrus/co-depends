const jiife = require('jiife');
const xl = 'node_modules/xtal-latx/';
const def = xl + 'define.js';
const xllx = xl + 'xtal-latx.js';
jiife.processFiles([def, xllx, 'text-scramble/text-scramble.js'], 'text-scramble/dist/text-scramble.iife.js', true);