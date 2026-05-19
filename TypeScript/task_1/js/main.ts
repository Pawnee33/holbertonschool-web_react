interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Domie',
    fullTimeEmployee: false,
    lastName: 'Martos',
    location: 'Marseillan',
    contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Jean',
  lastName: 'Martos',
  location: 'Marseillan',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
