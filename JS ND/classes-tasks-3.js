console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    constructor(id, level) {
      this.id = id;
      this.level = level;
    }
    get points() {
      let levels = {
        VE: 5,
        EA: 10,
        ME: 20,
        HA: 40,
        VH: 80,
        EX: 120
      };
      return levels[this.level];
    }
  }
  class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }
    set newSolvedChallenge(challenge) {
      this.log.push(challenge.id);
      this.xp += challenge.points;
    }
  }
  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);
  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX")


  user1.newSolvedChallenge = challenge1;
  user1.newSolvedChallenge = challenge4;
  user1.newSolvedChallenge = challenge6;
  user2.newSolvedChallenge = challenge5;
  user2.newSolvedChallenge = challenge3;
  user2.newSolvedChallenge = challenge2;

  console.log(user1.name);
  console.log(user1.xp);
  console.log(user1.log);

  console.log(user2.name);
  console.log(user2.xp);
  console.log(user2.log);

  console.log(challenge1.id);
  console.log(challenge2.level);
  console.log(challenge3.points);
  console.log(challenge4.id);
  console.log(challenge5.level);
  console.log(challenge6.points);

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    #hp;
    #maxHp;
    #en;
    #maxEn;

    constructor(name, health, energy, armor) {
      this.#maxHp = health;
      this.#maxEn = energy;
      this.hp = health;
      this.en = energy;
      this.armor = armor;
      this.name = name;
    }
    getHp() {
      return this.hp;
    }
    setHp(amount) {
      this.hp = amount < 0 ? 0 : amount;
      this.hpPerc = Math.round((this.hp / this.maxHp) * 100 * 100) / 100;
    }
    getEn() {
      return this.en;
    }
    setEn(amount) {
      this.en = amount < 0 ? 0 : amount;
    }
    get hpPerc() {
      return (100 * this.hp / this.maxHp).toFixed(2)
    }

    // toliau deja bet pati nelabai sugebeciau parasyti jeigu nepaziureciau solutions. :(
    learnSkill(skillName, stats) {
      this[skillName] = function (target) {
        if (this.en < stats.cost) {
          return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
        } else {
          this.en = this.en - stats.cost;

          let damageDealt = stats.damage;
          damageDealt *= (100 - Math.max(Math.min(target.armor - stats.penetration, 100), 0)) / 100;
          damageDealt = +damageDealt.toFixed(2);

          target.hp = target.hp - damageDealt;

          let message = `${this.name} used ${skillName}, ${stats.desc}, against ${target.name}, doing ${damageDealt} damage!`;

          if (stats.heal) {
            this.hp = this.hp + stats.heal;
            message += ` ${this.name} healed for ${stats.heal} health!`;
          }

          message += target.hp ? ` ${target.name} is at ${target.hpPerc}% health.` : ` ${target.name} died. `;

          return message;
        }
      }
    }
  }
  console.groupEnd();

