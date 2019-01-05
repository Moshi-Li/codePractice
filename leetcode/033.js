const search = (nums, target) => {
    const binarySearch = (nums, target, left, right) => {
        console.log('=====')
        console.log('left: ' + left)
        console.log('right: ' + right)
        console.log('mid: ' + (left + Math.floor((right - left) / 2)))

        if (nums[left] === target) return left;
        if (nums[right] === target) return right;
        if (left >= right) return -1
        var mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
            if (nums[mid] < target && target < nums[right]) {
                return binarySearch(nums, target, mid + 1, right)
            }
            else {
                if (target < nums[mid + Math.floor((right - mid) / 2)]) {
                    return binarySearch(nums, target, mid + 1, mid + Math.floor((right - mid) / 2))
                } else {
                    return binarySearch(nums, target, mid + Math.floor((right - mid) / 2), right)
                }
            }
        } else {
            if (nums[left] < target && target < nums[mid]) {
                return binarySearch(nums, target, left, mid - 1)
            } else {
                console.log(left + Math.floor((mid - left) / 2))
                if (target < nums[left + Math.floor((mid - left) / 2)]) {
                    return binarySearch(nums, target, left, nums[left + Math.floor((mid - left) / 2)])
                } else {
                    return binarySearch(nums, target, nums[left + Math.floor((mid - left) / 2)], mid - 1)
                }
            }
        }
    }
    return binarySearch(nums, target, 0, nums.length - 1)
};
console.log(search([5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4,], 2))