<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
</head>
<body>
    <form action="reg.php" method="post" onsubmit="return validate()">
        <input type="text" name="fname" id="fname" placeholder="User Name"><br><br>
        <input type="password" name="pass" id="pass" placeholder="Password"><br><br>
        <span id="f4"></span><br>
        <input type="password" name="c" id="c" placeholder="Confirm Password"><br><br>
        <input type="text" name="email" id="email" placeholder="Email"><br><br>
        <input type="submit" name="SignUp" value="SignUp">
    </form><br>
    <form action="search.php">
        <input type="submit" name="search" value="Search">
    </form><br>
   
    <form action="show.php">
        <input type="submit" name="show" value="Show">
    </form>
</body>
<script>
     function validate() {
            let data = document.getElementById("pass").value;
            const alpha = new RegExp('(?=.*[a-zA-z])');
            const num = new RegExp('(?=.*[0-9])');
            const spl = new RegExp('(?=.*[!@#\$%\^&\*])');
            const eight = new RegExp('(?=.{8,})');
            if (eight.test(data) && alpha.test(data) && num.test(data) && spl.test(data)) {
                document.getElementById("f4").innerHTML = "";
                return true;
            }
            else {
                document.getElementById("f4").innerHTML = "***length should be 8, should have uppercase and lowercase letters and numbers and special characters";
                return false;
            }
        }
</script>
</html>