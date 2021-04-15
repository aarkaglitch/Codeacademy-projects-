let input="Hi thes is Aarka u";
console.log('The input is')
console.log(input)
let vowels=['a','e','i','o','u','A','E','I','O','U']
let resultArray=[]
for(let i=0;i<input.length;i++)
{

  for(let j=0;j<vowels.length;j++)
  {
    if(input[i]===vowels[j])
    {
        
        if (input[i]==='e')
        {
          resultArray.push('ee')
        }
        if (input[i]==='u')
        {
          resultArray.push('uu')
        }
        else
        {
          resultArray.push(input[i])
        }
     
    }
  }
}
console.log('the whale language of the input is ')
console.log(resultArray.join())
