/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0, j = s.length-1;
    while(i < j) {
       const temp = s[j];
       s[j] = s[i];
       s[i] = temp;
       i++;
       j--;
    }
};
// @lc code=end
console.log(reverseString(["H","a","n","n","a","h"]));
