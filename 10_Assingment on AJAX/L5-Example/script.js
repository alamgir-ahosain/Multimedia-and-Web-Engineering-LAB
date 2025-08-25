/*

// function getData(){

//   const xhr=new XMLHttpRequest();
//   xhr.onload=function(){
//    console.log(this.responseText);
//    console.log(JSON.parse(this.responseText));
//   console.log(JSON.parse(this.responseText).userId);

//   };
//   xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1");
//   xhr.send();
// }


function getData(){

  const xhr=new XMLHttpRequest();
  xhr.onload=function(){
   console.log(this.response);
   

  };
  xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1");
  xhr.responseType="json";
  xhr.send();
}



function sendData(){


}


const getButton=document.getElementById("get");
const sendButton=document.getElementById("send");

getButton.addEventListener("click",getData);
sendButton.addEventListener("click",sendData);


*/

function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
     if(this.status>=400){
      reject('there was an application error ');
     }
     else{
      resolve(this.response);
     }
    };
    xhr.onerror = function () {
      reject("there was an error");
    };
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send(data);
  });
  return promise;
}

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}
function sendData() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  ).then((responseData) => {
    console.log(responseData);
  });
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
