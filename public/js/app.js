// Menu

const dinnerItems = [
  {
    name: "Creamy Tomato Soup, V GF",
    description: "organic tomato, fennel, coconut cream V GF",
    price: 9.65,
    selected: false,
  },
  {
    name: "Jackfruit Lettuce Wraps, V GF",
    description:
      "Korean-style jackfruit, pickled shiitake, carrot, bean sprout, cilantro, cucumber & side of butter lettuce V GF",
    price: 12.45,
    selected: false,
  },
  {
    name: "Seasonal Ingredient Salad, VEG GF",
    description:
      "organic arugula, grilled asparagus, shaved fennel, parmesan, aleppo chili, lemon oregano vinaigrette VEG GF",
    price: 13.65,
    selected: false,
  },
  {
    name: "Chopped Salad, VEG",
    description:
      "medjool date, dried cranberry, jicama, apple, manchego, farro, marcona almond, vinaigrette VEG",
    price: 13.65,
    selected: false,
  },
  {
    name: "Teriyaki Quinoa Bowl, V GF",
    description:
      "broccoli, rainbow carrot, bok choy, mushroom, brown rice, avocado, toasted sesame V GF",
    price: 13.65,
    selected: false,
  },
  {
    name: "Korean Noodle Bowl, V GF",
    description:
      "sweet potato noodle, pickled shiitake, organic spinach, rainbow carrot, bean sprout, toasted sesame V GF",
    price: 13.65,
    selected: false,
  },

  {
    name: "Grass-fed Burger",
    description:
      "umami, mushroom, caramelized onion, arugula, parmesan, mayonnaise, flax seed bun",
    price: 14.65,
    selected: false,
  },
  {
    name: "Turkey Burger",
    description:
      "smashed avocado, organic tomato, butter lettuce, smoked gouda, jalapeño remoulade, flax seed bun",
    price: 14.65,
    selected: false,
  },
  {
    name: "Avocado Toast",
    description:
      "Toast topped with avocado, poached eggs, seasame seasoning and olive oil",
    price: 15.45,
    selected: false,
  },
  {
    name: "Grilled Chicken Avocado Wrap",
    description:
      "organic tomato, cucumber, hummus, fresh mozzarella, lemon oregano vinaigrette, house-made pita",
    price: 15.45,
    selected: false,
  },
  {
    name: "Shrimp Tacos, GF",
    description:
      "smashed avocado, cilantro chimichurri, pickled red onion, organic arugula salad GF",
    price: 17.85,
    selected: false,
  },
  {
    name: "Grass-fed Steak Tacos, GF",
    description:
      "smashed avocado, cilantro chimichurri, pickled red onion, organic arugula salad GF",
    price: 18.5,
    selected: false,
  },
  {
    name: "Spaghetti Squash Casserole, VEG GF",
    description:
      "crushed organic DiNapoli tomato, caramelized onion, zucchini, fresh mozzarella VEG GF",
    price: 19.65,
    selected: false,
  },
  {
    name: "Margherita, VEG",
    description: "crushed organic DiNapoli tomato, fresh mozzarella, basil VEG",
    price: 18.65,
    selected: false,
  },
  {
    name: "Fries and Leaves GF",
    description:
      "Cipollini onion, fennel,brocoolini farro, lemon and butter GF",
    price: 19.65,
    selected: false,
  },

  {
    name: "Basil and Broccoli GF",
    description: "Roasted seasonal vegetable, lemon pan sauce GF",
    price: 18.65,
    selected: false,
  },

  {
    name: "Grass-fed Steak",
    description: "Grass-fed strip steak with mixed vegetables",
    price: 29.65,
    selected: false,
  },
  {
    name: "Grilled Salmon",
    description:
      "caramelized onion farro, quinoa, organic arugula, grilled asparagus, cilantro pumpkin seed pesto",
    price: 29.65,
    selected: false,
  },
];
const drinkItems = [
  {
    name: "Cucumber Mint",
    description: "fresh cucumber juice, mint, lime, agave",
    price: 5.65,
    selected: false,
  },
  {
    name: "Kale Banana Ginger",
    description:
      "organic kale, fresh ginger, banana, cucumber, organic apple juice, lemon juice",
    price: 7.65,
    selected: false,
  },
  {
    name: "Lavendar Vanilla Tea",
    description: "organic vanilla, a dash of lavender",
    price: 7.65,
    selected: false,
  },

  {
    name: "Organic Bone Broth",
    description: "whole 30 & paleo approved, high-protein beef bone broth",
    price: 8.45,
    selected: false,
  },
];
const dessertItems = [
  {
    name: "Chia Seed Pudding, V GF",
    description: "banana, toasted coconut V GF",
    price: 6.65,
    selected: false,
  },
  {
    name: "Chocolate Brownie Sundae, VEG GF",
    description: "caramel, vanilla ice cream, cacao nib VEG GF",
    price: 7.65,
    selected: false,
  },
  {
    name: "Key Lime Mouse, V GF",
    description: "organic strawberry, avocado, coconut, almond crumble V GF",
    price: 7.65,
    selected: false,
  },
];

