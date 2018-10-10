//大数乘法
//22.79%
var multiply = function(num1, num2) {
    function add(n1, n2){// 加法
        let long_str, short_str, re = "", carry = 0;
        if(n1.length > n2. length){
            long_str = n1; short_str = n2;
        }
        else{
            long_str = n2; short_str = n1;
        }
        let len1 = long_str.length, len2 = short_str.length;
        for(let i = 0; i < len2; i++){
            let cur = (+long_str[len1 - 1 - i]) + (+short_str[len2 - 1 - i]) + carry;
            carry = ~~(cur / 10);
            re += cur % 10;
        }
        for(let i = len2; i < len1; i++){
            let cur = (+long_str[len1 - 1 - i]) + carry;
            carry = ~~(cur / 10);
            re += cur % 10;
        }
        if(carry > 0)
            re += carry;
        re = re.split("").reverse().join("");
        return re;
    }
    if(num1 === "0" || num2 === "0")
        return "0";
    let len1 = num1.length, len2 = num2.length;
    re = "0";
    for(let i = 0; i < len1; i++){
        let cur_sum = "", carry = 0;
        for(let j = 0; j < len2; j++){
            let cur = num1[len1 - 1 -i] * num2[len2 - 1 - j] + carry;
            carry = ~~(cur / 10);
            cur_sum += cur % 10;
        }
        if(carry > 0)
            cur_sum += carry;
        cur_sum = cur_sum.split("").reverse().join("");
        for(let k = 0; k < i; k++)
            cur_sum += "0";
        re = add(cur_sum, re);
    }
    return re;
};