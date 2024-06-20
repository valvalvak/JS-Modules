function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchString = document.getElementById("searchField");
      let tableElements = Array.from(document.querySelectorAll("tbody tr"));
      let textValue = searchString.value.toLowerCase();

      if (textValue.length > 0){
         tableElements.forEach(element => {
            let currentString = element.textContent.toLowerCase();
            if (currentString.includes(textValue)) {
               element.classList.add("select");
            } else {
               element.classList.remove("select")
            }
         });
      searchString.value = "";}
   }
}