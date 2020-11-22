class Car {
    constructor(model, engine, color, year){
        this.model = model;
        this.engine = engine;
        this.color = color;
        this.year = year;
    }

    // carcolor(){
    //     console.log(`the color of the car is ${this.color}`);
    // }


    carcolor = () => {
        console.log(`the color of the car is ${this.color}`);
    }
}

// const corollaGli = new Car('GLI', 1300, 'white', 2020);
// const corollaGrande = new Car('Grande', 1800, 'black', 2020);

// console.log(corollaGli);
// console.log(corollaGrande);

// corollaGrande.carcolor();




class Dealer extends Car {
    constructor(name, address, model, engine, color, year) {
        super(model, engine, color, year)
        this.name = name;
        this.address = address;
    }

    static value = 'some static value';
    static tyre(){
        console.log('these cars have four tyres');
    }
}

const dealerOne = new Dealer('haseeb motors','khi', 'gli', 1300, 'grey', 2020);
console.log(dealerOne);
dealerOne.carcolor();

console.log('how static keyword works',Dealer.value,`<br/>`,Dealer.tyre());


// we have to write a method with static keyword
// we have to write a method which changes the color of car
