function removeElement(nums, val) {
    let k = 0; // Number of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  }
  