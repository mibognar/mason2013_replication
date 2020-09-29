<?php
$jsonString = file_get_contents('php://input');

//Decode the JSON and convert it into an associative array.
$jsonDecoded = json_decode($jsonString, true);
$date = date("Y-m-d_h-i-sa");

//Give our CSV file a name.
$csvFileName = 'demographics.csv';

//Open file pointer.
$fp = fopen($csvFileName, 'w');

fputcsv($fp, $jsonDecoded);
fclose($fp);
exit("saved");

 ?>
