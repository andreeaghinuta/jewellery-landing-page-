let products = {
  data: [
    {
      productName: "HAND ENGRAVED SMALL SIGNET RINGS",
      category: "Rings",
      price: "1,460",
      image: "rings1.jpg",
    },
    {
      productName: "0.4CT DIAMOND FINE SOLITAIRE RINGS",
      category: "Rings",
      price: "2,100",
      image: "rings2.jpg",
    },
    {
      productName: "SHIMMER THIN SQUARE RINGS",
      category: "Rings",
      price: "2,210",
      image: "rings3.jpg",
    },
    {
      productName: "YELLOW GOLD MEDIUM NECKLACES",
      category: "Necklaces",
      price: "305",
      image: "necklaces1.jpg",
    },
    {
      productName: "TINY TRUE NORTH CHARM BRACELETS",
      category: "Bracelets",
      price: "970",
      image: "bracelets1.jpg",
    },
    {
      productName: "HAND CARVED CUFFS",
      category: "Cuffs",
      price: "1,700",
      image: "cuffs1.jpg",
    },
    {
      productName: "SMALL ORGANIC EARRINGS",
      category: "Earrings",
      price: "1,115",
      image: "earrings1.jpg",
    },
    {
      productName: "HAND CARVED CUFFS",
      category: "Cuffs",
      price: "1,115",
      image: "cuffs2.jpg",
    },
    {
      productName: "TINY MOON HOOP EARRINGS",
      category: "Earrings",
      price: "880",
      image: "earrings2.jpg",
    },
    {
      productName: "STAR-DUST STUD EARRINGS",
      category: "Earrings",
      price: "645",
      image: "earrings3.jpg",
    },
    {
      productName: "HAND ENGRAVED SMALL SIGNET RINGS",
      category: "Rings",
      price: "1,460",
      image: "rings4.jpg",
    },
    {
      productName: "0.4CT DIAMOND FINE SOLITAIRE RINGS",
      category: "Rings",
      price: "2,100",
      image: "rings5.jpg",
    },
    {
      productName: "SHIMMER THIN SQUARE RINGS",
      category: "Rings",
      price: "2,210",
      image: "rings6.jpg",
    },
    {
      productName: "YELLOW GOLD MEDIUM NECKLACES",
      category: "Necklaces",
      price: "305",
      image: "necklaces2.jpg",
    },
    {
      productName: "TINY TRUE NORTH CHARM BRACELETS",
      category: "Bracelets",
      price: "970",
      image: "bracelets2.jpg",
    },
    {
      productName: "HAND CARVED CUFFS",
      category: "Cuffs",
      price: "1,700",
      image: "cuffs3.jpg",
    },
    {
      productName: "SMALL ORGANIC EARRINGS",
      category: "Earrings",
      price: "1,115",
      image: "earrings4.jpg",
    },
    {
      productName: "HAND CARVED CUFFS",
      category: "Cuffs",
      price: "1,115",
      image: "cuffs4.jpg",
    },
    {
      productName: "TINY MOON HOOP EARRINGS",
      category: "Earrings",
      price: "880",
      image: "earrings5.jpg",
    },
    {
      productName: "STAR-DUST STUD EARRINGS",
      category: "Earrings",
      price: "645",
      image: "earrings6.jpg",
    },
  ],
};

// Filter and search JS

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h5");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  let subContainer = document.createElement("div");
  subContainer.classList.add("sub-container");
  //add to cart button
  let addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("add-to-cart");
  addToCartBtn.innerHTML = "Add to cart";
  subContainer.appendChild(addToCartBtn);
  //add to faves button

  card.appendChild(container);
  card.appendChild(subContainer);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};

const addCart = document.querySelectorAll(".add-to-cart");
const cartShow = document.querySelector(".nav_listicon span");

for (var i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", () => {
    cartCount();
  });
}

function cartCount() {
  let prdCount = localStorage.getItem("cartsCount");
  prdCount = parseInt(prdCount);
  if (prdCount) {
    localStorage.setItem("cartsCount", prdCount + 1);
    cartShow.textContent = prdCount + 1;
  } else {
    localStorage.setItem("cartsCount", 1);
    cartShow.textContent = prdCount = 1;
  }
}

function displayCart() {
  let prdCount = localStorage.getItem("cartsCount");
  if (prdCount) {
    cartShow.textContent = prdCount;
  }
}

displayCart();

// Pagination

// let thisPage = 1;
// let limit = 10;
// let list = document.querySelectorAll(".card");

// function loadItem() {
//   let beginGet = limit * (thisPage - 1);
//   let endGet = limit * thisPage - 1;
//   list.forEach((item, key) => {
//     if (key >= beginGet && key <= endGet) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
//   listPage();
// }
// loadItem();

// function listPage() {
//   let count = Math.ceil(list.length / limit);
//   document.querySelector(".listPage").innerHTML = "";

//   if (thisPage != 1) {
//     let prev = document.createElement("li");
//     prev.innerText = "PREV";
//     prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
//     document.querySelector(".listPage").appendChild(prev);
//   }

//   for (i = 1; i <= count; i++) {
//     let newPage = document.createElement("li");
//     newPage.innerText = i;
//     if (i == thisPage) {
//       newPage.classList.add("active");
//     }
//     newPage.setAttribute("onclick", "changePage(" + i + ")");
//     document.querySelector(".listPage").appendChild(newPage);
//   }

//   if (thisPage != count) {
//     let next = document.createElement("li");
//     next.innerText = "NEXT";
//     next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
//     document.querySelector(".listPage").appendChild(next);
//   }
// }
// function changePage(i) {
//   thisPage = i;
//   loadItem();
// }