//Populate Menu
dinnerItems.map((item) => {
  let markup = `
   <div class="menu__item">
            <h4 class="menu__item--heading">${item.name}</h4>
            <p class="menu__item--paragraph">
             ${item.description}
            </p>

            <div class="menu__item--price">&#36; ${item.price}</div>
          </div>
  `;
  document.querySelector(".dinner").insertAdjacentHTML("beforeend", markup);
});
drinkItems.map((item) => {
  let markup = `
   <div class="menu__item">
            <h4 class="menu__item--heading">${item.name}</h4>
            <p class="menu__item--paragraph">
             ${item.description}
            </p>

            <div class="menu__item--price">&#36; ${item.price}</div>
          </div>
  `;
  document.querySelector(".drinks").insertAdjacentHTML("beforeend", markup);
});
dessertItems.map((item) => {
  let markup = `
   <div class="menu__item">
            <h4 class="menu__item--heading">${item.name}</h4>
            <p class="menu__item--paragraph">
             ${item.description}
            </p>

            <div class="menu__item--price">&#36; ${item.price}</div>
          </div>
  `;
  document.querySelector(".desserts").insertAdjacentHTML("beforeend", markup);
});

dinnerItems.map((item) => {
  let markup = `<div class="menu__item popup__item" id='${item.name}' >
                <h4 class="menu__item--heading">${item.name}</h4>
                <p class="menu__item--paragraph">${item.description}</p>
            
            <div class="menu__item--price">&#36;${item.price}</div>
            </div>`;

  document
    .querySelector(".popup__content")
    .insertAdjacentHTML("beforeend", markup);
});

let markup = `<button class="popup__order">Add to Order</button>`;
document
  .querySelector(".popup__content")
  .insertAdjacentHTML("beforeend", markup);

//If menu item is selected toggle active class and selected value
document.querySelector(".popup__content").addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("popup__item")) {
    e.target.parentElement.classList.toggle("active");
  }
  dinnerItems.map((i) => {
    let name = e.target.parentElement.id;
    if (i.name === name) {
      i.selected = !i.selected;
    }
  });
});

//add dinnerItems to order array
document.querySelector(".popup__content").addEventListener("click", (e) => {
  if (e.target.className === "popup__order") {
    const order = [];
    dinnerItems.map((item) => {
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
          <div class="order__dinnerItems">
          ${order
            .map((item) => {
              if (item.selected === true) {
                return `<div class="order__item"><p class ="order__description description">${item.name}</p> <p class="order__description">${item.description}</p> <p class="order__description total">${item.price}</p></div>`;
              }
            })
            .join("")}
            </div>
            <textarea placeholder="Special Request?"></textarea>
            <div class="order__totals">
          <p class="order__info">Subtotal: $${subtotal}</p>
          <p class="order__info">Tax: $${tax}</p>
          <p class="order__info total">Total $${total}</p>
          <button class="pay">Pay</button>
              </div>
              
          `;
    popup.insertAdjacentHTML("beforeend", markup);
  } else if (e.target.className === "pay") {
    dinnerItems.map((item) => (item.selected = false));
    document.querySelector(".popup__content").innerHTML =
      "<h3 class='error'>We are not taking orders at this time</h3>";

    //close popup window and display menu again
    setTimeout(() => {
      document.querySelector(".popup").style.visibility = "hidden";
      document.querySelector(".popup").opacity = 0;

      dinnerItems.map((item) => {
        let markup = `<div class="menu__item popup__item" id='${item.name}' >
                        <h4 class="menu__item--heading">${item.name}</h4>
                        <p class="menu__item--paragraph">${item.description}</p>
                    
                    <div class="menu__item--price">&#36;${item.price}</div>
                    </div>`;

        document
          .querySelector(".popup__content")
          .insertAdjacentHTML("beforeend", markup);
      });

      let markup = `<button class="popup__order">Add to Order</button>`;
      document
        .querySelector(".popup__content")
        .insertAdjacentHTML("beforeend", markup);
    }, 2000);
  }
});
