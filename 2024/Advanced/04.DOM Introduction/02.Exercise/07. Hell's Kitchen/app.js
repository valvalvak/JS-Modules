function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function addData(array) {
      const restData = {}
      for (let el of array) {
         let getRestName = el.split(' - ');
         let [rName, staffStr] = getRestName;
         let staffArr = staffStr.split(', ')
         if (!restData[rName]) {
            restData[rName] = {
               workers: {},
               salaries: [],
            };
         }
         for (let w of staffArr) {
            let [wName, wSalary] = w.split(' ')
            wSalary = Number(wSalary)
            restData[rName].workers[wName] = wSalary
            restData[rName].salaries.push(wSalary)
         }
      }
      return restData
   }
   function findBestRestData(objData) {
      let restaurantName = ''
      let bestAvgSalary = 0
      let bestWorkers = []
      for (let restName in objData) {
         let currentRestSalaries = objData[restName].salaries
         let avgSalary = currentRestSalaries.reduce((a, b) => a + b) / objData[restName].salaries.length
         if (bestAvgSalary < avgSalary) {
            restaurantName = restName;
            bestAvgSalary = avgSalary;
            bestWorkers = Object.entries(objData[restName].workers).sort((a, b) => b[1] - a[1])
         }
      }
      return {
         restaurantName,
         bestAvgSalary,
         bestWorkers
      };
   }
   function outputData(objData) {
      // debugger
      let rName = objData.restaurantName;
      let avgSal = Number(objData.bestAvgSalary).toFixed(2);
      let restStr = `Name: ${rName} Average Salary: ${avgSal} Best Salary: ${Number(objData.bestWorkers[0][1]).toFixed(2)}`;
      let workersStr = ''
      for (let workerData of objData.bestWorkers) {
         let [workerName, workerSalary] = workerData
         workerSalary = Number(workerSalary)
         workersStr += `Name: ${workerName} With Salary: ${workerSalary} `
      }
      return {
         restStr,
         workersStr
      }
   }
   function onClick() {
      const input = document.querySelector('#inputs>textarea');
      const topRestaurantParagraph = document.querySelector('#bestRestaurant>p');
      const workersParagraph = document.querySelector('#outputs #workers p')
      const array = JSON.parse(input.value)
      const restData = addData(array);
      const bestRest = findBestRestData(restData);
      const stringResult = outputData(bestRest)
      topRestaurantParagraph.innerText = stringResult.restStr
      workersParagraph.innerText = stringResult.workersStr
   }
}