var strnatcmp = require('./strnatcmp');
var path = require('path');

module.exports = function sort(inputArr, sort_flags, full_path) {
  //  discuss at: http://phpjs.org/functions/sort/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  revised by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // modified by: Matthias Etienne
  var sorter = function () {
    },
    full_path = !!full_path

  function getPaths(a, b) {
    return {
      a: full_path ? a.path : path.basename(a.path),
      b: full_path ? b.path : path.basename(b.path)
    }
  }

  if (typeof sort_flags === 'function') {
    sorter = sort_flags;
  } else {
    switch (sort_flags) {
      case 'SORT_STRING':
        // compare items as strings
        sorter = function (a, b) {
          var paths = getPaths(a, b);
          return strnatcmp(paths.a.toLowerCase(), paths.b.toLowerCase());
        };
        break;
      case 'SORT_NUMERIC':
        // compare items numerically
        sorter = function (a, b) {
          var paths = getPaths(a, b);
          return (paths.a - paths.b);
        };
        break;
      case 'SORT_REGULAR':
      // compare items normally (don't change types)
      default:
        sorter = function (a, b) {
          var paths = getPaths(a, b);
          var aFloat = parseFloat(paths.a),
            bFloat = parseFloat(paths.b),
            aNumeric = aFloat + '' === paths.a,
            bNumeric = bFloat + '' === paths.b;
          if (aNumeric && bNumeric) {
            return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
          } else if (aNumeric && !bNumeric) {
            return 1;
          } else if (!aNumeric && bNumeric) {
            return -1;
          }
          return paths.a > paths.b ? 1 : paths.a < paths.b ? -1 : 0;
        };
        break;
    }
  }

  return inputArr.sort(sorter);

}