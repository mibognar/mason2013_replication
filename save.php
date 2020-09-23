<?php

//An example JSON string.
$jsonString = file_get_contents('php://input');

//Decode the JSON and convert it into an associative array.
$jsonDecoded = json_decode($jsonString, true);
$date = date("Y-m-d_h-i-sa");

//Give our CSV file a name.
$csvFileName = 'data/participant_' . $date . '.csv';

//Open file pointer.
$fp = fopen($csvFileName, 'w');

//Loop through the associative array.
foreach($jsonDecoded as $row){
    //Write the row to the CSV file.
    fputcsv($fp, $row);
}

//Finally, close the file pointer.
fclose($fp);

?>
