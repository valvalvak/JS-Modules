function search() {
   // const cityArray = document.getElementById("towns").ariaValueMax;
   const citiesArray = Array.from(document.querySelectorAll("ul li"));
   const text = document.getElementById("searchText").value;
   let matchesFound = 0;
   citiesArray.forEach(element => {
      if(element.innerHTML.includes(text)) {
         element.style.fontWeight = "bold";
         element.style.textDecoration = "underline";
         matchesFound++;
      } else {
         element.style.fontWeight = "normal";
         element.style.textDecoration = "";
      }
   })
   document.getElementById("result").textContent = `${matchesFound} matches found`
}
