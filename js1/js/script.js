function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("число?", '');
var n = prompt("степень?", '');

if ( isNaN(x) && isNaN(n)) {
  alert('try again');


} else {
  alert( pow(x, n) );
}
