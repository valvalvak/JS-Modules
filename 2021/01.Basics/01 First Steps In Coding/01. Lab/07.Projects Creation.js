function projects([name, jobs]){
    jobs = Number(jobs)
    let estimatedTime = jobs * 3
    console.log(`The architect ${name} will need ${estimatedTime} hours to complete ${jobs} project/s.`)
}
projects(["Vak", 3])
