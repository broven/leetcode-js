/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const add = (index) => {
        const currentValue = digits[index];
        if (currentValue === 9) {
            digits[index] = 0;
            if (index === 0) {
                digits.unshift(1);
            } else {
                add(index - 1);
            }
        } else {
            digits[index] += 1;
        }
    }
    add(digits.length - 1);
    return digits;

};
// @lc code=end
console.log(plusOne([1,2,3]))
