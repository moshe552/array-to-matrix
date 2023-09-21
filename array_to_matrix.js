function arrayToMatrix(arr, cols) {
    const matrix = [];
    let tempRowArr = []
    for (let ind = 0, row = 0; row < cols; ind++) {
        tempRowArr.push(arr[ind]);
        if (tempRowArr.length % cols === 0) {
        matrix.push(tempRowArr);
        tempRowArr = [];
        row++
        }
    }
    return matrix
}

console.log(arrayToMatrix([1,2,3,4,5,6,7,8,9], 3)[2])