var through = require('through')
var path = require('path')
require("natural-compare-lite")

function gulpSort(opts, sortMethod) {

  var files = [],
    sortMethod = sortMethod ||
      /**
       * naturalCmp function taken from Underscore.string
       */
      function (p1, p2) {
        var str1 = path.basename(p1.path).replace(/[-_]/g, '')
        var str2 = path.basename(p2.path).replace(/[-_]/g, '')
        return String.naturalCompare(str1, str2)
      }


  var onFile = function onFile(file) {
    files.push(file)
  }

  var onEnd = function onEnd() {
    var that = this

    //localeCompare

    files.sort(sortMethod).forEach(function (file) {
      that.emit('data', file)
    })
    that.emit('end')
  }

  // Creating a stream through which each file will pass
  return through(onFile, onEnd)

}

// Exporting the plugin main function
module.exports = gulpSort