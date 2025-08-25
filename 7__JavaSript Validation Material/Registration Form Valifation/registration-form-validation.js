function formValidation() {
  var uname = document.container.firstname;
  var uname = document.container.middlename;
  var uname = document.container.lastname;
  var uemail = document.container.email;
  var uphone = document.container.phone;
  var passid = document.container.psw;
  var conpassid = document.container.psw - repeat;

  if (allLetter(uname)) {
    if (alphanumeric(uadd)) {
      if (ValidateEmail(uemail)) {
        if (allnumericphone(uphone)) {
          if (passid_validation(passid, 7, 12)) {
            if (conpassid_validation(conpassid, 7, 12)) {
              if (validsex(umsex, ufsex)) {
              }
            }
          }
        }
      }
    }
  }
  return false;
}

function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    passid.focus();
    return false;
  }
  return true;
}

function conpassid_validation(conpassid, mx, my) {
  var passid_len = conpassid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    conpassid.focus();
    return false;
  }
  return true;
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  }
}

function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}

function subjectselect(usubject) {
  if (usubject.value == "Default") {
    alert("Select your subject from the list");
    usubject.focus();
    return false;
  } else {
    return true;
  }
}

function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}

function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert("ZIP code must have numeric characters only");
    uzip.focus();
    return false;
  }
}

function allnumericphone(uphone) {
  var numbers = /^[0-9]+$/;
  if (uphone.value.match(numbers)) {
    return true;
  } else {
    alert("Phone Numbers must have numeric characters only");
    uphone.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }

  if (x == 2) {
    alert("Both Male/Female are checked");
    ufsex.checked = false;
    umsex.checked = false;
    umsex.focus();
    return false;
  }

  if (x == 0) {
    alert("Select Male/Female");
    umsex.focus();
    return false;
  } else {
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  }
}

// After form loads focus will go to Full Name field.
function firstfocus() {
  var uname = document.registration.username.focus();
  return true;
}

// This function will validate Full Name.
function allLetter_onchange(mx, my) {
  var uname = document.registration.username;
  var uname_len = uname.value.length;
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters) && uname_len >= my && uname_len <= mx) {
    // Focus goes to next field i.e. Address.
    document.registration.address.focus();
    return true;
  } else {
    alert(
      "Username must have alphabet characters only / length be between " +
        my +
        " to " +
        mx
    );
    uname.focus();
    return false;
  }
}

// This function will validate Address
function alphanumeric_onchange() {
  var uadd = document.registration.address;
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    // Focus goes to next field i.e. Country.
    document.registration.email.focus();
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}

// This function will validate Email.
function validateEmail_onchange() {
  var uemail = document.registration.email;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    document.registration.phone.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

// This function will validate Phone Numbers.
function validatePhone_onchange() {
  var uphone = document.registration.phone;
  var numbers = /^[0-9]+$/;
  if (uphone.value.match(numbers)) {
    document.registration.userid.focus();
    return true;
  } else {
    alert("Phone Numbers must have numeric characters only");
    uphone.focus();
    return false;
  }
}

function userid_validation_onchange(mx, my) {
  var uid = document.registration.userid;
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "User Id should not be empty / length be between " + my + " to " + mx
    );
    uid.focus();
    return false;
  }
  document.registration.passid.focus();
  return true;
}

// This function will validate Password.
function passid_validation_onchange(mx, my) {
  var passid = document.registration.passid;
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert(
      "Password should not be empty / length be between " + my + " to " + mx
    );
    passid.focus();
    return false;
  }
  document.registration.conpassid.focus();
  return true;
}

function check() {
  if (passid.value == conpassid.value) {
    alert("Success: Password Matched!");
  } else {
    alert(
      "Error: Please check that you've entered and confirmed your password!"
    );
  }
}
