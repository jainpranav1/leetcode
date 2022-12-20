var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length - 1; ++i) {

        for (let j = i + 1; j < nums.length; ++j) {
            sum = nums[i] + nums[j]

            if (sum == target) {

                return [i, j]
            }
        }
    }
};

twoSum([5, 3, 2], 5);
twoSum([8, 13, 24, 7, 45], 20);
twoSum([4, 2, 7, 3, 11, 9, 5], 12);