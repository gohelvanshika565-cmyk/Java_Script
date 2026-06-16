function toggleMenu() {
    document.querySelector(".links").classList.toggle("active");
}


let img = [
{
    image: "./Images/hot chocolate.jpg",
    name: "Hot Chocolate"
},
{
    image: "./Images/Espresso.jpg",
    name: "Espresso Coffee"
},
{
    image: "./Images/mocha.jpg",
    name: "Mocha Coffee"
},
{
    image: "./Images/latte.jpg",
    name: "Latte Coffee"
},
{
    image: "./Images/Cappuccino.jpg",
    name: "Cappuccino Coffee"
},
{
    image: "./Images/Iced Americano.jpg",
    name: "Americano"
},
{
    image: "./Images/ice Latte.jpg",
    name: "Latte"
},
{
    image: "./Images/Iced Caramel Macchiato.jpg",
    name: "Caramel Macchiato"
},
{
    image: "./Images/Iced Mocha.jpg",
    name: "Iced Mocha"
},
{
    image: "./Images/Hazelnut Latte.jpg",
    name: "Hazelnut Latte"
}
];

let card = "";

for (let i = 0; i < img.length; i++) {
    card += `
    <div class="card">
        <img src="${img[i].image}" alt="${img[i].name}">
        <h3>${img[i].name}</h3>
    </div>`;
}
document.getElementById("image-container").innerHTML = card;

let imag = [
{
    image: "./Images/Biscoff.jpg",
    name: "Biscoff Milkshakes",
    buy: "Buy Now"
},
{
    image: "./Images/Chocolate Milkshakes.jpg",
    name: "Chocolate Milkshakes",
    buy: "Buy Now"
},
{
    image: "./Images/Decadent Chocolate Milkshakes.jpg",
    name: "Decadent Chocolate Milkshakes",
    buy: "Buy Now"
},
{
    image: "./Images/Solted Caramel Milkshakes.jpg",
    name: "Salted Caramel Milkshakes",
    buy: "Buy Now"
},
{
    image: "./Images/oreo milkshake.jpg",
    name: "Oreo Milkshakes",
    buy: "Buy Now"
},
{
    image: "./Images/Bourbon & Peanut Butter Milkshake.jpg",
    name: "Bourbon & Peanut Butter Milkshake",
    buy: "Buy Now"
},
{
    image: "./Images/Nutella Milkshake.jpg",
    name: "Nutella Milkshake",
    buy: "Buy Now"
},
{
    image: "./Images/Mango milkshake.jpg",
    name: "Mango Milkshake",
    buy: "Buy Now"
},
{
    image: "./Images/strawberry milkshake.jpg",
    name: "Strawberry Milkshake",
    buy: "Buy Now"
},
{
    image: "./Images/Blueberry Milkshake.jpg",
    name: "Blueberry Milkshake ",
    buy: "Buy Now"
}
];
let shakes = "";

for (let i = 0; i < imag.length; i++) {
    shakes += `
    <div class="shakes">
        <img src="${imag[i].image}" alt="${imag[i].name}">
        <h3>${imag[i].name}</h3>
        <button>${imag[i].buy}</button>
    </div>`;
}

document.getElementById("Milk-Shakes").innerHTML = shakes;