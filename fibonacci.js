const fibs = (n) => {
    const resultArray = [];
    for(let i = 0; i <= n; i++){
        if (i == 0){
            resultArray.push(0)
        }
        else if(i == 1){
            resultArray.push(1);
        }

        else{
            resultArray.push(resultArray[i-1] + resultArray[i-2]);
        }
    }
    return resultArray;
}

const fibs = (n) => {
    const resultArray = [];
    for(let i = 0; i <= n; i++){
        if (i == 0){
            resultArray.push(0)
        }
        else if(i == 1){
            resultArray.push(1);
        }

        else{
            resultArray.push(resultArray[i-1] + resultArray[i-2]);
        }
    }
    return resultArray;
}