// class mobilePhone {
//     //constructor
//     constructor(brand, color, sim, apps = []){

//         //properties
//         this.brand = brand;
//         this.color = color;
//         this.sim = sim;
//         this.apps = apps;

//     }

//     //methods
//     installApp(appName) {
//         this.apps.push(appName);
//         console.log(`App "${appName}" installed successfully.`);
//         return this;
//     }

//     // text() {

//     // }

//     // call(){

//     // }

//     displayDetails() {
//         console.log("Mobile Phone Details: ");
//         console.log(`Brand: ${this.brand}`);
//         console.log(`Color: ${this.color}`);
//         console.log(`Sim: ${this.sim}`);
//         console.log("Apps: ", this.apps.length > 0 ? this.apps.join(', '): "None");
//         return this;
//     };

// }

// // mobile1 = new mobilePhone("Samsung", "Pink", "Globe");
// // mobile1.installApp("Messenger").displayDetails();

// mobile2 = new mobilePhone("iPhone", "Black", "Smart");
// mobile2.installApp("Youtube").installApp("Facebook").installApp("Lazada").displayDetails();

// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    makesound() {
        console.log("snarl");
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makesound() {
        console.log(this.name+" Arf! Arf!");
    }

    fetch() {
        console.log(this.name+" is fetching ball");
    }
}

const myDog = new Dog("Doug", "Askal");
myDog.makesound();

const doggy = new Dog("Bantay", "German Shepherd");
doggy.fetch();