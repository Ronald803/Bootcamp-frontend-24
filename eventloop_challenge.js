console.log(1);
setTimeout(function() {console.log(2);}, 1000);
setTimeout(function() {console.log(3);}, 0);
console.log(4);

/*
    ORDEN DE EJECUCIÒN
    1   // console.log(1)
    4   // console.log(4)
    3   // setTimeout(function() {console.log(3);}, 0);
    2   // setTimeout(function() {console.log(2);}, 1000);

*/