// Kane Kriz
// UWYO COSC 3020 Algorithms
// 11 May 2025
// tail recursive fib - test js file
//
//




//



const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');




//




function test() 
{
    assert.deepStrictEqual(fib(0), [0]);

  ////

    assert.deepStrictEqual(fib(1), [0, 1]);

  ////

    assert.deepStrictEqual(fib(2), [0, 1, 1]);

  ////

    assert.deepStrictEqual(fib(5), [0, 1, 1, 2, 3, 5]);

  ////

    assert.deepStrictEqual(fib(8), [0, 1, 1, 2, 3, 5, 8, 13, 21]);

  ////

    assert.deepStrictEqual(fib(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);

  ////

    assert.deepStrictEqual(fib(12), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
}

//

test();
