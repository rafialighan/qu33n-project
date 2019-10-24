<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE person SET firstName = ?, lastName = ?, position= ?, station = ?, gender = ?, address = ?, workPhone = ?, mobilePhone = ?, radioNumber = ?'
);

//  DELETE FROM person WHERE personId = ?

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['station'],
  $_POST['gender'],
  $_POST['address'],
  $_POST['workPhone'],
  $_POST['mobilePhone'],
  $_POST['radioNumber']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/');
// header('Location: ../records/?personId='.$personId);
