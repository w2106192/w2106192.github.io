

var startCss =document.getElementById('start');
var stopCss = document.getElementById('stop');

startCss.style.backgroundColor = '#76b176';
startCss.style.height= '50px';
startCss.style.width='200px';

stopCss.style.backgroundColor = '#da4848';
stopCss.style.height= '50px';
stopCss.style.width='200px';
stopCss.style.marginLeft='450px'







var myCount=0;
function writeTime(){
  var myMmSec = Math.floor(myCount/0.6);
  if (myMmSec<10) {myMmSec='0'+myMmSec;

  }
    var mySec=myCount%60;
    if(mySec<10)mySec='0'+mySec;
    var myMin=Math.floor(myCount/60);
    if(myMin<10)myMin='0'+myMin;
document.getElementById('time1').innerHTML=myMin+':'+mySec+':'+myMmSec;
}
writeTime();
function myClock(){
myCount++;
 writeTime();
}
var ddd;
document.getElementById('start').onclick=function(){
if(!ddd)ddd=setInterval("myClock()",0.1);


document.getElementById('start').onclick=function(){
clearInterval(ddd);


}


}

document.getElementById('start').onclick=function(){
if(!ddd)ddd=setInterval("myClock()",1000);


document.getElementById('start').onclick=function(){
clearInterval(ddd);


}


}






document.getElementById('stop').onclick=function(){
clearInterval(ddd);
ddd=undefined;
    myCount=0;
    writeTime();

}
