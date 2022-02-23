/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashObj = {};
    for(const item of nums) {
        if (hashObj[item]) {
            return true;
        } else {
            hashObj[item] = true;
        }
    }
    return false;
    

};
// @lc code=end

