<?php
$servername = "localhost";
$username = "root";
$password = "mbstu";
$database = "jdbc";


$conn = mysqli_connect($servername, $username, $password, $database);

// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
  echo"Connection Successful!!";
  if(isset($_POST['SignUp']))
  {
    
    $stmt=$conn->prepare('select * from info where username=?');
    $stmt->bind_param('s',$_POST['fname']);
    $stmt->execute();
    $stmt->store_result();
    echo $_POST['fname'];
    if($stmt->num_rows > 0)
    {
        echo "User exists";
    }
    else
    {
        $user=$_POST['fname'];
        $pass=$_POST['pass'];
        $cpass=$_POST['c'];
        $email=$_POST['email'];
        $sql="insert into info (username,pass,cpass,email) values('$user','$pass','$cpass','$email')";
        mysqli_query($conn, $sql);
        echo "Record inserted Successfully";
    
    }
  }
}
?>