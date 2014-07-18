var gulp = require('gulp')
  , size = require('gulp-size')
  , gulpSort = require('./../index.js')

gulp.task('default', function () {
  gulp.src('./*')
    .pipe(gulpSort())
    .pipe(size({showFiles:true}))
});



