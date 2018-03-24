/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 负数
    // 结尾是0的数
    // 32bit 返回0
    let isNegative = x < 0
    let arr = []
    x = Math.abs(x)


    while (x !== 0) {
        let current = Math.round((x / 10 - Math.floor(x / 10)) * 10)
        arr.push(current)
        x = Math.floor(x / 10)
    }
    let result =  Number((isNegative ? '-' : '') + arr.join(''))
    // capture greater than 32bit
    if (Math.abs(result) > Math.pow(2, 31) - 1) {
        return 0;
    }
    return result

};


// console.log(reverse(-123))
// console.log(reverse(120))
// console.log(reverse(1534236469))