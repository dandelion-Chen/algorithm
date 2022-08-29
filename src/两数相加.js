const sulotion = (nums, sum) => {
    if(!nums || nums.length <= 1) return [];
    let newNums = [...nums.sort((a, b) => a - b)];
    const leftIndex = 0;
    const rightIndex = newNums.length - 1;
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
    return [nums.findIndex(num => num === newNums[leftIndex]), nums.findIndex(num => num === newNums[rightIndex])].sort((a, b) => a - b);
}

