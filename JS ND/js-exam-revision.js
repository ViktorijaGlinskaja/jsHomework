const people = [
    {
        name: 'Laurynas',
        surname: 'Maybach',
        age: 20,
        height: 1.80,
        weight: 80,
        sex: 'male'

    },
    {
        name: 'Marius',
        surname: 'Mataitis',
        age: 22,
        height: 1.90,
        weight: 85,
        sex: 'male'
    },
    {
        name: 'Kristina',
        surname: 'Kudutyte',
        age: 35,
        height: 1.60,
        weight: 40,
        sex: 'female'
    },
    {
        name: 'Aneta',
        surname: 'Milfevic',
        age: 45,
        height: 1.65,
        weight: 70,
        sex: 'female'
    },
    {
        name: 'Vaidas',
        surname: 'Ilgauskas',
        age: 35,
        height: 1.89,
        weight: 66,
        sex: 'male'
    },
    {
        name: 'Birute',
        surname: 'Straipsnyte',
        age: 17,
        height: 1.70,
        weight: 75,
        sex: 'female'

    },
    {
        name: 'Tomas',
        surname: 'Trumpauskas',
        age: 50,
        height: 1.60,
        weight: 80,
        sex: 'male'
    },
    {
        name: 'Veronika',
        surname: 'Grybauske',
        age: 27,
        height: 1.72,
        weight: 60,
        sex: 'female'
    }
]

const calculateBMI = (weight, height) => (Math.round(weight / (height ** 2) * 100) / 100);

console.groupCollapsed('1. Sukurti objektų(žmonių) masyvą su 8 elementais');
{
    console.table(people);
}
console.groupEnd();

console.groupCollapsed('2 Panaudojant array.foreach:');
{
    console.group('Atspausdinti kiekvieną elementą');
    {
        people.forEach(person => console.log(person));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento pilną vardą');
    {
        people.forEach(({ name, surname }) => console.log(`${name} ${surname}`));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento kūno masės indeksą');
    {
        people.forEach(({ weight, height }) => console.log(calculateBMI(weight, height)));
    }
    console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:');
{
    console.group('kurių vardas ilgesnis nei 6 simboliai');
    {
        const namesLongerThanSixLetters = people.filter(person => person.name.length > 6);
        console.table(namesLongerThanSixLetters);
    }
    console.groupEnd();

    console.group('kurių svoris didesnis nei 80kg');
    {
        const weightsMoreThan80kg = people.filter(person => person.weight > 80);
        console.table(weightsMoreThan80kg);
    }
    console.groupEnd();

    console.group('kurie aukštesni nei 185cm');
    {
        const tallerThan185cm = people.filter(person => person.height > (1.85 || 185));
        console.table(tallerThan185cm);
    }
    console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti');
{
    console.group('ūgius');
    {
        console.log(people.map(person => person.height));
    }
    console.groupEnd();

    console.group('svorius');
    {
        console.log(people.map(person => person.weight));
    }
    console.groupEnd();

    console.group('ūgius, svorius ir amžius : [{height, weight, age}, ...]');
    {
        console.table(people.map(({ height, weight, age }) => ({ height, weight, age })));
    }
    console.groupEnd();

    console.group('KMI indeksus');
    {
        console.log(people.map(({ height, weight }) => calculateBMI(weight, height)));
    }
    console.groupEnd();

    console.group('KMI indeksus ir amžius');
    {
        console.table(people.map(({ height, weight, age }) => ({
            BMI: calculateBMI(weight, height),
            age
        })));
    }
    console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti');
{
    console.group('svorių vidurkį');
    {
        console.log(people.reduce((sum, person) => sum + person.weight, 0) / people.length);
    }
    console.groupEnd();

    console.group('ūgio vidurkį');
    {
        console.log(people.reduce((sum, person) => (sum + person.height), 0) / people.length);
    }
    console.groupEnd();
}
console.groupEnd();

//2 DALIS

console.groupCollapsed('0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:');
{
    class Person {
        name;
        surname;
        age;
        height;
        weight;
        sex;

        constructor({ name, surname, age, height, weight, sex }) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.height = height;
            this.weight = weight;
            this.sex = sex;
        }

        getBMI = () => {
            return Math.round(this.weight / (this.height ** 2) * 100) / 100;
        }

        toString = () => {
            const { name, surname, ...rest } = this;
            const propString = Object.entries(rest)
                .filter(([_, propVal]) => typeof propVal !== 'function')
                .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, '');
            return `${name} ${surname}:` + propString;
        }
    }

    const peopleArray = people.map(person => new Person(person));
    console.table(peopleArray);
    peopleArray.forEach(person => console.log(person.getBMI()));
    peopleArray.forEach(person => console.log(person.toString()));

    console.groupCollapsed('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg');
    {
        const result1 = peopleArray.filter(person => person.age < 20 && person.sex === 'female' && person.weight > 70);
        console.table(result1);
    }
    console.groupEnd();

    console.groupCollapsed('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
    {
        const result1 = peopleArray.filter(person => person.age > 25 && person.sex === 'male' && person.getBMI() < 18.5)
        console.table(result1);
    }
    console.groupEnd();
    console.groupCollapsed('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
    {
        const result2 = peopleArray.filter(person => person.age < 18 && person.getBMI() > 30)
        console.log(result2);
    }
    console.groupEnd();
    console.groupCollapsed('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
    {
        const result3 = peopleArray.filter(person => person.age >= 65 && person.getBMI() > 30)
        console.log(result3);
    }
    console.groupEnd();
    console.groupCollapsed('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]    ');
    {
        const result4 = peopleArray.filter(person => person.getBMI() < 18.5 || person.getBMI() > 25);
        console.log(result4);
    }
    console.groupEnd();


}