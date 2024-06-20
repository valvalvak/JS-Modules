function colorize() {
    // SOLUTION CONDITIONS:
    
    // Write a JS function that changes the color of all even rows when the user clicks a button. 
    // Apply the color "Teal" to the target rows.
    // There will be no input/output, your program should instead modify the DOM of the given HTML document.
    
    // LAB SOLUTION
    
    // let rows = document.querySelectorAll("table tr");
    // let index = 0;
    // for (let row of rows) {
    //     index++;
    //     if (index % 2 == 0)
    //         row.style.background = "teal";
    // }
    
    // MY TEST SOLUTION
    let rows = document.querySelectorAll("table tr");
    for (let i = 0; i < rows.length; i++) {
        if (i % 2 != 0) {
            rows[i].style.background = "teal"
        }
    }

}