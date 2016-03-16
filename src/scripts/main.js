// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  backdrop = require('bespoke-backdrop'),
  bullets = require('bespoke-bullets'),
  hash = require('bespoke-hash'),
  hljs = require('highlight.js'),
  keys = require('bespoke-keys'),
  nebula = require('bespoke-theme-nebula'),
  // notes = require('bespoke-notes'),
  overview = require('bespoke-overview'),
  pdf = require('bespoke-pdf'),
  progress = require('bespoke-progress'),
  scale = require('bespoke-scale'),
  touch = require('bespoke-touch');

// Bespoke.js
bespoke.from('article', [
  backdrop(),
  bullets('li, .bullet'),
  hash(),
  keys(),
  nebula(),
  // notes(),
  overview(),
  pdf(),
  progress(),
  scale(),
  touch()
]);

hljs.initHighlightingOnLoad();
