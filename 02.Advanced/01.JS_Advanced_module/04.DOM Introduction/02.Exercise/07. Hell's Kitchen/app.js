function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const restaurantDataLog = {
      average() {
         Math.sum(this.salaryArray) / this.salaryArray.length
      },
      bestWorkerSalary() {
         Object.entries(this.staff).filter((a, z) => { z - a })
      }
   }

   function solution(array) {
      array.forEach(restData => {
         let currentData = restData.split(" - ");
         [restaurant, staffArray] = currentData;
         if (!restaurantDataLog[restaurant]) {
            restaurantDataLog[restaurant] = restaurant,
               staff = {},
               salaryArray = []
         }
         for (let worker of staffArray) {
            [workerName, workerSalary] = worker
            if (!restaurantDataLog[restaurant].staff[workerName]) {
               restaurantDataLog[restaurant].staff[worker] = workerSalary,
                  restaurantDataLog.salaryArray.push()
            }
         }
      });
      getBestRestaurantSalary(result => {
         for (let mayTheBestWin in restaurantDataLog) {
            
         }
      })
   }
   function onClick() {

   };
};
