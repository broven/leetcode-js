/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let i = 1;
    while(i < nums.length) {
        const previousValue = nums[i - 1];
        const currentValues = nums[i];
        if (currentValues === previousValue) {
            nums.splice(i, 1);
            continue;
        }
        i++;
    }
    return nums.length;
};
// @lc code=end
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
