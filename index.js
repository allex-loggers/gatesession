function createLib (execlib) {
  'use strict';
  return execlib.loadDependencies('client', ['allex:base:logger'], require('./creator').bind(null, execlib));
}
module.exports = createLib;