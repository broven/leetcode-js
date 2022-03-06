/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 解法2 哈希表
    const resultArr = [];
    if (nums1.length > nums2.length) return intersect(nums2, nums1);
    const hashTable = {};
    const arrToCountHashTable = (nums, hashObj) => {
        for (const item of nums) {
            if (!hashObj[item]) {
                hashObj[item] = 1;
            } else {
                hashObj[item] += 1;
            }
        }
    }
    arrToCountHashTable(nums1, hashTable);
    for (const item of nums2) {
        if (hashTable[item] && hashTable[item] > 0) {
            resultArr.push(item);
            hashTable[item] -= 1;
        }
    }
    return resultArr;
};
// @lc code=end
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var solution1 = function(nums1, nums2) {
    // 解法一, 硬上
    const resultArr = [];
    const getNumberCount = (nums, target) => {
        let count = 0;
        for (const i of nums) {
            if (i === +target) {
                count += 1;
            }
        }
        return count;
    }
    const has = (target) => {
        return resultArr.findIndex(item => item === +target) !== -1;
    }
    const bigArr = nums1.length >= nums2.length ? nums1 : nums2;
    const smallArr = nums1.length < nums2.length ? nums1 : nums2;
    for (const bigArrItem of bigArr) {
        const bigArrCount = getNumberCount(bigArr, bigArrItem);
        const smallArrCount = getNumberCount(smallArr, bigArrItem);
        const maxCount = Math.min(bigArrCount, smallArrCount);
        if (maxCount > 0 && !has(bigArrItem)) {
            for (let i = 0; i < maxCount; i++) {
                resultArr.push(bigArrItem);
            }
        }
    }
    return resultArr;
};
console.log(intersect([4,9,5], [9,4,9,8,4]));

