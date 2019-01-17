function getToOne(x){
    let iterations = 0;
    while (x != 1){
        if (x % 3 == 0){
            x = x / 3;
            iterations += 1;
            console.log(x);
        }
        else if (x % 3 == 1){
            x -= 1;
            iterations += 1;
            console.log(x);
        }
        else if (x % 3 == 2){
            x += 1;
            iterations += 1;
            console.log(x);
        }
    }
    document.getElementById("output").innerHTML = iterations;
}