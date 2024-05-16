function solution(...array){
    let largest = array[0];
    for (el of array){
        if (largest < el){
            largest = el;
        }
    }
    console.log(`The largest number is ${largest}.`)   
}

solution(5, -3, 16)
solution(-3, -5, -22.5)
