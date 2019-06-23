const path = require('path');

const resolve = (aPath) => path.resolve(process.cwd(), aPath);

module.exports = {
  resolve,
};
