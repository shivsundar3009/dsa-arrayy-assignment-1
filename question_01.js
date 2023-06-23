function twoSum(nums, target) {
    const numMap = {}; // Stores num: index pairs
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
  
      if (complement in numMap) {
        return [numMap[complement], i];
      }
  
      numMap[num] = i;
    }
  
    return []; // No solution found
  }