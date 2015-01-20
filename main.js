var numberOfVictims = prompt('How many victims?');
var field, fields = {
  'name': undefined,
  'number': undefined,
  'street': undefined
};
var victimInfo = [];
var volunteerInfo =[];
var victims = document.getElementById('victim-info');
var volunteers = document.getElementById('volunteer-info');
var name, number, street, ul, liName, liNumber, liStreet;

var loopThrough = function (func) {
  for (field in fields) {
      func(field);
  }
};

var getData = function(value, i) {
  loopThrough(function(field){
    fields[field] = prompt(value + ' ' + i + ' - ' + field + ':');
  });
};

var displayData = function (list, value, i) {
  ul = document.createElement('ul');
  list.appendChild(ul);
  ul.textContent = value + ' ' + i + ':';

  liName = document.createElement('li');
  liName.textContent =  "name: " + name;

  liNumber = document.createElement('li');
  liNumber.textContent =  "number: " + number;

  liStreet = document.createElement('li');
  liStreet.textContent =  "street: " + street;

  ul.appendChild( liName );
  ul.appendChild( liNumber );
  ul.appendChild( liStreet );

};

for (var i = 1; i <= numberOfVictims; i++) {

  getData('victim', i);

  pushInfo(victimInfo);


  displayData(victims, i);
}

var numberOfVolunteers = prompt('How many volunteers?');

for (var i = 1; i <= numberOfVolunteers; i++) {
  getData('volunteer', i);

  volunteerInfo.push({
    'name': name,
    'number': number,
    'street': street
  });

  displayData(volunteers, 'volunteer', i);
}

document.getElementById('number-of-victims').textContent =
'Number of victims: ' + numberOfVictims;

document.getElementById('number-of-volunteers').textContent =
'Number of volunteers: ' + numberOfVolunteers;
