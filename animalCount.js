function animalCalculator(depth){
    var animal = 0;
    if(depth <= 10){
        animal = depth * 50;
    }
    else if( depth <= 20 ){
        var firstPart = 10 * 50;
        var secondPart = ( depth - 10 ) * 100;
        animal = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var thirdPart = ( depth - 20 ) * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal
} 
var totalAnimal = animalCalculator(32)
console.log(totalAnimal)