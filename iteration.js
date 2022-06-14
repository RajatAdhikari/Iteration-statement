const Find_Digits = (N) => 
{
  let count=0;
  while(N!==0){
    count=count+1;
    N=parseInt(N/10)
    
  }
  return count
	 
};
console.log(Find_Digits(1234));

const Find_Five = (N) => 
{
	 let count=0;
	 let digit;
	 while(N!==0){
	   digit=N%10;
	   N=parseInt(N/10);
	   if (digit==5){
	     count++;
	   }
	 }
	 return count;
};
console.log(Find_Five(1555456));

const findSum = (n) => {
    let sum=0
       let item=2
       while(item<=n){
         sum=sum+item;
         item+=2;
       }
       return sum;
   };
   console.log(findSum(12345));
   

   const Number_Sum = (N) => 
   {
       let sum=0;
     while(N!==0){
       let digit=N%10;
       N=parseInt(N/10);
       sum=sum+digit;
     }
     return sum;
   };
   console.log(Number_Sum(12354));

   

   const Print_pattern = (N) => 
   {
     let i,j;
   
     for(i=0;i<N;i++){
        let result=''
       for(j=0;j<=i;j++){
         result=result+'*'
       }
       console.log(result)
   
     }
   
   };
   Print_pattern(5);
   
   const Prime_Check = (n) => {
    for (var i = 2; i < n; i++) {
      if (n % i !== 0) {
        return "YES";
      } else {
        return "NO";
      }
    }
    
  };
  console.log(Prime_Check(11))

  const printNumbers = (n) => {
    let result=''
    let i=1
    while(i<=n)
    {
      result=result+i+' '
      i++;
    }
    console.log(result);
};
printNumbers(5);

const Print_Table = (N) => 
{
let result=''
  let i
  for(i=1;i<=10;i++){
    result=N+' '+'*'+' '+i+' '+ '=' +' '+ N*i

    console.log(result);
  }
};
Print_Table(3);

const Print_Odd = (N) => 
   {
        console.log('2')
        let num=3
        while(num<=N){
          console.log(num)
          num+=2;
        }
   };
   console.log(20);




