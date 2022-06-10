class Animal {
  image: string;
  name: string;
  age: number;
  gender: string;
  size: string;
  vaccine: boolean;

  constructor(image: string, name: string, age: number, gender: string, size: string, vaccine: boolean) {
    this.image = image;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.size = size;
    this.vaccine = vaccine;
    array.push(this);
  }
  // used Javascript Ternary Operator for vaccine boolean inside display method
  display() {
    return `
    <div class="col rounded">
        <div class="card shadow-lg">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
            <div class="bg-dark">
                <h3 class="card-title text-light text-center cardtitle">${this.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text cardtitle">Gender: ${this.gender}</p>
                <p class="card-text cardtitle">Age: ${this.age} </p>
                <p class="card-text cardtitle">Size: ${this.size}</p>
            </div>
            <button onclick="changeColorBtn(this)" type="button" class="btn : ${
              this.vaccine ? `btn-success` : `btn-danger`
            } rounded-pill cardtitle myBtns" id="btnColor">Vaccine: 
             ${this.vaccine ? `<i class="fa-regular fa-circle-check"></i>` : `<i class="fa-regular fa-file-excel"></i>`}  </button>
        </div>
    </div>

`;
  }
}

// created onclick function inside parent class to change color button located in button tag
function changeColorBtn(button) {
  if (button.classList.contains("btn-danger")) {
    button.classList.replace("btn-danger", "btn-success");
    // console.log(button.children);
    button.children[0].classList.replace("fa-file-excel", "fa-circle-check");
  } else {
    button.classList.replace("btn-success", "btn-danger");
    button.children[0].classList.replace("fa-circle-check", "fa-file-excel");
  }
}

class Cat extends Animal {
  breed: string;
  furcolor: string;
  url: string;
  constructor(image: string, name: string, age: number, gender: string, size: string, vaccine: boolean, breed: string, furcolor: string, url: string) {
    super(image, name, age, gender, size, vaccine);
    this.breed = breed;
    this.furcolor = furcolor;
    this.url = url;
  }
  display() {
    return `
    <div class="col rounded">
        <div class="card shadow-lg">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
            <div class="bg-dark">
                <h3 class="card-title text-light text-center cardtitle">${this.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text cardtitle">Gender: ${this.gender}</p>
                <p class="card-text cardtitle">Age: ${this.age} </p>
                <p class="card-text cardtitle">Size: ${this.size}</p>
            </div>
              <button onclick="changeColorBtn(this)" type="button" class="btn : ${
                this.vaccine ? `btn-success` : `btn-danger`
              } rounded-pill cardtitle myBtns" id="btnColor">Vaccine: 
             ${this.vaccine ? `<i class="fa-regular fa-circle-check"></i>` : `<i class="fa-regular fa-file-excel"></i>`}  </button>
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
  breed: string;
  training: string;
  constructor(image: string, name: string, age: number, gender: string, size: string, vaccine: boolean, breed: string, training: string) {
    super(image, name, age, gender, size, vaccine);
    this.breed = breed;
    this.training = training;
  }

  display() {
    return `
    <div class="col rounded">
        <div class="card shadow-lg">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="...">
            <div class="bg-dark">
                <h3 class="card-title text-light text-center cardtitle">${this.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text cardtitle">Gender: ${this.gender}</p>
                <p class="card-text cardtitle">Age: ${this.age} </p>
                <p class="card-text cardtitle">Size: ${this.size}</p>
            </div>
             <button onclick="changeColorBtn(this)" type="button" class="btn : ${
               this.vaccine ? `btn-success` : `btn-danger`
             } rounded-pill cardtitle myBtns" id="btnColor">Vaccine: 
             ${this.vaccine ? `<i class="fa-regular fa-circle-check"></i>` : `<i class="fa-regular fa-file-excel"></i>`}  </button>
            <div class="card-body">
                <p class="card-text cardtitle">Breed: ${this.breed}</p>
                <p class="card-text cardtitle">Training: ${this.training} </p>
            </div>
        </div>
    </div>

`;
  }
}

const array: Array<Animal> = [];

new Animal("img/rabbit.jpg", "Ripku", 4, "male", "small", true);
new Animal("img/budgie.jpg", "Buki", 3, "female", "small", false);
new Dog("img/dog_bullterrier.jpg", "Tiko", 6, "male", "large", true, "Bull Terrier", "Yes");
new Dog("img/dog_kangal.jpg", "Kando", 7, "male", "large", false, "Shepherd dog", "Yes");
new Dog("img/dog_chihuahua.jpg", "Cukomi", 5, "female", "medium", false, "Chihuahua dog", "No");
new Dog("img/dog_zwergspitz.jpg", "Akipa", 3, "female", "medium", true, "Spitz dog", "No");
new Cat("img/cat_persian.jpg", "Fusly", 2, "male", "medium", true, "Persian Longhair Cat", "Grey", "https://en.wikipedia.org/wiki/Persian_cat");
new Cat("img/cat_sibirian.jpg", "Sibash", 4, "female", "medium", false, "Siberian Cat", "brown", "https://www.petfinder.com/cat-breeds/siberian/");

for (let val of array) {
  (document.getElementById("cards-content") as HTMLElement).innerHTML += val.display();
}
