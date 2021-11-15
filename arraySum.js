function getArraySum(num){
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        sum = sum + element;
    }
    return sum;
}

var num = [ 23, 25, 44, 85, 23, 64, 54, 75];
var arraySum = getArraySum(num);
console.log("Total number is : ", arraySum);

var total = getArraySum([34, 54, 9, 1, 32, 56])
console.log("Total is : ", total)