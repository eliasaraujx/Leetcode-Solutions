# Merge Sorted Array

- **Link**: [LeetCode Problem](https://leetcode.com/problems/merge-sorted-array/)
- **Difficulty**: Easy

## Problem
You are given two sorted integer arrays `nums1` and `nums2`, along with two integers `m` and `n` representing the number of valid elements in `nums1` and `nums2`, respectively. `nums1` has enough space (zeroes) at the end to accommodate the elements of `nums2`. Merge `nums2` into `nums1` in non-decreasing order.

## Solution
- Use three pointers: 
  - `p1` for the last valid element in `nums1`.
  - `p2` for the last element in `nums2`.
  - `p` for the last position in `nums1`.
- Compare values from `nums1` and `nums2` starting from the back and place the largest value at the end of `nums1`.
- Continue until all elements of `nums2` are placed into `nums1`.

## Complexity
- **Time**: O(m + n)
- **Space**: O(1) (in-place)
