function removeDuplicates(arr:number[]):number[]{
    let uniqueValue:number[] = [];
    const result = arr.filter(num=>{
        if (!uniqueValue.includes(num)) {
            uniqueValue.push(num);
            return true;
        };return false;
    })
    return result
}

