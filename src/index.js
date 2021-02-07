const { parse } = require("semver");

module.exports = function reverse (n) {
  var str = n.toString();
  var arr = str.split("");
  var reversed = arr.reverse();
  var s = arr.join("");
  n = parseInt(s);
  return n;
}
