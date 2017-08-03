function test() {
    var n = 9;

    function add() {
        n++;
        console.log(n);
    };
    return {
        n: n,
        add: add
    }
}

var result = test(),
    result2 = test();
result.add();
result.add();
console.log(result.n);
result2.add(); 


答案：
10
11
9
10