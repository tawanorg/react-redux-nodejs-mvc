// assign the module to a local variable
var header = require('gulp-header');

var banner = ['/**',
  ' * Copyright (c) <%= new Date().getFullYear() %> Cofey',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');
