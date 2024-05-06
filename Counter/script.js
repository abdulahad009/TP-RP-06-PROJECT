let counter = 0
function decrement(){
    counter = counter -1;
    // counter --;
    // counter -=1;
    document.getElementById('counter').innerHTML = counter;
}
function increment(){
    counter = counter + 1;
    // counter ++;
    // counter += 1 
    document.getElementById('counter').innerHTML = counter;
}
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}