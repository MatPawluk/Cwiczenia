const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

function Meals(name, price) {
  this.name = name;
  this.price = price;
}

const meal1 = new Meals("Schabowy", 32);
const meal2 = new Meals("Pizz", 23);
const meal3 = new Meals("Zupa", 18);

Meals.prototype.msg = function () {
  console.log(`${this.name} kosztuje ${this.price}zł`);
};

btn1.addEventListener("click", () => {
  meal1.msg();
});
btn2.addEventListener("click", () => {
  meal2.msg();
});
btn3.addEventListener("click", () => {
  meal3.msg();
});
