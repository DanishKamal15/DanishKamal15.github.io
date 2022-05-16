<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php

$conn=mysqli_connect("localhost","root","","form");

if(isset($_POST["update"])){
    $name=$_POST["name"];
    $age=$_POST["age"];
    $number=$_POST["number"];
 //                             col sa
    $query="UPDATE register SET name='$name',age='$age',number='$number' WHERE name='$name'";
    $query_run=mysqli_query($conn,$query);
    

    if(mysqli_affected_rows($conn) == 1){
        echo 'updated';
    }
    else{
        echo 'not updated';

    }
    mysqli_close($conn);
    
}

?>
    
</body>
</html>