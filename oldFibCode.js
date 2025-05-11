// From my approved fibonacci invariants exercise, unchanged







// Kane Kriz
// UWYO COSC 3020
// 3 Feb 2025
//
//


//fibbonaci function
function fib(n)
{
    var currentIteration = 0;
    var fibArr = [];

    function recHelper()
    {
        if(currentIteration > n) //it has reached the desired index, 
            //currentIteraction is now greater so it will just return fibArr which is now filled up as desired
        {
            return fibArr;
        }
        if(currentIteration === 0) //trying to get better at a habit of using === and == better appropriately
        {
            fibArr.push(0);
        } 
        else if(currentIteration === 1) 
        {
            fibArr.push(1);
        } 
        else 
        {
            fibArr.push(fibArr[currentIteration - 1] + fibArr[currentIteration - 2]);
        }
        currentIteration++;
        return recHelper();
    }
    return recHelper();
}
