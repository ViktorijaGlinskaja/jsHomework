const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
  const printITFacultyStudents = students.filter(studiesIT => studiesIT.faculty === 'Informatikos fakultetas')
  console.log(printITFacultyStudents);
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
  const printChemistryFacultyStudents = students.filter(studiesChemistry => studiesChemistry.faculty === 'Chemijos fakultetas')
  console.log(printChemistryFacultyStudents);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  const printElectronicsFacultyStudents = students.filter(studiesElectronics => studiesElectronics.faculty === 'Elektros ir elektronikos fakultetas')
  console.log(printElectronicsFacultyStudents);
}
console.groupEnd();


console.groupCollapsed('4. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);
    return sum;
  }
  function calcModuleAvarage(modules) {
    let sum = 0;
    modules.marks.forEach(mark => sum += mark);
    return Math.round(sum / modules.marks.length);
  }

  function studentsSemesterAvg(student) {
    const semesterCredits = countSemesterCredits(student.modules);
    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvarage(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits
  }
  const studentsAverages = students.filter(studiesElectronics => studiesElectronics.faculty === 'Elektros ir elektronikos fakultetas').map(student => {
    return studentsSemesterAvg(student)
  })
  console.log(studentsAverages)
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti tik pirmo kurso studentus');
{
  console.log(printFirstYearStudents = students.filter(studiesFirstYear => studiesFirstYear.course === 1))
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti tik antro kurso studentus');
{
  console.log(printSecondYearStudents = students.filter(studiesSecondYear => studiesSecondYear.course === 2))
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik trečio kurso studentus');
{
  console.log(printThirdYearStudents = students.filter(studiesThirdYear => studiesThirdYear.course === 3))
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik ketvirto kurso studentus');
{
  console.log(printSecondYearStudents = students.filter(studiesFourthYear => studiesFourthYear.course === 4))
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);
    return sum;
  }
  function calcModuleAvarage(modules) {
    let sum = 0;
    modules.marks.forEach(mark => sum += mark);
    return Math.round(sum / modules.marks.length);
  }

  function studentsSemesterAvg(student) {
    const semesterCredits = countSemesterCredits(student.modules);
    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvarage(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits
  }
  const studentsAverages = students.filter(studiesIT => studiesIT.faculty === 'Informatikos fakultetas').map(student => {
    return studentsSemesterAvg(student)
  })
  console.log(studentsAverages)
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);
    return sum;
  }
  function calcModuleAvarage(modules) {
    let sum = 0;
    modules.marks.forEach(mark => sum += mark);
    return Math.round(sum / modules.marks.length);
  }

  function studentsSemesterAvg(student) {
    const semesterCredits = countSemesterCredits(student.modules);
    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvarage(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits
  }
  const studentsAverages = students.filter(studiesChemistry => studiesChemistry.faculty === 'Chemijos fakultetas').map(student => {
    return studentsSemesterAvg(student)
  })
  console.log(studentsAverages)
}
console.groupEnd();

console.groupCollapsed('11. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  function countSemesterCredits(modules) {
    let sum = 0;
    modules.forEach(module => sum += module.credits);
    return sum;
  }
  function calcModuleAvarage(modules) {
    let sum = 0;
    modules.marks.forEach(mark => sum += mark);
    return Math.round(sum / modules.marks.length);
  }

  function studentsSemesterAvg(student) {
    const semesterCredits = countSemesterCredits(student.modules);
    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvarage(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits
  }
  const studentsAverages = students.map(student => {
    return studentsSemesterAvg(student)
  })
  console.log(studentsAverages)
}
