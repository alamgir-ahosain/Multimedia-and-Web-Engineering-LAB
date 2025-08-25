function loadDoc() {

     //create new request
    const xhttp = new XMLHttpRequest();
    //what to do when response arrives
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    //prepare request-method
    xhttp.open("GET", "data.txt");
    //send request
    xhttp.send();
  }