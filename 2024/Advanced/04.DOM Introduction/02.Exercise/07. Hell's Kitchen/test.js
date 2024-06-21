// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);
//    const restaurantDataLog = {}
//    function getBestRestaurant(restaurantDataLog) {
//       let lastAverage = 0;
//       let bestOne;
//       for (let restaurant in restaurantDataLog) {
//          let currentAverage = restaurantDataLog[restaurant].average()
//          if (lastAverage < currentAverage) {
//             lastAverage = currentAverage
//             bestOne = restaurant;
//          }
//       }
//       return bestOne
//    }
//    function solution(array) {
//       for (let data of array) {
//          let currentData = data.split(' - ');
//          [restaurant, staffString] = currentData;
//          staffArray = staffString.split(', ')
//          debugger
//          if (!restaurantDataLog[restaurant]) {
//             restaurantDataLog[restaurant] = {
//                restaurant,
//                staff: {},
//                salaryArray: [],
//                average() {
//                   return this.salaryArray.reduce((a, b) => a + b) / this.salaryArray.length
//                },
//                sortStaff() {
//                   return Object.entries(this.staff).sort((a, b) => b - a)
//                }
//             };
//             for (let worker of staffArray) {
//                [workerName, workerSalary] = worker.split(' ')
//                workerSalary = Number(workerSalary);
//                restaurantDataLog[restaurant].staff[workerName] = workerSalary
//                restaurantDataLog[restaurant].salaryArray.push(workerSalary)
//             }
//          };
//       }
//    }
//    function onClick() {
//       const input = document.querySelector('#inputs>textarea');
//       const topRestaurantParagraph = document.querySelector('#bestRestaurant>p');
//       const workersParagraph = document.querySelector('#outputs #workers p')
//       // const textToArray = Array.from(textarea.value.split('\n').filter(el => el.trim() != ''))
//       const array = JSON.parse(input.value)
//       solution(array)
//       let rName = getBestRestaurant(restaurantDataLog)
//       let avgSalary = Number(restaurantDataLog[rName].average()).toFixed(2)
//       debugger
//       let staffArraySorted = restaurantDataLog[rName].sortStaff()
//       let bestSalary = 0;
//       let allWorkersStr = ''
//       if (staffArraySorted.length > 0){     
//          for (let i = 0; i<staffArraySorted.length; i++) {
//             let [w, s] = staffArraySorted[i]
//             if (i == 0){ bestSalary = Number(s)}
//             allWorkersStr += `Name: ${w} With Salary: ${Number(s)} `
//          }
//       }
//       topRestaurantParagraph.innerText = `Name: ${rName} Average Salary: ${avgSalary} Best Salary: ${bestSalary}`;
//       workersParagraph.innerText = allWorkersStr;
//    }
// }
