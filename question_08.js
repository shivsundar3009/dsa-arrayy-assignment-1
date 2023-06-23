function findErrorNums(nums) {
    const n = nums.length;
    const numSet = new Set();
    let duplicate, missing;
  
    // Find the duplicate number
    for (let i = 0; i < n; i++) {
      if (numSet.has(nums[i])) {
        duplicate = nums[i];
      } else {
        numSet.add(nums[i]);
      }
    }
  
    // Find the missing number
    for (let i = 1; i <= n; i++) {
      if (!numSet.has(i)) {
        missing = i;
        break;
      }
    }
  
    return [duplicate, missing];
  }