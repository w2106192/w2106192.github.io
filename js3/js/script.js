"use strict"

var p=document.createElement("h1");

 var str=document.createTextNode("тест по программированию");
 p.appendChild(str);
 document.body.appendChild(p);

 var anketa={'Вопрос  1':['ответ 1','ответ 2','ответ 3'],
            'Вопрос 2':['ответ 1','ответ 2','ответ 3'],
            'Вопрос 3':['ответ 1','ответ 2','ответ 3']}
//        var anketa={'question 1':{'answer 1':true,'answer 2':false,'answer 3':true},
//                   'question 2':['answer 1','answer 2','answer 3'],
//                   'question 3':['answer 1','answer 2','answer 3']}
 console.log(anketa);





 var mylist=document.createElement("ul");
 var m=0;
 for(var k in anketa){
//            document.write("<br>"+k+"="+anketa[k]);
     m++;
  var listItem=document.createElement("li");
 var str=document.createTextNode(k);
     listItem.appendChild(str);
     var ans=document.createElement("ul");
     listItem.appendChild(ans);

     var n=anketa[k].length;
     for(var i=0;i<n;i++){
      var otvet=anketa[k][i]
      var nameInput="v"+m+'_'+i;
       var listItem2=document.createElement("li");
         var myInput=document.createElement("input");
         myInput.type="checkbox";
         myInput.id=nameInput;
         myInput.name=nameInput;
         var myLabel=document.createElement("label");
         myLabel.appendChild(myInput);
         myLabel.appendChild(document.createTextNode(otvet));
         listItem2.appendChild(myLabel);
         ans.appendChild(listItem2);

     }
     listItem.appendChild(ans);
     mylist.appendChild(listItem);
 }
 document.body.appendChild(mylist);




  var butt = document.createElement('form');

  butt.id = "butt"

  document.body.appendChild(butt);


                                                  var but = document.createElement('input');
                                                      but.type = 'submit';

                                                        butt.appendChild(but);
