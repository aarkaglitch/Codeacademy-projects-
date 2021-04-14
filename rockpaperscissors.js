function getUserChoice(userInput)
{
  userInput=userInput.toLowerCase()
  if (userInput==='rock'||userInput==='paper'||userInput==='scissors')
  {
   console.log('you have chosen ' +userInput)
  }
  else
  {
    console.log('User input not defined')
  }
}
function getComputerChoice()
{
  let a=Math.floor(Math.random() * 3);
  if(a===0)
  {
    return 'rock'
  }
  if(a===1)
  {
    return 'paper'
  }
  if(a===2)
  {
    return 'scissors'
  }
}
console.log(getComputerChoice())
function determineWinner(computerChoice,userChoice)
{
  if(userChoice===computerChoice)
  {
    return 'the game was a tie'
  }
  else if(userChoice==='rock'&&computerChoice==='paper')
  {
    return 'the computer won the game'
  }
  else if(userChoice==='scissors'&&computerChoice==='rock')
  {
    return 'the computer has won the game'
  }
  else if(userChoice==='paper'&& computerChoice==='scissors')
  {
    return 'the computer has won the game'
  }
  else 
  {
    return 'the user has won the game'
  }
  }
getUserChoice('rock')
console.log('the computer has chosen '+getComputerChoice())
console.log(determineWinner(getComputerChoice(),'rock'))
