'use stric';


var userName = [];

var name = prompt("Enter the name");
var name1 = prompt("Enter the name");
var name2 = prompt("Enter the name");
var name3 = prompt("Enter the name");
var name4 = prompt("Enter the name");


userChName.push(name);
userChName.push(name1);
userChName.push(name2);
userChName.push(name3);
userChName.push(name4);

console.log(userName);


var userLogin = prompt("Enter your login");

for (var i = 0; i < userChName.length; i++)
{
if (userName[i] === userLogin) {

  var match = userLogin;
}

}

if (match) {
  console.log(userLogin + " вы успешно вощли");

} else {
  alert("Try again!")
}
