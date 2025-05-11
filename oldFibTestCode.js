// Original auto-provided test code from the original fibonnaci invariants exercise, pasted here for convienence.

// This is not my code and was provided when making that respective repo






////








const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns;
    fib_solns[1] = 1;
    if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(test);
