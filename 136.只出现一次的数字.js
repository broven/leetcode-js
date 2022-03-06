/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hashObj = {};
    for(let i = 0; i < nums.length; i++) {
        if(typeof hashObj[nums[i]] === 'undefined') {
            hashObj[nums[i]] = false;
        } else if (hashObj[nums[i]] === false) {
            hashObj[nums[i]] = true;
        }
    }
    for(const j in hashObj) {
        if (hashObj[j] === false) {
            return j;
        }
    }


};
// @lc code=end

