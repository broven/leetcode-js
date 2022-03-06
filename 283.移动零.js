/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
// splice
// 双循环
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== 0) continue;
        for(let j = i; j < nums.length; j++) {
            // 这时numi 肯定是0, 那么目标就是找到下一个不是0的数和他交换
            if (nums[j] !== 0) {
                nums[i] = nums[j];
                nums[j] = 0;
                break;
            }
        }
    }


};
// @lc code=end

