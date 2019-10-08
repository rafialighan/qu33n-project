<?php

use Ramsey\Uuid\Uuid;
$personId = Uuid::uuid4()->toString();
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO person
    (personID, firstName, lastName, position, gender, address, workPhone, mobilePhone, radioNumber, isActive)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['gender'],
  $_POST['address'],
  $_POST['workPhone'],
  $_POST['mobilePhone'],
  $_POST['radioNumber'],
  $_POST['isActive']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?personId='.$personId);
