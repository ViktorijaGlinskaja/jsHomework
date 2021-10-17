console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');

drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }]

function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price)
}

const drinks1 = [
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 },
    { name: 'peach', price: 23 }
];


console.log(sortDrinkByPrice(drinks));
console.log(sortDrinkByPrice(drinks1));
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
    }

    console.log(addName({}, 'Brutus', 300));
    console.log(addName({ piano: 500 }, 'Brutus', 400));
    console.log(addName({ piano: 500, stereo: 300 }));

}


console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        const generations = {
            "-3": ["great grandfather", "great grandmother"],
            "-2": ["grandfather", "grandmother"],
            "-1": ["father", "mother"],
            0: ["me!", "me!"],
            1: ["son", "daughter"],
            2: ["grandson", "granddaughter"],
            3: ["great grandson", "great granddaughter"]
        }
        return generations[x][y === "m" ? 0 : 1]
    }
    console.log(generation(-3, "m"));
    console.log(generation(-1, "f"));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        return tileHand.reduce((c, v) => c += v.score, 0)
    }
    tileHand = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ]
    console.log(maximumScore(tileHand))
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
        return Object.values(obj).reduce((a, c) => a + c, 0) - limit
    }
    console.log(calculateDifference({ "baseball bat": 20 }, 5))
    console.log(calculateDifference({ skate: 10, painting: 20 }, 19))
    console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj)
    }
    console.log(toArray({ a: 1, b: 2 }))
    console.log(toArray({ shrimp: 15, tots: 12 }))
    console.log(toArray({}))
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        return Math.min(...Object.values(inks))
    }
     
    console.log(inkLevels({
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
      }))
      console.log(inkLevels({
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
      }))
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        let arr = Object.values(obj);
        if (arr.length === 0) {
            return "Lucky you!"
        } else {
            return arr.reduce(function (a, b) {
                return a + b;
            }, 0)
        }
    }
    console.log(calculateLosses({
        tv: 30,
        skate: 20,
        stereo: 50,
      }))
}
console.groupEnd();
