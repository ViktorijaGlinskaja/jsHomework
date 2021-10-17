'use strict';

console.group('1. Sukurti klasę Automobilis');
// - sukurti konstruktorių, su 3 argumentais:
// - marke, modelis, kaina
class Automobilis {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

//- konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
//- this.brand
//- this.model
//- this.price
console.groupEnd();

console.group('2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:');
const car1 = new Automobilis('Ford', 'Fusion', 10000);
const car2 = new Automobilis('Lexus', 'rx', 15000);
const car3 = new Automobilis('Subaru', 'Forester', 2000);


console.groupEnd();

console.group(' 3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai');

console.log(
  {
    car1,
    car2,
    car3
  }
)

console.groupEnd();

console.group('4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):');
console.group('markes:'); {
  console.log(car1.brand);
  console.log(car2.brand);
  console.log(car3.brand);
}
console.groupEnd();


console.group('modeliai:'); {
  console.log(car1.model);
  console.log(car2.model);
  console.log(car3.model);
}
console.groupEnd();

console.group('kainos:'); {
  console.log(car1.price);
  console.log(car2.price);
  console.log(car3.price);
}
console.groupEnd();

console.groupEnd();

console.group('5. Padidinkite Automobilis objektų kainas šimtu.');
car1.price = car1.price + 100;
car2.price = car2.price + 100;
car3.price = car3.price + 100;

console.groupEnd();

console.group('6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.');

console.log(car1);
console.log(car2);
console.log(car3);

console.groupEnd();

