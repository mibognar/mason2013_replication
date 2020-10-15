<?php
$file = "relay.json";
$relay = "relay";
$json = json_decode(file_get_contents($file),TRUE);

if ($json["relay"]==1) {
  $json[$relay] = 0;
}else{
  $json[$relay] = 1;
}
$json["id"] = $json["id"] + 1;
file_put_contents($file, json_encode($json));
header('Location: test.html?relay='.$json[$relay].'&id='.$json["id"]);
die();
?>
