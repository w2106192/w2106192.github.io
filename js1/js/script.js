function pow(num, power) {
  var result = num;

  for (var i = 1; i < power; i++) {
    result *= num;
  }

  return result;
}

var num = prompt("число?", '');
var power = prompt("степень?", '');

if ( isNaN(num) && isNaN(power)) {
  alert('try again');


} else {
  alert( pow(num, power) );
}
