# gulp-sort

## About

A gulp plugin to sort files in a stream.

## Examples

### Sorting files alphabetically

```js
var gulp = require('gulp')
  , size = require('gulp-size')
  , gulpSort = require('./../index.js')

gulp.task('default', function () {
  gulp.src('./*')
    .pipe(gulpSort())
    .pipe(size({showFiles:true}))
})

/*
[17:57:00] Using gulpfile ~/dev/js/gulp-sort/test/gulpfile.js
[17:57:00] Starting 'default'...
[17:57:00] Finished 'default' after 7.61 ms
[17:57:00] gulp-size: 1.txt 1 B
[17:57:00] gulp-size: 2.txt 1 B
[17:57:00] gulp-size: 3.txt 1 B
[17:57:00] gulp-size: gulpfile.js 238 B
[17:57:00] gulp-size: myfile-suffix.txt 3 B
[17:57:00] gulp-size: myfile.txt 3 B
[17:57:00] gulp-size: myfileb.txt 5 B
[17:57:00] gulp-size: total 252 B
*/
```

