var gulp = require('gulp')
  , gulpSort = require('./../index.js')
  , size = require('gulp-size')
  , debug = require('gulp-debug')

gulp.task('default', function () {
  gulp.src('./*')
    .pipe(size({showFiles : true}))
    .pipe(gulpSort(gulpSort.SORT_REGULAR))
    .pipe(size({showFiles : true}));
});



