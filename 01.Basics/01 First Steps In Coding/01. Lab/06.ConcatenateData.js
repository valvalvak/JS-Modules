function concatenateData([name, surname, age, town]){
    let result = `You are ${name} ${surname}, a ${age}-years old person from ${town}.`
    console.log(result)
}
concatenateData(["Valentin", "Vakrilov", 40, "Sofia"])