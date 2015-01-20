var field, fields = {
  'name': undefined,
  'number': undefined,
  'street': undefined
};

var type, types = ['victim', 'volunteer'];

var victims = document.getElementById('victim-info');
var volunteers = document.getElementById('volunteer-info');

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
  var ul = document.createElement('ul');
  ul.textContent = value + ' ' + i + ':';

  loopThrough(function (field) {
    var listElement;
    listElement = document.createElement('li');
    listElement.textContent =  field + ": " + fields[field];
    ul.appendChild( listElement );
  });

  list.appendChild(ul);
};

for (type in types) {
  var numberOfPeople = prompt('How many ' + types[type] + 's?');

  for (var i = 1; i <= numberOfPeople; i++) {
    getData(types[type], i);
    displayData(document.getElementById(types[type] + '-info'), types[type], i);
  }
  document.getElementById('number-of-victims').textContent =
  'Number of ' + types[type] + 's: ' + numberOfPeople;
}
