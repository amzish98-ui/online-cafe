let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

if(cartCount){
cartCount.innerText = cart.length;
}

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function(button){

button.addEventListener("click", function(){

let name = button.parentElement.querySelector("h3").innerText;

let priceText = button.parentElement.querySelector(".price").innerText;

let price = parseFloat(priceText.replace("£",""));

let product = {
name: name,
price: price
};

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

if(cartCount){
cartCount.innerText = cart.length;
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

if(cartItems){

cartItems.innerHTML = "";

let total = 0;

cart.forEach(function(item,index){

let div = document.createElement("div");

div.innerHTML = `
${item.name} - £${item.price}
<button class="remove-item" data-index="${index}">Remove</button>
`;

cartItems.appendChild(div);

total += item.price;

});

if(cartTotal){
cartTotal.innerText = total.toFixed(2);
}

}

document.addEventListener("click",function(e){

if(e.target.classList.contains("remove-item")){

let index = e.target.dataset.index;

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}

});

const dropdown = document.getElementById("cart-dropdown");
if(dropdown){
dropdown.innerHTML = "";
if(cart.length === 0){
dropdown.innerHTML = "<p>Your cart is empty</p>";

}else{

cart.forEach(function(item){
let p = document.createElement("p");
p.innerText = item;
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

cart = [];
localStorage.removeItem("cart");

if(message){
message.innerText = "✓ Order placed! Your order number is #" + orderNumber;
}

setTimeout(function(){
location.reload();
},3000);

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