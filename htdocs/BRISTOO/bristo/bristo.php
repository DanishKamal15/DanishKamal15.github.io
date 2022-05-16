<?php
// {{ isset($array['key']) ? $array['key']: 'Default'; }} 
// $data = array_merge(array($key=>false),$data);
// return $data[$key];
// return isset($data[$key]) ? $data[$key] : false;
// if(isset($name)||isset($address)||isset($number)||isset($b11||isset($b22)||isset($b33)||isset($b44)||isset($p11)||isset($p22)||isset($p33)||isset($p44)||isset($s11)||isset($s22)||isset($s33)||isset($s44)||isset($i11)||isset($)||isset($b22)||isset($b22)||isset($b22)||)

$name=$_POST['name'];
$number=$_POST['number'];
$address=$_POST['address'];

$b11=$_POST['b111'];
$b22=$_POST['b222'];
$b33=$_POST['b333'];
$b44=$_POST['b444'];
$p11=$_POST['p111'];
$p22=$_POST['p222'];
$p33=$_POST['p333'];
$p44=$_POST['p444'];
$s11=$_POST['s111'];
$s22=$_POST['s222'];
$s33=$_POST['s333'];
$s44=$_POST['s444'];
$i11=$_POST['i111'];
$i22=$_POST['i222'];
$i33=$_POST['i333'];
$i44=$_POST['i444'];
$bill=$_POST['billll'];
// echo $i44,$i22,$i33,$i11;



if(!empty($name) || !empty($number) || !empty($address)||!empty($bill)|| !empty($b11)|| !empty($b22)|| !empty($b33)|| !empty($b44)|| !empty($p11)|| !empty($p22)|| !empty($p33)|| !empty($p44)|| !empty($s11)|| !empty($s22)|| !empty($s33)|| !empty($s44)|| !empty($i11)|| !empty($i22)|| !empty($i33)|| !empty($i44)){
    #code
    $host="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="bristo";
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
        $SELECT ="SELECT number From bill Where number = ? Limit 1";// select email bcoz email is unique every user have unique email
        $INSERT="INSERT Into bill(name,number,address,bbq_pizza,special_pizza,grill_pizza,fajita_pizza,cheasy_burger,beef_burger,chicken_burger,mutton_burger,egg_sandwich,beef_sandwich,cheasy_sandwich,ny_sandwich,totee_fruitee_icecream,chocalte_icecream,vanila_icecream,blue_berry_icecream,total) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

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
            $stmt->bind_param("sisiiiiiiiiiiiiiiiii",$name,$number,$address,$b11,$b22,$b33,$b44,$p11,$p22,$p33,$p44,$s11,$s22,$s33,$s44,$i11,$i22,$i33,$i44,$bill);
            $stmt->execute();

            echo 'NEW RECORD INSERTED SUCCESSFLLY';
            
        }
        else {
            echo "SOME ONE ALREADY REGISTERED USING THIS number";
        }
        $stmt->close();
        $conn->close();

       


    }

}
else{
//     echo '<script type ="text/JavaScript">';  
//     echo 'alert("JavaScript Alert Box by PHP")';  
// echo '</script>'; 
    echo 'ALL FIELD ARE REQUIRED';
    die();
}


?>