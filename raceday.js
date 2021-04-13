let raceNumber = Math.floor(Math.random() * 1000);
let timeofrunner=true;
let age='20';
if(timeofrunner && age>18)
{
  raceNumber+=1000;
}
if(timeofrunner && age>18)
{
  console.log('The race will begin at 9:30!\n'+raceNumber);
}
else if(timeofrunner ===false && age>18)
{
  console.log('The race will begin at 11:00\n'+raceNumber)
}
else if(age<18)
{
  console.log('The race will begin at 12:30!\n'+raceNumber);
}
else
{
  console.log('see the registration desk');
}
