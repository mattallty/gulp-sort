var gulp = require('gulp')
  , size = require('gulp-size')
  , gulpSort = require('./../index.js')

gulp.task('default', function () {
  gulp.src('./*')
    .pipe(gulpSort(gulpSort.SORT_STRING))
    .pipe(size({showFiles:true}))
});



