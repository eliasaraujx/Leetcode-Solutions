# Remove Element

- **Link**: [LeetCode Problem](https://leetcode.com/problems/remove-element/)
- **Difficulty**: Easy

## Problem
Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place and return the new length of `nums`. The order of elements can be changed, and the elements after the new length are irrelevant.

## Solution
- Use two pointers:
  - `i` to traverse each element in `nums`.
  - `j` to track the position of elements not equal to `val`.
- For each element, if `nums[i]` is not equal to `val`, place it at `nums[j]` and increment `j`.
- Return `j` as the new length of the modified array.

## Complexity
- **Time**: O(n)
- **Space**: O(1) (in-place)
