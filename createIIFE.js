const jiife = require('jiife');
const xl = 'node_modules/xtal-latx/';
const def = xl + 'define.js';
const xllx = xl + 'xtal-latx.js';
jiife.processFiles([def, xllx, 'text-scramble/text-scramble.js'], 'text-scramble/dist/text-scramble.iife.js', false);
jiife.processFiles(['nested-dropdown/nested-dropdown.js'], 'nested-dropdown/dist/nested-dropdown.iife.js', false);