var searchInsert = function(nums, target) {
    //TODO
    const LogNN_check = function(nums, target){
        // Loop useing binary for better performance
    } 

    const Nsqure_check = function (nums, target) {
        if (target <= nums[0]) return 0;
        if (target >  nums[nums.length-1]) return nums.length  

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] === target) return i;
            if(nums[i-1] < target && target < nums[i]) return i;
        }
        
        return nums.length
    }
    return Nsqure_check(nums,target)
};