function solve() {
   document.querySelector('#btnSend').addEventListener('click',onClick);
   const restaurantDataLog = {}

   function splitInputArray(array) {
      array.forEach(restData => {
         let currentData = restData.split(" - ");
         [restaurant,staffArray] = currentData;
         if(!restaurant in restaurantDataLog) {
            
         }

         let staff = {
            worker,
            salary,
         };
         staffArray.forEach(worker => {
            let [w,s] = worker;
            staff.worker = w;
            staff.salary = s;
         });

      });
   }
   

   function onClick() {

   };
};
   