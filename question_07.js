function moveZeroes(nums) {
    let insertPos = 0;
  
    // Move all nonzero elements to the front of the array
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[insertPos] = nums[i];
        insertPos++;
      }
    }
  
    // Fill the remaining elements with zeros
    while (insertPos < nums.length) {
      nums[insertPos] = 0;
      insertPos++;
    }
  }