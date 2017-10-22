require('marko/compiler').configure({ writeToDisk: false });
require('lasso').configure(require('./lasso-config'));
var arc = require('@architect/functions');
var template = require('./page')

function route(req, res) {
  template.render()
    .then(out => res({ html: out.getOutput() }))
    .catch(err => res({ status: 500 }))
}

exports.handler = arc.html.get(route)

