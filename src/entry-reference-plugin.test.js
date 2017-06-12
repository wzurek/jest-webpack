require('source-map-support').install({hookRequire: true});

const utils = require('../fixtures/utils');

it('builds multiple versions of a dependency', () => {
  return utils.run('module-multiple-loaders')
  .then(utils.itPasses)
  .then(utils.itBuilt(['src/entry.js']))
  .then(utils.itTests(['src/entry.test.js']));
}, 30000);

it('builds multiple versions of a test file', () => {
  return utils.run('module-multiple-loaders-test')
  .then(utils.itPasses)
  .then(utils.itBuilt(['src/entry.test.js']))
  .then(utils.itTests(['src/entry.test.js']));
}, 30000);
