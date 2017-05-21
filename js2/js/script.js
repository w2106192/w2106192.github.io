'use stric';


var userName = [];

var name = prompt("Enter the name");
var name1 = prompt("Enter the name");
var name2 = prompt("Enter the name");
var name3 = prompt("Enter the name");
var name4 = prompt("Enter the name");


userName.push(name);
userName.push(name1);
userName.push(name2);
userName.push(name3);
userName.push(name4);

console.log(userName);


var userLogin = prompt("Enter your login");

for (var i = 0; i < userName.length; i++)
{
if (userName[i] === userLogin) {

  var match = userLogin;
}

}

if (match) {
  console.log(userLogin + " вы успешно вошли");

} else {
  alert("Try again!")
  var userLogin = prompt("Enter your login");
}
