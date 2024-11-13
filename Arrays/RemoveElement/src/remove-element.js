var removeElement = function (nums, val) {
    let j = 0; // Ponteiro de gravação

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++
        }
    }

    return j;
};