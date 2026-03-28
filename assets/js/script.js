document.addEventListener("DOMContentLoaded", function(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

function updateCartCount(){

if(cartCount){

let total = cart.reduce((sum,item)=> sum + item.quantity, 0);

cartCount.innerText = total;

}

}

// RUN ON PAGE LOAD
updateCartCount();
renderCart();

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function(button){

button.addEventListener("click", function(){

let name = button.parentElement.querySelector("h3").innerText;
let priceText = button.parentElement.querySelector(".price").innerText;
let price = parseFloat(priceText.replace("£",""));

let existing = cart.find(item => item.name === name);

if(existing){
existing.quantity += 1;
}else{
cart.push({
name: name,
price: price,
quantity: 1
});
}

localStorage.setItem("cart", JSON.stringify(cart));

if(cartCount){
cartCount.innerText = cart.reduce((sum,item)=> sum + item.quantity,0);
}

showPopup();

});

});

function showPopup(){

let popup = document.getElementById("popup");

if(!popup) return;

popup.classList.add("show");

setTimeout(function(){
popup.classList.remove("show");
},2000);

}

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

document.addEventListener("click", function(e){

if(e.target.classList.contains("increase")){

let index = e.target.dataset.index;
cart[index].quantity += 1;

}

if(e.target.classList.contains("decrease")){

let index = e.target.dataset.index;

cart[index].quantity -= 1;

if(cart[index].quantity <= 0){
cart.splice(index,1);
}

}

// SAVE
localStorage.setItem("cart", JSON.stringify(cart));

// ✅ UPDATE UI PROPERLY
updateCartCount();
renderCart();

});

const dropdown = document.getElementById("cart-dropdown");
if(dropdown){
dropdown.innerHTML = "";
if(cart.length === 0){
dropdown.innerHTML = "<p>Your cart is empty</p>";

}else{

cart.forEach(function(item){
let p = document.createElement("p");
p.innerText = item.name + " x" + item.quantity;
dropdown.appendChild(p);

});

let viewCart = document.createElement("a");
viewCart.href = "cart.html";
viewCart.innerText = "View Cart";
dropdown.appendChild(viewCart);

}

}

const checkoutBtn = document.getElementById("checkout-btn");
const message = document.getElementById("checkout-message");

if(checkoutBtn){

checkoutBtn.addEventListener("click",function(){

let orderNumber = localStorage.getItem("orderNumber");

if(!orderNumber){
orderNumber = 1;
}else{
orderNumber = parseInt(orderNumber) + 1;
}

if(orderNumber > 99){
orderNumber = 1;
}

localStorage.setItem("orderNumber", orderNumber);

// CLEAR CART
cart = [];
localStorage.removeItem("cart");

// SHOW MESSAGE
if(message){
message.innerText = "✓ Order placed! Your order number is #" + orderNumber;
}

// CLEAR UI (NO RELOAD)
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

if(cartItems) cartItems.innerHTML = "";
if(cartTotal) cartTotal.innerText = "0";

// RESET CART COUNT
const cartCount = document.getElementById("cart-count");
if(cartCount) cartCount.innerText = "0";

});
}

const searchInput = document.getElementById("search-input");

if(searchInput){

searchInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){

let query = searchInput.value.toLowerCase();

if(query.includes("hot") || query.includes("espresso") || query.includes("latte") || query.includes("cappuccino")){
window.location.href = "products.html#hot";
}

else if(query.includes("cold") || query.includes("iced") || query.includes("frappuccino")){
window.location.href = "products.html#cold";
}

else if(query.includes("bean")){
window.location.href = "products.html#beans";
}

else if(query.includes("pastry") || query.includes("croissant") || query.includes("muffin")){
window.location.href = "products.html#pastries";
}

else{
alert("No results found");
}

}

});

}

const sortSelect = document.getElementById("sort-price");

if(sortSelect){

sortSelect.addEventListener("change", function(){

let value = sortSelect.value;

let grids = document.querySelectorAll(".product-grid");

grids.forEach(function(grid){

let cards = Array.from(grid.querySelectorAll(".product-card"));

cards.sort(function(a,b){

let priceA = parseFloat(a.querySelector(".price").innerText.replace("£",""));
let priceB = parseFloat(b.querySelector(".price").innerText.replace("£",""));

if(value === "low"){
return priceA - priceB;
}
else if(value === "high"){
return priceB - priceA;
}
else{
return 0;
}

});

grid.innerHTML = "";

cards.forEach(function(card){
grid.appendChild(card);
});

});

});

}

function renderCart(){

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

if(!cartItems) return;

cartItems.innerHTML = "";

let total = 0;

cart.forEach(function(item,index){

let div = document.createElement("div");

div.classList.add("cart-row");

div.innerHTML = `
<span>${item.name}</span>

<div class="qty-controls">
<button class="decrease" data-index="${index}">-</button>
<span>${item.quantity}</span>
<button class="increase" data-index="${index}">+</button>
</div>

<span>£${(item.price * item.quantity).toFixed(2)}</span>
`;

cartItems.appendChild(div);

total += item.price * item.quantity;

});

if(cartTotal){
cartTotal.innerText = total.toFixed(2);
}

}

// mobile/tablet //


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if(hamburger){
    hamburger.addEventListener("click", function(){
        navMenu.classList.toggle("active");
    });
}

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if(toggle && menu){
    toggle.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
}

});

const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

if(mobileBtn && mobileMenu){

mobileBtn.addEventListener("click", function(){
mobileMenu.classList.add("active");
});

}

if(closeMenu){

closeMenu.addEventListener("click", function(){
mobileMenu.classList.remove("active");
});

}