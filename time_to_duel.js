class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if (target instanceof Unit) {
            console.log(this.stat);
            if (this.stat === "Power"){
                target.power += this.magnitude
            }
            if (this.stat === "Resilience"){
                target.res += this.magnitude
            }
            // console.log("The target is a unit.");
        }
        else {
            throw new Error("Target must be a unit!")
        }
    }
}

// Unit Objects
const redNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackNinja = new Unit('Black Belt Ninja', 4, 5, 4)

// Effect Objects
const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "Resilience", 3);
const uPR = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2","Resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "Power", 2);


hardAlgo.play(redNinja);
uPR.play(redNinja);
pairProgramming.play(redNinja);
redNinja.attack(blackNinja);

console.log(redNinja);
console.log(blackNinja);
