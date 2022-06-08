/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const map = {};
  let result = false;
  nums.forEach((num) => {
    if (map[num]) {
      result = true;
    } else {
      map[num] = true;
    }
  });
  return result;
};
