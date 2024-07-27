function search(arr, target, firstOccurence){

    let start = 0, end = arr.length - 1;
    let first = -1, last = -1;
    let mid;

    while(start <= end){

        mid = start + Math.floor((end - start)/2);

        if(arr[mid] == target){
            if(firstOccurence){
                first = mid;
                end = mid - 1;
            }
            else{
                last = mid;
                start = mid + 1;
            }
        }

        else if(arr[mid]< target)
            start = mid + 1;

        else
            end = mid - 1;
    }

    if(firstOccurence)
        return first;
    else
        return last;
};

    var searchRange = function(arr, target){
    let first = search(arr, target, true);
    let last = search(arr, target, false);

    let answer = [first, last];

    return answer;
};

console.log(searchRange([2,3,4,4,4,5,6,7], 4));