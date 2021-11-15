var marks = [45, 54, 78, 85, 90, 23, 28, 64, 33, 87];
var max = marks[0];
for(var i = 0; i <= marks.length; i++){
    var element = marks[i];
    if( element > max ){
        max = element;
    }
}
console.log("Height mark is ", max);