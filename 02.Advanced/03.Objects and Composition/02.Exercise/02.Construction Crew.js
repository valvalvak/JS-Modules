function solve(obj){
    obj = {
        weight,
        experience,
        levelOfHydrated,
        dizziness 
      }
    if (obj.dizziness == false){
        obj.levelOfHydrated += 0.1*obj.weight*obj.experience;
        obj.dizziness = false;
    }
    return obj

}
console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));
