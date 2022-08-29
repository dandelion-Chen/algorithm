const sulotion = (nums, sum) => {
    if(!nums || nums.length <= 1) return [];
    let arrs = [];
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
     for(let j=0; j < nums.length; j++) {
        if(nums[j] == newNums[leftIndex] && !~arrs.indexOf(j)){
            arrs.push(j);
        }
        if(nums[j] == newNums[rightIndex] && !~arrs.indexOf(j)) {
            arrs.push(j);
        }
    }
    
    return arrs;
}

