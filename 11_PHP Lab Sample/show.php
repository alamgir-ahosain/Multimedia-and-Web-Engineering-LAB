<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,
        th,
        td {
            border: 1px solid;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <th>UserName</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Email</th>
        </tr>
        <?php
        $conn = mysqli_connect("localhost", "root", "mbstu", "jdbc");
        if ($conn) {
            echo "Show";
            $sql = "select * from info";
            $res = mysqli_query($conn, $sql);
            if (mysqli_num_rows($res) > 0) {
                while ($rows = mysqli_fetch_array($res)) {
        ?>
        <tr>
            <td>
                <?php echo $rows['username']; ?>
            </td>
            <td>
                <?php echo $rows['pass']; ?>
            </td>
            <td>
                <?php echo $rows['cpass']; ?>
            </td>
            <td>
                <?php echo $rows['email']; ?>
            </td>
        </tr>
        <?php
                }
            }
        }
        ?>
    </table>
</body>

</html>