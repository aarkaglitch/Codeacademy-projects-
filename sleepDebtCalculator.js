function getsleephours(day)
{
  if (day==='sunday')
  {
    return 7;
  }
  if (day==='monday')
  {
    return 8;
  }
  if (day==='tuesday')
  {
    return 7;
  }
  if (day==='wednesday')
  {
    return 8;
  }
  if (day==='thursday')
  {
    return 7;
  }
  if (day==='friday')
  {
    return 8;
  }
  if (day==='saturday')
  {
    return 7;
  }
  
}
function getActualSleepHours()
{
  let a=getsleephours('sunday')+getsleephours('monday')+getsleephours('tuesday')+getsleephours('wednesday')+getsleephours('thursday')+getsleephours('friday')+getsleephours('saturday')
  return a;
}
function getIdealSleepHours()
{
  let idealhours=8;
  return idealhours*7;
}
function calculatesleepdebt()
{
  let idealsleephours=getIdealSleepHours();
  let actualsleephours=getActualSleepHours();
  if(idealsleephours===actualsleephours)
  {
    console.log('Congo! you have the perfect sleep schedule.');
  }
  else if(idealsleephours>actualsleephours)
  {
    console.log('You need more sleep.')
  }
  else
  {
    console.log('You have overslept')
  }
  
}
console.log(getActualSleepHours())
console.log(getIdealSleepHours())
console.log(calculatesleepdebt())
