class Car {
  constructor(brand, model, year, color, fuelTypes, price) {
    this.brand = brand,
      this.model = model,
      this.year = year,
      this.color = color,
      this.fuelTypes = fuelTypes,
      this.price = price //eurais//
  }
  get fuelType() {
    return this.fuelTypes.join('/')
  }
}
let usd_eur = 1.16;



console.groupCollapsed('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
{
  console.log(Car);
}
console.groupEnd();


console.groupCollapsed('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų');
const cars = [
  new Car('Ford', 'Mondeo', 2011, 'blue', ['diesel'], 4000),
  new Car('Opel', 'Insignia', 2017, 'black', ['petrol'], 20000),
  new Car('Lexus', 'RX 450h', 2016, 'white', ['petrol', 'electric'], 40000),
  new Car('Audi', 'Toledo', 2013, 'blue', ['petrol'], 12000),
  new Car('BMW', 'X1', 2019, 'grey', ['petrol'], 30000),
  new Car('Suzuki', 'Grand Vitara', 2016, 'gold', ['diesel'], 3500),
  new Car('Mercedes-Benz', 'S500', 2007, 'black', ['petrol', 'diesel', 'gas'], 13000),
  new Car('Tesla', 'Model 3', 2018, 'white', ['electric'], 40000),
];
{
  console.table(cars);
}
console.groupEnd();


console.groupCollapsed('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)kaip string ą atskirtą /');
{
  cars.forEach(car => console.log(car.fuelType));
}
console.groupEnd();


console.groupCollapsed('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.fuelType}`));
}
console.groupEnd();


console.groupCollapsed('5. Atrinkite tik elektrinius automobilius');
const electricCars = cars.filter(car => (car.fuelTypes.includes('electric')));
console.table(electricCars)
console.groupEnd();


console.groupCollapsed('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
const petrolCars = cars.filter(car => (
  car.fuelTypes.includes('petrol') &&
  car.year > 2016));
console.table(petrolCars)
console.groupEnd();


console.groupCollapsed('7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai');
const audiNotDieselCar = cars.filter(car => (
  car.brand === 'Audi' &&
  car.year >= 2012 &&
  car.year <= 2016 &&
  !(car.fuelTypes.includes('electric'))));
console.table(audiNotDieselCar)
console.groupEnd();


console.groupCollapsed('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');

const result = electricCars.reduce((sum, car) => sum + car.price, 0) / electricCars.length;
console.log(result);

console.groupEnd();


console.groupCollapsed('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');

const result2 = petrolCars.reduce((sum, car) => sum + car.price, 0);
console.log(result2);

console.groupEnd();


console.groupCollapsed('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:');
//   * brand,
//   * model,
//   * price, // kaina doleriais [Number]
//   * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą

const newCarsArray = cars.map(car => {
  return {
    brand: car.brand,
    model: car.model,
    price: Math.round(car.price * usd_eur),
    fuelType: car.fuelTypes
  };
});
console.table(newCarsArray);

