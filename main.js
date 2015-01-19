var numberOfVictims = prompt('How many victims?');
var victimInfo = [];

for (var i = 1; i <= numberOfVictims; i++) {
  victimInfo.push(prompt('Victim ' + i + ' - name:'));
  victimInfo.push(prompt('Victim ' + i + ' - phone number:'));
  victimInfo.push(prompt('Victim ' + i + ' - street:'));
}
