const sulotion = (nums, sum) => {
    if(!nums || nums.length <= 1) return [];
    let newNums = [...nums].sort((a, b) => a - b);
    let leftIndex = 0;
    let rightIndex = newNums.length - 1;
    while(leftIndex !== rightIndex) {
        const currentSum = newNums[leftIndex] + newNums[rightIndex];
        if (currentSum === sum) {
            break;
        } else if(currentSum < sum) {
            leftIndex++;
        } else if(currentSum > sum) {
            rightIndex--;
        }
    }

    const oldFirstIndex = nums.findIndex(num => num === newNums[leftIndex]);
    const oldSecondIndex = nums.findIndex(num => num === newNums[rightIndex]);

    return [oldFirstIndex, oldSecondIndex].sort((a, b) => a - b);
}

