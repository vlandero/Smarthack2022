import {x} from './test';

type tip = "Pisica" | "Caine" | "Peste"
class Animal {
    nume!: string;
    varsta!: number;
    tip?: tip;
}

let a: Animal = {
    nume: "Azorel",
    varsta: 12
};
console.log(a);
console.log(x);