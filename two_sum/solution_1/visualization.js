var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length - 1; ++i) {

        for (let j = i + 1; j < nums.length; ++j) {
            sum = nums[i] + nums[j]

            {
                // visualization code
                viz_obj_1 = [nums, { "nums[i]": i, "nums[j]": j }]
                viz_obj_2 = [
                    { "variable": "nums", "value": `[${nums}]` },
                    { "variable": "target", "value": target },
                    { "variable": "nums[i] + nums[j]", "value": sum },
                    { "variable": "nums[i] + nums[j] == target", "value": sum == target }
                ]
                debugger;
            }

            if (sum == target) {

                return [i, j]
            }
        }
    }
};

twoSum([5, 3, 2], 5);
debugger;
twoSum([8, 13, 24, 7, 45], 20);
debugger;
twoSum([4, 2, 7, 3, 11, 9, 5], 12);
debugger;