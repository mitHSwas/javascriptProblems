function reverseString(str){
    var reverse = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Bai Brother Ke Kbor!";
var result = reverseString(statement)
console.log(result)

var statement = reverseString('Mod Khabi Manus Hobi... Mod Kha!');
console.log(statement);