/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length <= k) {
    return [Math.max(...nums)];
  }

  const queue = [];
  const result = [];

  for (let i = 0; i < k; i++) {
    if (queue[0] === undefined || queue[0] <= nums[i]) {
      queue.unshift(nums[i]);
    } else {
      while (queue.length && nums[i] >= queue[queue.length - 1]) {
        queue.pop();
      }
      queue.push(nums[i]);
    }
  }

  result.push(queue[0]);

  for (let i = k; i < nums.length; i++) {
    const toRemove = nums[i - k];
    const toAdd = nums[i];

    if (toRemove === queue[0]) {
      queue.shift();
    }

    while (queue.length && queue[queue.length - 1] < toAdd) {
      queue.pop();
    }
    queue.push(toAdd);
    result.push(queue[0]);
  }

  return result;
};

console.log(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4));
