function merge(nums1, m, nums2, n) {
    let i = m - 1; // Index of last element in nums1
    let j = n - 1; // Index of last element in nums2
    let k = m + n - 1; // Index of last element in the merged array
  
    // Merge from the rightmost elements of nums1 and nums2
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    // Copy any remaining elements from nums2 to nums1
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }