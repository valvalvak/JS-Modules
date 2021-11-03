class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        }
        this.listOfParticipants = [];
    };

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.")
        } else if (this.listOfParticipants.find(name)) {
            return `The ${name} is already registered at the camp.`
        } else if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        } else {
            let participant = {
                name: name,
                condition: condition,
                power: 100,
                wins: 0
            }
            this.listOfParticipants.push(participant)
            return `The ${name} was successfully registered.`
        }
    }

    customSearch(userName) {
        for (let user of this.listOfParticipants) {
            if (user.name === userName) {
                return { userName: user.name, userCondition: user.condition }
            }
        }
        return false
    }
    unregisterParticipant(name) {
        if (this._findUserName(name)) {
            const index = this.listOfParticipants.indexOf(this.customSearch(name).userName);
            this.listOfParticipants.splice(index, 1);
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === "WaterBalloonFights") {
            if (this.customSearch(participant1) == this.customSearch(participant2) == false) {
                throw new Error(`Invalid entered name/s.`)
            } else if (this.customSearch(participant1).userCondition != this.customSearch(participant2).userCondition) {
                throw new Error(`Choose players with equal condition.`)
            }

        } else if (typeOfGame === "Battleship") {

        }
    }
    toString() {

    }
};

const SummerCamp = result;
let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
assert.equal(camp.registerParticipant('Petar Petarson', 'student', 300), "The Petar Petarson was successfully registered.");
// assert.equal(camp.registerParticipant('Sara Dickinson', 'child', 200), "The Sara Dickinson was successfully registered.");
// assert.equal(camp.registerParticipant('Leila Wolfe', 'collegian', 500), "The Leila Wolfe was successfully registered.");