var Ninja1 = {
    hp: 100,
    strength: 15,
    atk: function () {
        return Math.floor(Math.random() * this.strength + 1) ;
    },
    receivedmg: function (dmg) {
        this.hp = Math.max(0, this.hp - dmg);
    }
};

var Ninja2 = {
    hp: 150,
    strength: 10,
    atk: function () {
        return Math.floor(Math.random() * this.strength + 1) ;
    },
    receivedmg: function (dmg) {
        this.hp = Math.max(0, this.hp - dmg);
    }
};

function fight(Ninja1, Ninja2) {
    let round = 1;

    while (round <= 10 && Ninja1.hp > 0 && Ninja2.hp > 0) {
        const dmg1 = Ninja1.atk();
        const dmg2 = Ninja2.atk();
        
        Ninja1.receivedmg(dmg1);
        Ninja2.receivedmg(dmg2);

        console.log("===Round "+round+"! Fight!===");
        console.log("Ninja1 atks Ninja2 and deals "+dmg2+" dmg.");
        console.log("Ninja2 atks Ninja1 and deals "+dmg1+" dmg.");

        console.log("Ninja1 HP: " +Ninja1.hp);
        console.log("Ninja2 HP: " +Ninja2.hp);
        round ++;
    }

    if (Ninja1.hp <= Ninja2.hp) {
        console.log("Ninja2 Wins!!!");
    } else{
        console.log("Ninja1 Wins!!!");
    } 
}

fight(Ninja1, Ninja2);
