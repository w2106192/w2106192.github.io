'use stric';


var userChNum = prompt("Enter a number", '');
var userChPow = prompt("Enter a pow", '');

if ( isNaN(userChNum) && isNaN(userChPow)) {
  console.log('try again');
}
else {
  console.log("Result is", mathPow(userChNum,userChPow));
}

function mathPow(){

var result = Math.pow(userChNum, userChPow );

return result;


}
