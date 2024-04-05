var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(startIndex, currentCombination, currentSum){
        if(currentSum === target){
            result.push([...currentCombination]);
            return;
        }

        for(let i = startIndex; i < candidates.length; i++){
            const num = candidates[i];
            if(currentSum + num <= target){
                currentCombination.push(num);
                backtrack(i, currentCombination, currentSum + num);
                currentCombination.pop();
            }
        }
    }
    backtrack(0,[],0);
    return result;
};

//Example usage:
console.log(combinationSum([2,3,6,7],7));
console.log(combinationSum([2,3,5],8));
console.log(combinationSum([2],1));