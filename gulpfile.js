const { watch, series, task, src, dest } = require('gulp');
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');

function clean(cb) {
    // body omitted
    cb();
  }
  
function javascript(cb) {
    // body omitted
    cb();
  }
  
function css(cb) {
    // body omitted
    cb();
  }

task('styles', function() {
    return src('./css/*.css')
      .pipe(concat('index.css'))
      .pipe(dest('./dist/'));
});

function defaultTask(cb) {

    livereload.listen();
    watch('./*.css', css);
    // Or a composed task
    watch('./*.js', series(clean, javascript));
  }

exports.default = defaultTask