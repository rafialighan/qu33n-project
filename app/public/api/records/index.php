<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['personId'])) {
  $stmt = $db->prepare('SELECT * FROM person WHERE personId = ?');
  $stmt->execute([$_GET['personId']]);
} else {
$stmt = $db->prepare('SELECT * FROM person');
$stmt->execute();
$persons = $stmt->fetchAll();
}

// Step 3: Convert to JSON
$json = json_encode($persons, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
