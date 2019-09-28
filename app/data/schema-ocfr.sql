USE ocfr;

CREATE TABLE certification (
	certId VARCHAR(60) PRIMARY KEY,
  agency VARCHAR (60),
  certType VARCHAR (60)
);
CREATE TABLE person (
	personId VARCHAR(60) PRIMARY KEY,
  certId VARCHAR(60),
  firstName VARCHAR (60),
  lastName VARCHAR (60),
  radioNumber VARCHAR (60) NOT NULL,
  stationNumber INTEGER NOT NULL,
  isActive BOOL,
  FOREIGN KEY (certId) REFERENCES certification(certId)
);
INSERT INTO person(personId, certId, firstName, lastName, radioNumber, stationNumber, isActive) VALUES
  ()
