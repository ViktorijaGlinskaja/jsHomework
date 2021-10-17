console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
const mas = [1, 2, 3, 4, 5, 6, 7]

{
  function returnFirstElement(mas1) {
    return mas1[0];
  }
  console.log(returnFirstElement(mas));
}
console.log(mas);
console.groupEnd();


console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
const mas1 = [1, 2, 3, 4, 5, 6, 7]
{
  function FirstElement(masyvas1) {
    return masyvas1.shift();
  }
  console.log(FirstElement(mas1));
  console.log(mas1);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
masyvasNaujas = ['naujas', 'masyvas', 1, 2, 3, 4, 5]
{
  function takeLastElement(masyvasmasyvas) {
    return masyvasmasyvas.slice(-1);
  }
}
console.log(takeLastElement(masyvasNaujas));
console.log(masyvasNaujas);

console.groupEnd();


console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
const mas3 = [1, 2, 3, 4, 5, 6, 7]

{
  function returnLastElement(masyvas3) {
    return masyvas3.pop();
  }
}
console.log(returnLastElement(mas3));
console.log(mas3);
console.groupEnd();


console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
masyvasNaujas1 = [1, 2, 3, 4, 5]
{
  function returnLength(masy) {
    return masy.length;
  }
  console.log(returnLength(masyvasNaujas1));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
masyvasNaujas2 = [1, 2, 3, 4, 5, 10, 15, 25]
{
  function lastIndex(masyv) {
    return lastIndexNumber = masyv.length - 1;

  }
}
console.log(lastIndex(masyvasNaujas2));
console.groupEnd();
// google: js last array element index



console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
masyvasNaujas3 = [1, 2, 3, 4, 5, 10, 15, 25]
{
  function everyIndex(mas7) {
    for (let i = 0; i < mas7.length; i++) {
      console.log(i);
    }
  }
}
console.log(everyIndex(masyvasNaujas3));
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
masyvasNaujas4 = [1, 2, 3, 4, 5, 10, 15, 25]

{
  function everyElement(mas8) {
    for (let i = 0; i < mas8.length; i++) {
      console.log(mas8[i]);

    }
  }
}
console.log(everyElement(masyvasNaujas4));
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  masyvasNaujas9 = [1, 2, 3, 4, 5, 10, 15, 25]
  {
    function everyIndexAndElement(mas9) {
      for (let i = 0; i < mas9.length; i++) {
        console.log(`[${(i)}] =>${mas9[i]}`);
      }
    }
  }
}
console.log(everyIndexAndElement(masyvasNaujas9));
console.groupEnd();


console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
masyvasNaujas10 = [1, 2, 3, 4, 5, 10, 15, 25]
{
  function elementsReverse(mas10) {
    for (let i = mas10.length - 1; i >= 0; i--) {
      console.log(mas10[i])

    }
  }
}
console.log(elementsReverse(masyvasNaujas10));
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
masyvasNaujas11 = [1, 2, 3, 4, 5, 10, 15, 25]
let indexes = []
{
  function allIndexRow(mas11) {
    for (let i = 0; i < mas11.length; i++) {
      indexes.push(i);

    }
    console.log(indexes.join(' '));
  }
}
console.log(allIndexRow(masyvasNaujas11))
console.groupEnd();


console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
masyvasNaujas12 = [1, 2, 3, 4, 5, 10, 15, 25]
{
  function allElementsRow(mas12) {
    console.log(mas12.join(' '));
  }
}


console.log(allElementsRow(masyvasNaujas12))
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ...
masyvasNaujas13 = [1, 2, 3, 4, 5, 10, 15, 25]

{
  function everyElementAndIndexRow(mas13) {
    const rezultatas=[];
    for (let i = 0; i < mas13.length; i++) {
      rezultatas.push(`[${(i)}] =>${mas13[i]}`);
    }
    console.log(rezultatas.join(' '));
  }
}
console.log(everyElementAndIndexRow(masyvasNaujas13));
console.groupEnd();