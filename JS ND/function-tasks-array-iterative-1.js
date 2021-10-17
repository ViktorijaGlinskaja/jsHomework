const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach(function (person) {
    console.log(person);
  })
}

console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach(function (person) {
    console.log(`${person.name} - ${person.surname}`)
  })
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  people.forEach(function (person) {
    console.log({
      name: person.name,
      surname: person.surname,
      married: person.married
    })
  })
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  let masSexAndIncome = [];
  people.map(function (person) {
    masSexAndIncome.push({
      sex: person.sex,
      income: person.income
    })
  })
  console.log(masSexAndIncome);

}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  let masNameSurnameSex = [];
  people.map(function (person) {
    masNameSurnameSex.push({
      name: person.name,
      surname: person.surname,
      sex: person.sex
    })
  })
  console.log(masNameSurnameSex);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
// išspręsta su forEach, o ne map, nes neprašoma sąlygoje sukurti naują masyvą. Parašyta tik atspausdinti //
{
  people.forEach(function (person) {
    if (person.sex === 'male') {
      console.log(person)
    }
  })
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
// išspręsta su forEach, o ne map, nes neprašoma sąlygoje sukurti naują masyvą. Parašyta tik atspausdinti //
{
  people.forEach(function (person) {
    if (person.sex === 'female') {
      console.log(person)
    }
  })
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people.filter((person) => person.hasCar === true && console.log(`${person.name} ${person.surname}`)
  );
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  people.filter((person) => person.married === true && console.log(`${person.name} ${person.surname}`));
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  let driversCountBySex = {
    male: 0,
    female: 0
  };
  people.forEach(function (person) {
    if (person.hasCar) {
      if (person.sex === 'male') driversCountBySex.male++;
      else 
        driversCountBySex.female++;
      }
    });
      console.log(driversCountBySex);
    }
    console.groupEnd();

    console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
    {
      const sameArrayWithSalaryNotIncome = people.map((person) => ({
        name: person.name,
        surname: person.surname,
        sex: person.sex,
        age: person.age,
        salary: person.income,
        married: person.married,
        hasCar: person.hasCar,
      }));
      console.table(sameArrayWithSalaryNotIncome);
    }
    console.groupEnd();

    console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
    {
      const sameArrayWithoutSexNameSurname = people.map((person) => ({

        age: person.age,
        salary: person.income,
        married: person.married,
        hasCar: person.hasCar,
      })
      )
      console.log(sameArrayWithoutSexNameSurname);
    }
    console.groupEnd();

    console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
    {
      const arrayWithFullNameInsteadNameSurname = people.map((person) =>({
        fullName: person.name+ ' ' + person.surname,
        sex: person.sex,
        age: person.age,
        income: person.income,
        married: person.married,
        hasCar: person.hasCar,
      }));
      console.table(arrayWithFullNameInsteadNameSurname);
    }
    console.groupEnd();