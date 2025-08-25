function loadDoc(mycallback) {

    //create new request
   const xhttp = new XMLHttpRequest();
   //what to do when response arrives
   xhttp.onload = function(){

    mycallback(xhttp);

   }
   //prepare request-method
   xhttp.open("GET", "data.txt");
   //send request
   xhttp.send();
 }

 function mycallback1(xhttp){
  const container=document.getElementById("demo1");
  container.innerHTML=xhttp.responseText;
 }

 
 function mycallback2(xhttp){
  const container=document.getElementById("demo2");
  container.innerHTML=xhttp.responseText;
 }