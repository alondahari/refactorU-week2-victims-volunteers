var numberOfVictims = prompt('How many victims?');
var victimInfo = [];
var volunteerInfo =[];


for (var i = 1; i <= numberOfVictims; i++) {
  victimInfo.push({
    'name': prompt('Victim ' + i + ' - name:'),
    'number': prompt('Victim ' + i + ' - phone number:'),
    'street': prompt('Victim ' + i + ' - street:')
  });
}
