function buynow() {
  alert("Thank you for your interest. We will contact you soon.");
}

let cartItems = [];
let total = 0;

const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearcartbutton = document.getElementById("clear-cart");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    cartItems.push({ name, price });
    total += price;

    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = ""; // Clear existing cart items
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2); // Update the total
}
function removeitem (index){
  total-= cartitems[index].price;
  cartitems.splice(index,1);
  updateCart();
}
clearcartbutton.addEventListener("click",()=> {
  cartItems =[];
  total = 0;
  updateCart();
})
