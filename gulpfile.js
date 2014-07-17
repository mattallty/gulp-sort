var gulp = require('gulp')
   ,sort = require('./index.js')
   ,debug = require('gulp-debug')


gulp.task('default', function(){
   gulp.src('./*')
      .pipe(sort())
      .pipe(debug());
});



