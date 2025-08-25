<?php
$conn=mysqli_connect("localhost","root","mbstu","jdbc");
if($conn)
{
    echo "dfd<br>";
    if(isset($_POST['UpdateValue']))
    {
        $user= $_POST['user'];
        $pass= $_POST['pass'];
        $cpass= $_POST['cpass'];
        $email= $_POST['email'];
        $sql="update info set pass='$pass',cpass='$cpass',email='$email' where username='$user'";
        $res=mysqli_query($conn,$sql);
        if($res)
        {
            echo "success";
        }
        else
        {
            echo "fail";
        }
    }
    else
    {
        echo "Not Applicable";
    }
}
?>