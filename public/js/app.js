//PopUp Menu

const items = [
  {
    name: "Spaghetti",
    description: "Pasta noodles with meatballs and choice of sauce",
    price: 14.65,
    selected: false
  },
  {
    name: "Farfalle Arabiatta",
    description: "Bowtie noodles in marianara: with olives and red peppere",
    price: 16.65,
    selected: false
  },
  {
    name: "Pasta Primavera",
    description: "Shell pasta with mixed veggies in oil sauce",
    price: 15.45,
    selected: false
  },
  {
    name: "Cavatelli",
    description: "Flour and Ricotta cheese pasta with mariana sauce",
    price: 17.85,
    selected: false
  },
  {
    name: "Tomato Pizza",
    description:
      "sauce based sun-dried tomatoes, spinach, olives and mozzarella",
    price: 18.5,
    selected: false
  },
  {
    name: "Fettucine Alfredo",
    description: "Fettucine noodles in cream sauce",
    price: 19.65,
    selected: false
  },
  {
    name: "Cajun Linguine Chicken Alfredo",
    description: "in cream sauce, with cajun seasoning and chicken",
    price: 18.65,
    selected: false
  },
  {
    name: "Fries and Leaves",
    description: "Cipollini onion, fennel,brocoolini farro, lemon and butter",
    price: 19.65,
    selected: false
  },
  {
    name: "Salmon",
    description: "White bean ragu, broccolini, lemon olive oil gremolara,saba",
    price: 21.65,
    selected: false
  },
  {
    name: "Basil and Broccoli",
    description: "Roasted seasonal vegetable, lemon pan sauc",
    price: 18.65,
    selected: false
  },
  {
    name: "New York Strip Steak",
    description: "14oz steak with sauteed mushrooms and red potatoes",
    price: 26.65,
    selected: false
  },
  {
    name: "Ribeye",
    description: "16oz bone-in ribeye steak, baked potatoe",
    price: 26.65,
    selected: false
  },
  {
    name: "Filet Mignon",
    description: "8oz filet mignon with sauteed mushrooms and mashed potatoes",
    price: 28.5,
    selected: false
  }
];

//Output menu items

items.map(item => {
  let markup = `<div class="menu__item popup__item" id='${item.name}' >
                <h4 class="menu__heading">${item.name}</h4>
                <p class="menu__paragraph">${item.description}</p>
            
            <div class="menu__price">&#36;${item.price}</div>
            </div>`;

  document
    .querySelector(".popup__content")
    .insertAdjacentHTML("beforeend", markup);
});

let markup = `<button class="order">Add to Order</button>`;
document
  .querySelector(".popup__content")
  .insertAdjacentHTML("beforeend", markup);

//If menu item is selected toggle active class and selected value
document.querySelector(".popup__content").addEventListener("click", e => {
  if (e.target.parentElement.classList.contains("popup__item")) {
    e.target.parentElement.classList.toggle("active");
  }
  items.map(i => {
    let name = e.target.parentElement.id;
    if (i.name === name) {
      i.selected = !i.selected;
    }
  });
});

//add items to order array
document.querySelector(".popup__content").addEventListener("click", e => {
  if (e.target.className === "order") {
    const order = [];
    items.map(item => {
      if (item.selected === true) {
        order.push(item);
      }
    });

    // add up cost
    let subtotal = order
      .reduce((acc, curr) => {
        return acc + curr.price;
      }, 0)
      .toFixed(2);
    subtotal = parseFloat(subtotal);
    let tax = parseFloat((subtotal * 0.1).toFixed(2));
    let total = parseFloat((subtotal + tax).toFixed(2));

    let popup = document.querySelector(".popup__content");
    popup.innerHTML = "";

    // add item to order page
    let markup = `
          <div class="order__items">
          ${order
            .map(item => {
              if (item.selected === true) {
                return `<div class="order__item"><p class ="order__description description">${item.name}</p> <p class="order__description">${item.description}</p> <p class="order__description total">${item.price}</p></div>`;
              }
            })
            .join("")}
            </div>
            <input type = "textarea" placeholder="Special Request?"/>
            <div class="order__totals">
          <p class="order__info">Subtotal: $${subtotal}</p>
          <p class="order__info">Tax: $${tax}</p>
          <p class="order__info total">Total $${total}</p>
          <button class="pay">Pay</button>
              </div>
              
          `;
    popup.insertAdjacentHTML("beforeend", markup);
  } else if (e.target.className === "pay") {
    items.map(item => (item.selected = false));
    document.querySelector(".popup__content").innerHTML =
      "<h3 class='error'>We are not taking orders at this time</h3>";

    //close popup window and display menu again
    setTimeout(() => {
      document.querySelector(".popup").style.visibility = "hidden";
      document.querySelector(".popup").opacity = 0;

      items.map(item => {
        let markup = `<div class="menu__item popup__item" id='${item.name}' >
                        <h4 class="menu__heading">${item.name}</h4>
                        <p class="menu__paragraph">${item.description}</p>
                    
                    <div class="menu__price">&#36;${item.price}</div>
                    </div>`;

        document
          .querySelector(".popup__content")
          .insertAdjacentHTML("beforeend", markup);
      });

      let markup = `<button class="order">Add to Order</button>`;
      document
        .querySelector(".popup__content")
        .insertAdjacentHTML("beforeend", markup);
    }, 2000);
  }
});
