module.exports = class Monster {
    constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100}){
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = currentLife >= minimumLife;
    }
};

updateLife = (lifeChangeAmount) => {
    this.currentLife += lifeChangeAmount;
    this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
    this.isAlive = this.currentLife < this.minimumLife
}

randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {

}

//output monsters name and the amount that was drained from their life