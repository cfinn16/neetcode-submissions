class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0
        let r = 1
        while (l < nums.length - 1) {
            while (r < nums.length) {
                if (nums[l] + nums[r] === target) {
                    return [l, r]
                } else {
                    r++
                }
            }
            l++
            r = l + 1
        }
    }
}
