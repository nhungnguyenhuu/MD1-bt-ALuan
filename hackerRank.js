function plusMinus(arr) {
    // Write your code here
// let A = [0, 0, 0];
    let tongA = 0;
    let tongD = 0;
    let tongO = 0;
    for(let i= 0; i<arr.length; i++){
        if(arr[i]==0){
            tongO +=1;
        }else if(arr[i]>0){
            tongD += 1;
        }else{
            tongA += 1;
        }
    }
    tongD= tongD/arr.length;
    tongA = tongA/arr.length;
    tongO = tongO/arr.length;

    return tongD+ tongA+ tongO;
}
plusMinus([1, -3, 4, -5, 0, -2]);