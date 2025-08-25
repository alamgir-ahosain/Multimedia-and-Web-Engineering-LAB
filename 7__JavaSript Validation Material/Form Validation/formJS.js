const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password=document.getElementById('confirm_password');

function showError(input,msg)
{
    const formControl=input.parentElement;
    console.log(formControl);
   // formControl.className='form-control error';
   // const small=formControl.querySelector('small');
   // small.innerText=message;

}
form.addEventListener("submit",function(e)
{
    e.preventDefault();
    if(username.value ===""){
        showError(username,'username is required');
    }
    else{
     //   showSucccess(username);
    }
    
})


