01.封装函数 f，使 f 的 this 指向指定的对象
function bindThis(f, oTarget) {
   return function(){
        return f.apply(oTarget, arguments);
    };
};//我的理解，这个之所以需要两个return，是因为arguments作为参数传递

或者

function bindThis(f, oTarget) {
	return  f.bind(oTarget);
}

/////////////////////////////////////////////////



02.查找数组元素位置
题目描述:找出元素 item 在给定数组 arr 中的位置
输出描述: 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

输入:[ 1, 2, 3, 4 ], 3
输出:2

function indexOf(arr, item) {
	var len = arr.length,
        rel = -1;
    for(var i = 0; i < len; i++) {
        if(arr[i] === item) {
            rel = i;
            break;
        }
    }
    return rel;
}

/////////////////////////////////////////////////


03.数组求和
题目描述:计算给定数组 arr 中所有元素的总和
输入描述: 数组中的元素均为 Number 类型
示例1
输入: [ 1, 2, 3, 4 ]
输出: 10

function sum(arr) {
	var num = 0,
        len = arr.length;
    while(len--) {
        num += arr[len];
    }
    return num;
}


/////////////////////////////////////////////////

04移除数组中的元素
题目描述
移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4, 2], 2
输出

[1, 3, 4]

function remove(arr, item) {
    var newArr = [],
        len = arr.length;
    for(var i = 0; i < len; i++) {
        if(arr[i] !== item) {
            newArr.push(arr[i])
        }
    }
	return newArr;
}




/////////////////////////////////////////////////

05移除数组中的元素

题目描述
移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
示例1
输入

[1, 2, 2, 3, 4, 2, 2], 2
输出

[1, 3, 4]

function removeWithoutCopy(arr, item) {
	var len = arr.length;
    for(var i = 0; i < len; i++) {
        if(arr[i] === item) {
            arr.splice(i, 1);
            removeWithoutCopy(arr, item);
            break;
        }
    }
    return arr;
}




/////////////////////////////////////////////////

06添加元素
题目描述
在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4],  10
输出

[1, 2, 3, 4, 10]

function append(arr, item) {
	var len = arr.length,
        newArr = [];
    for(var i = 0; i < len; i++) {
        newArr.push(arr[i]);
    }
    newArr.push(item);
     return newArr;
}






/////////////////////////////////////////////////

07删除数组最后一个元素

题目描述
删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4]
输出

[1, 2, 3]

function truncate(arr) {
	var len = arr.length - 1,
        newArr = [];
    for(var i = 0; i < len; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}



/////////////////////////////////////////////////


08添加元素
题目描述
在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4], 10
输出

[10, 1, 2, 3, 4]

function prepend(arr, item) {
	var len = arr.length,
        newArr = [item];
    for(var i = 0; i < len; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}



/////////////////////////////////////////////////

09删除数组第一个元素

题目描述
删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4]
输出

[2, 3, 4]

function curtail(arr) {
	var len = arr.length,
        newArr = [];
    for(var i = 1; i < len; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}


/////////////////////////////////////////////////

10数组合并
题目描述
合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4], ['a', 'b', 'c', 1]
输出

[1, 2, 3, 4, 'a', 'b', 'c', 1]

function concat(arr1, arr2) {
	var len1 = arr1.length,
        len2 = arr2.length,
        newArr = [];
    for(var i = 0; i < len1; i++) {
        newArr.push(arr1[i]);
    }
    for(var j = 0; j < len2; j++) {
        newArr.push(arr2[j]);
    }
    return newArr;
}





/////////////////////////////////////////////////
11添加元素
题目描述
在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4], 'z', 2
输出

[1, 2, 'z', 3, 4]

function insert(arr, item, index) {
	var newArr = arr.slice(0);
	newArr.splice(index, 0, item);
	return newArr;
};








/////////////////////////////////////////////////
12计数
题目描述
统计数组 arr 中值等于 item 的元素出现的次数
示例1
输入

[1, 2, 4, 4, 3, 4, 3], 4
输出

3

function count(arr, item) {
    var len =arr.length,
        num = 0;
    while(len--) {
        if(arr[len] === item) {
            num++;
        }
    } 
    return num   
}






/////////////////////////////////////////////////
13查找重复元素
题目描述
找出数组 arr 中重复出现过的元素
示例1
输入

[1, 2, 4, 4, 3, 3, 1, 5, 3]
输出

[1, 3, 4]
//有待简化
function duplicates(arr) {
    var len = arr.length,
        newArr = [],
        obj = {};
    for(var i = 0; i < len; i++) {
        if(obj[arr[i]]) {
            
            newArr.push(arr[i]);
        }else {
            obj[arr[i]] = true;
        }
    }   
    var k = newArr.length,
        obj = {},
        nArr = [];
    for(var j = 0; j < k; j++) {
        if(obj[newArr[j]] === undefined) {
            nArr.push(newArr[j]);
            obj[newArr[j]] = true;
        }
    }    
    nArr = nArr.sort(function(a, b) {
       return a - b; 
    });
     
    return nArr;
}
/////////////////////////////////////////////////
14求二次方
题目描述
为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
示例1
输入

[1, 2, 3, 4]
输出

