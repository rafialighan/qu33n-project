<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE personCert SET personId = ?, certId = ?, renewDate = ?, expireDate = ? WHERE certId = ?'
);

//  DELETE FROM person WHERE personId = ?

$stmt->execute([
  $_POST['personId'],
  $_POST['renewDate'],
  $_POST['expireDate'],
  $_POST['certId']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certs/');
// header('Location: ../records/?personId='.$personId);
