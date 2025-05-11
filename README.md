# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.





//




Name: Kane Kriz

Start Date: 3 April 2025

Feedback Request 1 Date: 11 May 2025




//






Response: 


The primary function fib(n) initiates computation by calling `fibHelper(0, [])`.

This helper function maintains the current position in the sequence via `currentIteration` and the overall continued results via `fibArr`.

The helper first verifies whether processing has reached the target position $n$ through the condition `if(currentIteration > n)`.

If completed, it returns the stored sequence with `return fibArr`.

At position 0, it records 0 in the results array via `fibArr.push(0)`.

At position 1, it records 1 instead with `fibArr.push(1)`.

Positions compute values via adding the previous two recorded values through `fibArr.push(fibArr[currentIteration - 1] + fibArr[currentIteration - 2])`, as expected for a working fib functionality.

The recursion progresses by incrementing the position counter via return `fibHelper(currentIteration + 1, fibArr)`.

The implementation takes $n + 1$ iterations to generate the desired sequence and value for an input number.

Thus, the overall worst case asymptotic complexity is $Θ(n)$.

The iterative version performs the same sequence of operations but replaces the tail recursion.

Each implementation runs through $n + 1$ steps with constant work per step.

Thus, the overall worst case asympotic complexity above of $Θ(n)$ is shared between the iterative and tail recursive fib implementations.







//





Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.



Citations:


Original Approved Fib exercise js and test js file, which have been pasted into this repo.

https://javascripttypescriptbooks.com/19/11/1/4/

