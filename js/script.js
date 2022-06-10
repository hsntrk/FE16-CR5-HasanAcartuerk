"use strict";
class Animal {
    constructor(image, name, age, gender, size, vaccine) {
        this.image = image;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        array.push(this);
    }
    display() {
        return `
    <div class="col rounded">
        <div class="card shadow-lg">
            <img src="${this.image}" class="card-img-top" alt="...">
            <div class="bg-dark">
                <h3 class="card-title text-light text-center cardtitle">${this.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text cardtitle">Gender: ${this.gender}</p>
                <p class="card-text cardtitle">Age: ${this.age} </p>
                <p class="card-text cardtitle">Size: ${this.size}</p>
            </div>
            <button type="button" class="btn btn-success rounded-pill cardtitle">Vaccine: ${this.vaccine} </button>
        </div>
    </div>

`;
    }
}
class Cat extends Animal {
    constructor(image, name, age, gender, size, vaccine, breed, furcolor, url) {
        super(image, name, age, gender, size, vaccine);
        this.breed = breed;
        this.furcolor = furcolor;
        this.url = url;
    }
    display() {
        return `
    <div class="col rounded">
        <div class="card shadow-lg">
            <img src="${this.image}" class="card-img-top" alt="...">
            <div class="bg-dark">
                <h3 class="card-title text-light text-center cardtitle">${this.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text cardtitle">Gender: ${this.gender}</p>
                <p class="card-text cardtitle">Age: ${this.age} </p>
                <p class="card-text cardtitle">Size: ${this.size}</p>
            </div>
            <button type="button" class="btn btn-success rounded-pill cardtitle">Vaccine: ${this.vaccine} </button>
            <div class="card-body">
                <p class="card-text cardtitle">Breed: ${this.breed}</p>
                <p class="card-text cardtitle">Fur color: ${this.furcolor} </p>
                <p class="card-text cardtitle">Breed info: <br> <a href="${this.url}" target="_blank">${this.url}</a></p>
            </div>
        </div>
    </div>

`;
    }
}
class Dog extends Animal {
    constructor(image, name, age, gender, size, vaccine, breed, training) {
        super(image, name, age, gender, size, vaccine);
        this.breed = breed;
        this.training = training;
    }
    display() {
        return `
    <div class="col rounded">
        <div class="card shadow-lg">
            <img src="${this.image}" class="card-img-top" alt="...">
            <div class="bg-dark">
                <h3 class="card-title text-light text-center cardtitle">${this.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text cardtitle">Gender: ${this.gender}</p>
                <p class="card-text cardtitle">Age: ${this.age} </p>
                <p class="card-text cardtitle">Size: ${this.size}</p>
            </div>
            <button type="button" class="btn btn-success rounded-pill cardtitle">Vaccine: ${this.vaccine} </button>
            <div class="card-body">
                <p class="card-text cardtitle">Breed: ${this.breed}</p>
                <p class="card-text cardtitle">Training: ${this.training} </p>
            </div>
        </div>
    </div>

`;
    }
}
const array = [];
new Animal("img/rabbit.jpg", "Ripku", 2, "male", "small", true);
new Animal("img/budgie.jpg", "Buki", 3, "female", "small", false);
new Dog("img/dog_bullterrier.jpg", "Tiko", 4, "male", "large", true, "Bull Terrier", "Yes");
new Dog("img/dog_kangal.jpg", "Kando", 7, "male", "large", false, "Shepherd dog", "Yes");
new Dog("img/dog_chihuahua.jpg", "Cukomi", 5, "female", "medium", false, "Chihuahua dog", "No");
new Dog("img/dog_zwergspitz.jpg", "Akipa", 3, "female", "medium", true, "Spitz dog", "No");
new Cat("img/cat_persian.jpg", "Fusly", 2, "male", "medium", true, "Persian Longhair Cat", "Grey", "https://en.wikipedia.org/wiki/Persian_cat");
new Cat("img/cat_sibirian.jpg", "Sibash", 4, "female", "medium", false, "Siberian Cat", "brown", "https://www.petfinder.com/cat-breeds/siberian/");
for (let val of array) {
    document.getElementById("cards-content").innerHTML += val.display();
}
