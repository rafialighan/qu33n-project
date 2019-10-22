<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE  FROM personCert WHERE personId = ?;
  DELETE FROM person WHERE personId = ?;'
);

$stmt->execute([
  $_POST['personId'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['station'],
  $_POST['gender'],
  $_POST['address'],
  $_POST['workPhone'],
  $_POST['mobilePhone'],
  $_POST['radioNumber']
  $_POST['isActive']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/');
// header('Location: ../records/?personId='.$personId);
