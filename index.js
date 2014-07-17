var sort = require('./sort')
  , through = require('through')

function gulpSort(sortMethod, opts) {

  var files = [],
    opts = opts || {},
    sortMethod = sortMethod || 'SORT_STRING'

  var onFile = function onFile(file) {
    files.push(file)
  };

  var onEnd = function onEnd() {
    var that = this
    sort(files, sortMethod, !!opts.fullpath).forEach(function (file) {
      that.emit('data', file)
    })
    that.emit('end')
  };

  // Creating a stream through which each file will pass
 return through(onFile, onEnd)

}

gulpSort.SORT_STRING = 'SORT_STRING'
gulpSort.SORT_NUMERIC = 'SORT_NUMERIC'
gulpSort.SORT_REGULAR = 'SORT_REGULAR'


// Exporting the plugin main function
module.exports = gulpSort