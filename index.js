var through = require('through')
var path = require('path')

function gulpSort(sortMethod) {

  var files = [],
    sortMethod = sortMethod ||
      /**
       * Adapted from String.naturalCompare
       * by Lauri Rooden (https://github.com/litejs/natural-compare-lite)
       */
        function (p1, p2) {
        var a = path.basename(p1.path, path.extname(p1.path)).replace(/[^a-z0-9]/g, String.fromCharCode(91))
        var b = path.basename(p2.path, path.extname(p2.path)).replace(/[^a-z0-9]/g, String.fromCharCode(91))

        if (a != b) for (var i, ca, cb = 1, ia = 0, ib = 0; cb;) {
          ca = a.charCodeAt(ia++) || 0
          cb = b.charCodeAt(ib++) || 0

          if (ca < 58 && ca > 47 && cb < 58 && cb > 47) {
            for (i = ia; ca = a.charCodeAt(ia), ca < 58 && ca > 47; ia++);
            ca = (a.slice(i - 1, ia) | 0) + 1
            for (i = ib; cb = b.charCodeAt(ib), cb < 58 && cb > 47; ib++);
            cb = (b.slice(i - 1, ib) | 0) + 1
          }

          if (ca != cb) return (ca < cb) ? -1 : 1
        }
        return 0
      }


  var onFile = function onFile(file) {
    files.push(file)
  }

  var onEnd = function onEnd() {
    var that = this
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