[1, 4, 9, 16]

function square(arr) {
    var newArr = [],
        len = arr.length;
    for(var i = 0; i < len; i++) {
        newArr.push(arr[i]*arr[i]);
    }    
    return newArr;
}




/////////////////////////////////////////////////

15查找元素位置
题目描述
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
示例1
输入

'abcdefabc', 'a'
输出

[0, 6]


function findAllOccurrences(arr, target) {
    var newArr = [],
        len = arr.length;
    for(var i = 0; i < len; i++) {
        if(arr[i] === target) {
            newArr.push(i);
        }
    }    
    return newArr;
}




/////////////////////////////////////////////////

16计时器

题目描述
实现一个打点计时器，要求
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
3、第一个数需要立即输出

function count(start, end) {
    var time = null;
    console.log(start++);
    time = setInterval(function() {
        if(start <= end) {
            console.log(start++);
        }else {
            clearInterval(time);
        }
    }, 100);
    return {
        closeTime: function() {
            clearInterval(time);
        }
    }
}


var otime =  count(4, 339);





/////////////////////////////////////////////////
17函数传参
题目描述
将数组 arr 中的元素作为调用函数 fn 的参数
示例1
输入

function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']
输出

Hello, Ellie!

function argsAsArray(fn, arr) {
	return fn.apply(this, arr);
}






/////////////////////////////////////////////////
18返回函数
题目描述
实现函数 functionFunction，调用之后满足如下条件：
1、返回值为一个函数 f
2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
3、所有函数的参数数量为 1，且均为 String 类型
示例1
输入

functionFunction('Hello')('world')
输出

Hello, world

function functionFunction(str) {
    return function(two) {
       return str + ', ' + two;
    }
}




/////////////////////////////////////////////////
19使用 arguments
题目描述
函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
示例1
输入

1, 2, 3, 4
输出

10

function useArguments() {
	var num = 0,
        len = arguments.length;
    while(len--) {
        num += arguments[len];
    }
    return num;
}







/////////////////////////////////////////////////
20模块
题目描述
完成函数 createModule，调用之后满足如下要求：
1、返回一个对象
2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值


function createModule(str1, str2) {
	var obj = {
        greeting: str1,
        name: str2,
        sayIt: function() {
            return this.greeting+ ', ' +this.name;  
        }
    }
    return obj;
}





/////////////////////////////////////////////////
21二次封装函数
题目描述
已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
1、返回一个函数 result，该函数接受一个参数
2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
示例1
输入

var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };  partial(sayIt, 'Hello', 'Ellie')('!!!');
输出

Hello, Ellie!!!



答案：
function partial(fn, str1, str2) {
	return function(str3) {
        return fn(str1, str2, str3);
    }
}









/////////////////////////////////////////////////
22.改变上下文

题目描述
将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
示例1
输入

alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
输出

Yo, Rebecca!


function alterContext(fn, obj) {
    return fn.call(obj);
}



/////////////////////////////////////////////////
23二进制转换题目描述
将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
示例1
输入

65
输出

01000001

function convertToBinary(num) {
    var result = num.toString(2),
        arr = []
        len = 8 - result.length;
        while(len--) {
            arr.push('0');
        }
        arr.push(result)
    return arr.join('');
};

/////////////////////////////////////////////////
24使用闭包
题目描述
实现函数 makeClosures，调用之后满足如下条件：
1、返回一个函数数组 result，长度与 arr 相同
2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
示例1
输入

[1, 2, 3], function (x) { 
	return x * x; 
}
输出

4


function makeClosures(arr, fn) {
    var result = [];
	arr.forEach(function(x) {
       result.push(function(num) {
          return function() {
              return fn(num);
          } 
       }(x));   
    });
    return result;
}







/////////////////////////////////////////////////
25二进制转换

题目描述
给定二进制字符串，将其换算成对应的十进制数字
示例1
输入

'11000000'
输出

192

function base10(str) {
	return parseInt(str, 2);
}





/////////////////////////////////////////////////
26属性遍历

题目描述
找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
1、返回数组，格式为 key: value
2、结果数组不要求顺序
示例1
输入

var C = function() {
	this.foo = 'bar';
	this.baz = 'bim';
	}; 
C.prototype.bop = 'bip'; 
iterate(new C());
输出

["foo: bar", "baz: bim"]


function iterate(obj) {
    var res = [];
    for(var i in obj) {
        if(obj.hasOwnProperty(i)) {
            res.push(i + ": " + obj[i]);
        }
    }
    return res;
};





/////////////////////////////////////////////////
27字符串字符统计
题目描述
统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
1. 不限制 key 的顺序
2. 输入的字符串参数不会为空
3. 忽略空白字符
示例1
输入

'hello world'
输出

{h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}



function count(str) {
    var obj = {},
        len = str.length;
    for(var i = 0; i < len; i++) {
        if(obj[str[i]]) {
            obj[str[i]] += 1;
        }else {
            obj[str[i]] = 1;
        }
    }    
    return obj;
}



" "
:
1
d
:
1
e
:
1
h
:
1
l
:
3
o
:
2
r
:
1
w
:
1




/////////////////////////////////////////////////


























