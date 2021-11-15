function getUniqueName(num){
    var unique = [];
    for(var i = 0; i < num.length; i++ ){
        var element = num[i];
        var index = unique.indexOf(element); 
        if(index == -1){
            unique.push(element);
        }
    }
    return unique;
}
var num = [3, 4, 9, 12, 16, 3, 19, 4, 12, 23, 3];

var result = getUniqueName(num);
console.log(result);