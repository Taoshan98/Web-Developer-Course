<?php

$file = file('input.txt');

$freqArr = array();
for($i = 0; $i <= count($file); $i++){
    if(!in_array($file[$i], $freqArr)){
        array_push($freqArr, $file[$i]);
    }else{
        array_push($freqArr, $file[$i]);
        break;
    }
}


$i = 0;
$j = 0;
$sumArr = array();
while($i <= 1000000){
    
    array_push($sumArr, end($sumArr) + $freqArr[$i]);
    
    $i++;
    
    if($i == 7){
        $i = 0;
    }
    
    if($j == 1000000){
        break;
    }
    
    $j++;
    
}


echo "<pre>";
//print_r($freqArr);

print_r(array_count_values($sumArr));
