<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="row">
    <?php
    $conn=mysqli_connect("localhost","root","mbstu","jdbc");
     if(isset($_POST['update']))
     {
        $user=$_POST['user'];
        $sql="select * from info where username='$user'";
        $res=mysqli_query($conn,$sql);
        if(mysqli_num_rows($res)>0)
        {
            foreach($res as $row)
            {
                ?>
                <form action="Update1.php" method="post">
                 <label>UserName</label><br>
                <input type="text" name="user" value="<?php echo $row['username']; ?>"><br><br>
                <label>Password</label><br>
                <input type="text" name="pass" value="<?= $row['pass']; ?>"><br><br>
                <label>Confirm Password</label><br>
                <input type="text" name="cpass" value="<?= $row['cpass']; ?>"><br><br>
                <label>Email</label><br>
                <input type="text" name="email" value="<?= $row['email']; ?>"><br><br>
                <input type="submit" name="UpdateValue" value="Update">
                </form>
                <?php
            }
        }
     }
     if(isset($_POST['delete']))
     {
        $user=$_POST['user'];
        $sql="delete from info where username='$user'";
        $res=mysqli_query($conn,$sql);
        if($res)
        {
            echo "delete success";
        }
     }
    ?>
   </div> 
</body>
</html>