const removeItems = document.querySelectorAll("#remove");
const quantities = document.querySelectorAll("#quantity");
const arrows = document.querySelectorAll(".quantity1");
const button = document.querySelectorAll(".button");
const img1 = document.querySelectorAll(".img1");

for (let i = 0; i < removeItems.length; i++) {
  removeItems[i].addEventListener("click", () => {
    removeItems[i].parentElement.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

for (let i = 0; i < quantities.length; i++) {
  quantities[i].addEventListener("change", () => {
    if (quantities[i].value <= 0 || isNaN(quantities[i].value)) {
      quantities[i].value = 1;
    }
    updateCartTotal();
  });
}

for (let i = 0; i < arrows.length; i++) {
  let less = arrows[i].querySelector(".fa-less-than");
  let greater = arrows[i].querySelector(".fa-greater-than");
  let quantity = arrows[i].querySelector("#quantity");

  less.addEventListener("click", () => {
    quantity.value = parseInt(quantity.value) - 1;
    updateCartTotal();
  });

  greater.addEventListener("click", () => {
    quantity.value = parseInt(quantity.value) + 1;
    updateCartTotal();
  });
}

for (let i = 0; i < img1.length; i++) {
  let heartbuttons = img1[i].querySelector(".fa-heart1");
  heartbuttons.classList.add("clicked");
  heartbuttons.addEventListener("click", () => {
    heartbuttons.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    if (!heartbuttons.classList.contains("clicked")) {
      // heartbuttons.classList.remove("clicked");

      heartbuttons.innerHTML = `<i class="fa-regular fa-heart">`;
      heartbuttons.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    }
  });
}


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let cart = button[i].parentElement.parentElement;
    var cartprice = cart.querySelector(".cart-price").textContent;
    let carttitle = cart.querySelector(".cart-title").textContent;
    let img1 = cart.querySelector(".cart-img").src;
    // addToCart(cartprice, carttitle, img1)
    let items = document.querySelector(".items");
    let newdiv = document.createElement("div");
    items.append(newdiv);
    newdiv.classList.add("items1");
    let divcontent = ` <div class="values1">
   <div style="display: flex; align-items: center">
     <img src="${img1}" alt="" width="150" />
     <p style="margin-left: 20px">${carttitle}</p>
   </div>
   <p id="price">${cartprice}</p>
   <div class="quantity1">
       <i class="fa-solid fa-less-than"></i>
       <input type="number" id="quantity" value="1" >
       <i class="fa-solid fa-greater-than"></i>
       <button id="remove" class="remove1">remove</button>
   </div>
 </div>`;
    newdiv.innerHTML = divcontent;
    updateCartTotal();
    let removeItems = newdiv.querySelector("#remove");
    removeItems.addEventListener("click", () => {
      removeItems.parentElement.parentElement.parentElement.remove();
      updateCartTotal();
    });

    let quantities = newdiv.querySelector("#quantity");
    quantities.addEventListener("change", () => {
      if (quantities.value <= 0 || isNaN(quantities.value)) {
        quantities.value = 1;
      }
      updateCartTotal();
    });

    let arrows = newdiv.querySelector(".quantity1");
    let less = arrows.querySelector(".fa-less-than");
    let greater = arrows.querySelector(".fa-greater-than");
    let quantity = arrows.querySelector("#quantity");
    less.addEventListener("click", () => {
      quantity.value = parseInt(quantity.value) - 1;
      updateCartTotal();
    });

    greater.addEventListener("click", () => {
      quantity.value = parseInt(quantity.value) + 1;
      updateCartTotal();
    });
  });
}

// function addToCart(cartprice, ) {

// }

function updateCartTotal() {
  let items = document.querySelectorAll(".items1");
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    let price = items[i].querySelector("#price");
    let quantity = items[i].querySelector("#quantity");
    total += quantity.value * parseFloat(price.textContent.replace("$", ""));
  }
  total = Math.floor(total * 100) / 100;
  document.querySelector("#totalp").textContent = "$" + total;
}
