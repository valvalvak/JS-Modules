// // table creation
// let array = JSON.parse(input)
// let outputArray = ["<table>"]
// outputArray.push(makeKeyRow(array))
// array.forEach(obj => outputArray.push(makeKeyRow(obj)))
// outputArray.push(["</table>"])
// // make of key row
// function makeKeyRow(array) {
//     let result = '  <tr>'
//     Object.keys(array[0]).forEach(key => {
//         result += `<th>${escapeHtml(key)}</th>`
//     })
//     result += '</tr>'
//     return result
// }
// //make value row
// function makeValueRow(obj) {
//     let result = '  <tr>'
//     Object.values(obj).forEach(value => {
//         result += `<td>${escapeHtml(value)}</td>`
//     })
//     result += '</tr>'
//     return result
// }
// // escape special HTML tags
// function escapeHtml(value) {
//     return value
//         .toString()
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&#039;')
// }
// console.log(array)
// console.log(outputArray)