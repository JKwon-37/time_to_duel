class Card {
    constructer(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructer(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructer(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if (target instanceof Unit) {
            console.log("Raise the target's resilience by 2");
        }
        else {
            throw new Error("Target must be a unit!")
        }
        target.res += 2;
    }
}