type Size= 'small' | 'medium' | 'large' | 'extra-large' ;

class Pizza {
    private size: Size;
    private exCheese: boolean;
    private pepperoni: number;
    private ham: number;
    private pineapple: number;

    constructor(size: Size, exCheese: boolean, pepperoni: number, ham: number, pineapple:number) {
        this.size = size;
        this.exCheese = exCheese;
        this.pepperoni = pepperoni;
        this.ham = ham;
        this.pineapple = pineapple;
    }
    
    get Size(): Size {
        return this.size;
    }

    set Size(size: Size) {
        this.size = size;
    }

    get ExCheese(): boolean {
        return this.exCheese;
    }

    set setExCheese(exCheese: boolean) {
        this.exCheese = exCheese;
    }

    get Pepperoni(): number {
        return this.pepperoni;
    }

    set Pepperoni(pepperoni: number) {
        this.pepperoni = pepperoni;
    }

    get Ham(): number {
        return this.ham;
    }

    set Ham(ham: number) {
        this.ham = ham;
    }

    get Pineapple(): number {
        return this.pineapple;
    }

    set Pineapple(pineapple: number) {
        this.pineapple = pineapple;
    }

    getCost(): number {
        let cost = 0;
        let extra = 0;
        let base = 0;
        let costTopping = 0;

        if (this.size == 'small') {
            base = 10;
            costTopping = 2;
            extra = this.exCheese === true ? 2 : 0
        }

        if (this.size == 'medium') {
            base = 12;
            costTopping = 2;
            extra = this.exCheese === true ? 4 : 0
        }

        if (this.size == 'large') {
            base = 14;
            costTopping = 3;
            extra = this.exCheese === true ? 6 : 0
        }

        if (this.size == 'extra-large') {
            base = 18;
            costTopping = 4;
            extra = this.exCheese === true ? 6 : 0
        }

        cost += base;
        cost += (2 * (this.pepperoni + this.ham + this.pineapple));
        cost += extra;

        return cost
    }
}

const pizza1 = new Pizza('small', true, 5, 2, 9);
const pizza2 = new Pizza('medium', false, 2, 0, 0);
const pizza3 = new Pizza('large', true, 6, 4, 5);
const pizza4 = new Pizza('extra-large', false, 3, 1, 7);

console.log(pizza1.getCost());
console.log(pizza2.getCost());
console.log(pizza3.getCost());
console.log(pizza4.getCost());