
<?php
$name=$_POST['name'];
$age=$_POST['age'];
$number=$_POST['number'];


if(!empty($name) || !empty($age) || !empty($number)){
    #code
    $host="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="form";
    //to check if sql librairies are present or not
    // if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
    //     echo 'We don\'t have mysqli!!!';
    // } else {
    //     echo 'Phew we have it!';
    // }

    $conn=new mysqli($host,$dbuser,$dbpass,$dbname);

    if(mysqli_connect_error()){
        die("Connect Error(".mysqli_connect_error().")".mysqli_connect_error());
    }
    else{
        $SELECT ="SELECT number From register Where number = ? Limit 1";// select email bcoz email is unique every user have unique email
        $INSERT="INSERT Into register(name,age,number) values(?,?,?)";

        //prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("i",$number);// ? of email ofline 24 replace by it// s due to varchar
        $stmt->execute();
        $stmt->bind_result($number);
        $stmt->store_result();
        $rnum=$stmt->num_rows;
        if($rnum==0){
            $stmt->close();
            $stmt=$conn->prepare($INSERT);
            $stmt->bind_param("sii",$name,$age,$number);
            $stmt->execute();
            echo 'NEW RECORD INSERTED SUCCESSFLLY';
            
        }
        else {
            echo "SOME ONE ALREADY REGISTERED USING THIS EMAIL";
        }
        $stmt->close();
        $conn->close();

       


    }

}
else{
    echo 'ALL FIELD ARE REQUIRED';
    die();
}


?>