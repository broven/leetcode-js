/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let index1, index2
    index1 = 0
    for (index1 = 0; index1 < nums.length; index1++) {
        // 考虑边界情况 0  去掉`=` 条件
        // 考虑负数 条件 直接注释掉
        // if (target < nums[index1]){
        //     return
        // }
        const remain = target - nums[index1]
        for (index2 = index1 + 1; index2 < nums.length; index2++) {
            if(nums[index2] == remain) break;
        }
        if (nums[index1] + nums[index2] == target) {
            return [index1, index2]
        }
    }
};


// console.log(twoSum([0,4,3,0], 0))
// console.log(twoSum([-1,-2,-3,-4,-5], -8))