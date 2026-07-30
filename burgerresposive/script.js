let myCounter = document.getElementById('counter');
let addition = document.getElementById('plus');
let subtraction = document.getElementById('minus');
let Price = document.getElementById('price')

let singlePrice = 12;
let count = 1;

let smallServe = document.getElementById('small');
let mediumServe = document.getElementById('medium');
let largeServe = document.getElementById('large');

let love = document.getElementById('heart');




addition.onclick = function(){
    count++;
    myCounter.innerText = count;
    Price.innerText =  singlePrice*count;
}

subtraction.onclick = function(){
    if(count >= 1){
        count--;
    myCounter.innerText = count;
    Price.innerText =  singlePrice*count;
    } 
}


smallServe.onclick = function(){
    singlePrice = 12;
    Price.innerText =  singlePrice*count;

    smallServe.style.backgroundColor = "";
    mediumServe.style.backgroundColor = "";
    largeServe.style.backgroundColor = "";

    smallServe.style.backgroundColor = "rgb(207, 78, 3)";
}

mediumServe.onclick = function(){
    singlePrice = 14;
    Price.innerText =  singlePrice*count;

    smallServe.style.backgroundColor = "";
    mediumServe.style.backgroundColor = "";
    largeServe.style.backgroundColor = "";

    mediumServe.style.backgroundColor = "rgb(207, 78, 3)";

}

largeServe.onclick = function(){
    singlePrice = 16;
    Price.innerText =  singlePrice*count;

    smallServe.style.backgroundColor = "";
    mediumServe.style.backgroundColor = "";
    largeServe.style.backgroundColor = "";

    largeServe.style.backgroundColor = "rgb(207, 78, 3)";

}

love.onclick = function(){
    if (love.style.color === "red") {
        love.style.color = ""; 
    } else {
        love.style.color = "red";
    }
}
