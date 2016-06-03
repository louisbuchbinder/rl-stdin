module.exports = (() => new Promise((resolve) => {
  var data = '';
  require('readline')
  .createInterface({input: process.stdin})
  .on('line', (line) => data += line + '\n')
  .on('close', () => resolve(data));
}))();
