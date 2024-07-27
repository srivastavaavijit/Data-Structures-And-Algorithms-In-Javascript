function binarySearch(arr,x){

    let low = 0;
    let high = arr.length-1;
    let mid;
    while(low<=high){
        mid = low + Math.floor((high-low)/2);

        if(arr[mid]==x)
            return mid;
        
        else if(arr[mid] < x)
            low = mid + 1;

        else
            high = mid - 1;
    }
    return -1;
};

console.log(binarySearch([10,20,30,40,50,60,70],90));
