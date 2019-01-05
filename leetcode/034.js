/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = (nums, target) => {
    const getMid = (left, right) => { return left + Math.floor((right - left) / 2) }
    const binarySearch = (nums, target, left, right, custom) => {

        if (left > right) {
            return -1;
        }
        var mid = getMid(left, right);
        if (nums[mid] === target) {
            return custom(nums, target, left, right, custom)
            /*
            if (mid === nums.length - 1 || nums[mid + 1] > nums[mid]) {
                return mid
            } else {
                return binarySearchG(nums, target, mid + 1, right)
            }*/

        } else if (nums[mid] < target) {
            return binarySearch(nums, target, mid + 1, right, custom)
        }
        else {
            return binarySearch(nums, target, left, mid - 1, custom)
        }
    }
    const customBig = (nums, target, left, right, custom) => {
        var mid = getMid(left, right)
        if (mid === nums.length - 1 || nums[mid + 1] > nums[mid]) {
            return mid
        } else {
            return binarySearch(nums, target, mid + 1, right, custom)
        }
    }

    const customSmall = (nums, target, left, right, custom) => {
        var mid = getMid(left, right)
        console.log(mid)
        if (mid === 0 || nums[mid - 1] < nums[mid]) {
            return mid
        } else {
            return binarySearch(nums, target, left, mid - 1, custom)
        }
    }

    return [binarySearch(nums, target, 0, nums.length, customSmall), binarySearch(nums, target, 0, nums.length, customBig)]

};
console.log(searchRange([1], 2))