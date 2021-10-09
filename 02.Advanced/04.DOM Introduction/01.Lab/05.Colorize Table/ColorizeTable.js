function colorize() {
    const rows = document.querySelectorAll('table tr');

    for(let i = 1;i < rows.length;i += 2){
        rows[i].style.backgroundColor = 'teal';
    }
}
/**
 * 2nd solution follows:
 */
// function colorize() {
//     let rows = document.querySelectorAll("table tr");
//     let index = 0;
//     for(let row of rows) {
//         index++;
//         if(index % 2 == 0) {
//             row.style.background = "teal";
//         }
//     }
// }
