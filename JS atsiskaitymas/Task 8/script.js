/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
    sum(n1, n2){
        return n1 + n2;
    }

    subtraction(n1, n2){
        return n1 - n2;
    }

    multiplication(n1, n2){
        return n1 * n2;
    }

    division(n1, n2){
        return n1 / n2;
    }
}

const calc = new Calculator();
console.log(calc.sum(5, 5));
console.log(calc.subtraction(15, 5));
console.log(calc.multiplication(5, 2));
console.log(calc.division(100, 10));