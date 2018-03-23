/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {}
   for (let i = 0; i < nums.length; i++) {

        if(target - nums[i] in dict) {
           return [i, dict[target - nums[i]]]
        }
        else {
           dict[nums[i]] = i
        }
   }
};
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([0,4,3,0], 0))
// console.log(twoSum([-1,-2,-3,-4,-5], -8))