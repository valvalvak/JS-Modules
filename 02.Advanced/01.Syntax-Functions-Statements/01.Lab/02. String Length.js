function solution(str1, str2, str3) {
    allStrings = "";
    const listOfStrings = Array(str1, str2, str3);
    function concatenate(currentString) {
      allStrings += currentString;
      // return allStrings;
    }
    function averageCount(allStrings) {
      return Math.round(allStrings.length / listOfStrings.length);
    }
    listOfStrings.forEach(concatenate);
    console.log(allStrings.length);
    console.log(averageCount(allStrings));
  }

  //solution('chocolate', 'ice cream', 'cake')
  //solution('pasta', '5', '22.3')