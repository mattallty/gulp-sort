var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-sort';


// Plugin level function(dealing with files)
function gulpSort(sortMethod) {

   // Creating a stream through which each file will pass
   var stream = through.obj(function(file, enc, callback) {
      if (file.isNull()) {
         // Do nothing if no contents
         gutil.log('dealing with null');
      }
      if (file.isBuffer()) {
         gutil.log('dealing with a buffer');
         gutil.log(file.path);
      }

      if (file.isStream()) {
         gutil.log('dealing with a stream');
         gutil.log(file.path);
      }

      this.push(file);
      callback();

   });

   // returning the file stream
   return stream;
};

gulpSort.SORT_STRING = 'SORT_STRING';
gulpSort.SORT_NUMERIC = 'SORT_NUMERIC';
gulpSort.SORT_REGULAR = 'SORT_REGULAR';



// Exporting the plugin main function
module.exports = gulpSort;