var numberOfVictims = prompt('How many victims?');
var victimInfo = [];
var volunteerInfo =[];
var victims = document.getElementById('victim-info');
var volunteers = document.getElementById('volunteer-info');
var name, number, street, ol, liName, liNumber, liStreet;

for (var i = 1; i <= numberOfVictims; i++) {
  name = prompt('Victim ' + i + ' - name:');
  number = prompt('Victim ' + i + ' - number:');
  street = prompt('Victim ' + i + ' - street:');

  victimInfo.push({
    'name': name,
    'number': number,
    'street': street
  });

  ol = document.createElement('ol');

  liName = document.createElement('li');
  liName.textContent =  "name: " + name;

  liNumber = document.createElement('li');
  liNumber.textContent =  "number: " + number;

  liStreet = document.createElement('li');
  liStreet.textContent =  "street: " + street;

  victims.appendChild(ol);

  ol.appendChild( liName );
  ol.appendChild( liNumber );
  ol.appendChild( liStreet );
}
var numberOfVolunteers = prompt('How many volunteers?');

for (var i = 1; i <= numberOfVolunteers; i++) {
  name = prompt('Volunteer ' + i + ' - name:');
  number = prompt('Volunteer ' + i + ' - number:');
  street = prompt('Volunteer ' + i + ' - street:');

  volunteerInfo.push({
    'name': name,
    'number': number,
    'street': street
  });

  ol = document.createElement('ol');

  liName = document.createElement('li');
  liName.textContent =  "name: " + name;

  liNumber = document.createElement('li');
  liNumber.textContent =  "number: " + number;

  liStreet = document.createElement('li');
  liStreet.textContent =  "street: " + street;

  volunteers.appendChild(ol);

  ol.appendChild( liName );
  ol.appendChild( liNumber );
  ol.appendChild( liStreet );
}

document.getElementById('number-of-victims').textContent =
'Number of victims: ' + numberOfVictims;

document.getElementById('number-of-volunteers').textContent =
'Number of volunteers: ' + numberOfVictims;
