/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 负数
    // 结尾是0的数
    // 32bit 返回0
    let isNegative = x < 0
    let reversed = 0
    x = Math.abs(x)


    while (x !== 0) {
        let current = x % 10
        reversed *= 10
        reversed += current
        x = (x - current) / 10
    }
    // capture greater than 32bit
    if (Math.abs(reversed) > Math.pow(2, 31) - 1) {
        return 0;
    }
    if (isNegative) {
        reversed *= -1
    }
    return reversed

};


// console.log(reverse(-123))
// console.log(reverse(120))
// console.log(reverse(1534236469))