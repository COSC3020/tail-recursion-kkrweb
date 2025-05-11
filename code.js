// Kane Kriz
// UWYO COSC 3020 Algorithms - tail recursion primary js file
// 11 May 2025
//
//
//



//



//tail recursive fib
function fib(n)
{
    function fibHelper(currentIteration, fibArr)
    {
        if(currentIteration > n)
        {
            return fibArr;
        }

        if(currentIteration == 0) 
        {
            fibArr.push(0);
            return fibHelper(currentIteration + 1, fibArr);
        } 
          
        else if(currentIteration == 1) 
        {
            fibArr.push(1);
            return fibHelper(currentIteration + 1, fibArr);
        } 
          
        else 
        {
            fibArr.push(fibArr[currentIteration - 1] + fibArr[currentIteration - 2]);
            return fibHelper(currentIteration + 1, fibArr);
        }
    }

    return fibHelper(0, []);
}

//
