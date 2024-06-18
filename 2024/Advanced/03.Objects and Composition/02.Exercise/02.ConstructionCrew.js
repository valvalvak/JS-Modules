function solve(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated = worker.levelOfHydrated + worker.weight * worker.experience * 0.1
        worker.dizziness = false
    }
    return {
        weight: worker.weight,
        experience: worker.experience,
        levelOfHydrated: worker.levelOfHydrated,
        dizziness: worker.dizziness,
    }

}
console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
))