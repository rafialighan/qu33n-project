<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
  $stmt = $db->prepare('SELECT firstName, lastName, certType, expireDate
    FROM certification c, person p, personCert pc
    WHERE
    p.personId = pc.personId
    AND c.certId = pc.certId
    AND current_date()-pc.expireDate > 0');
  $stmt->execute();

  $reports = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($reports, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
