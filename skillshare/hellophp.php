<?php


$variable = ' hello world '."<br><br>";
$sumtotal = 5+5;
$myName= 'I \'AM PRAMOD'.' mihiranga';
$number=30+3;
$a ="number";

echo $sumtotal*5;
echo $variable; 

echo "hi  $myName";

echo "\n\nPramod";


echo 'my age is ' . $$a. "<br>";

echo "<br>";


//arrays

$array = array('name', 'email','address');

echo "here is an"; print_r($array) ;

echo "<br><br>". "here is the 2nd key of the array : ". $array[2]."<br><br>";

$array2[]= "salad";
$array2[] = "beans";

print_r($array2);

echo "<br><br>";

$arrayMe = array(
    'name'=>'mihiranga',
    'age'=> 34,
    'email'=> 'pramodbiz@yahoo.com',
);

print_r($arrayMe);


echo "<br><br>". $arrayMe["email"]. "<br><br>";


//if, else, switch
$newNumber =100;

if($number>!99 && $newNumber<!$number){
    echo 'its true'."<br><br>";

} else {
    echo 'it\'s false'. "<br><br>";
};


switch($newNumber){
case $newNumber>55:
    echo 'true';
    break;
case 2:
    echo 'false';
    break;
default:
    echo 'sorry nothing found';
    
}

echo "<br><br>";

#for and for each loops
for($i = 1; $i<=10; $i++ ){
echo "$i ";
// echo $i;
};
echo "<br><br>";

print_r($array);

echo "<br><br>";

foreach($array as $key => $value){
    echo "Index $key - $value<br><br><br>";
};

//While loops

$i=0;
// while ($i<5){
// echo $i++. "<br><br>";

// };

echo '<H3>WHILE LOOPS </H3><BR>';
while ($i<3){
    echo "$array[$i]<br><br>";
    $i++;
}

//GET Variables
echo "<h3>GET Variables</h3><br>";
// print_r($_GET);
if(isset($_GET['s'])){
echo "<p> Your  seacrh term is: ".$_GET['s'];
}
?>
<form method = "get" action="">

<label> Enter Search Term </label>
<input type="search" name ="s">
</form>


<?php
//POST Variables
echo "<h3>POST Variables</h3><br>";

if(! empty ($_POST['s'])){
    echo "<p> Your  seacrh term is: ".$_POST['s'];
    }
?>
    <form method = "POST" action="">
    
    <label> Enter Search Term </label>
    <input type="search" name ="s">
    </form>
    
<?php




















?>

