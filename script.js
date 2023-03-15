
let products = {
    data: [{
        productName: "0-70lb Hex Dumbell",
        category: "Weights/Machines",
        price: "50",
        image: "img/1.png",
    },
    {
        productName: "45lb Iron Barbell",
        category: "Weights/Machines",
        price: "75",
        image: "img/2.png",
    },
    {
        productName: "0-50lb Kettlebells",
        category: "Weights/Machines",
        price: "45",
        image: "img/5.png",
    },
    {
        productName: "Chest Fly Machine",
        category: "Weights/Machines",
        price: "145",
        image: "img/3.png",
    },
    {
        productName: "Treadmill",
        category: "Weights/Machines",
        price: "480",
        image: "img/4.png",
    },
    {
        productName: "Creating Monohydrate",
        category: "Supplements",
        price: "30",
        image: "img/11.png",
    },
    {
        productName: "Preworkout Formula",
        category: "Supplements",
        price: "25",
        image: "img/12.png",
    },
    {
        productName: "Weightlifting Belt",
        category: "Equippment/Wear",
        price: "130",
        image: "img/7.png" 
    },
    {
        productName: "Weightlifting Gloves",
        category: "Equippment/Wear",
        price: "45",
        image: "img/8.png",
    },
    {
        productName: "Weightlifting Bag",
        category: "Supplements",
        price: "120",
        image: "img/9.png",
    },
    {
        productName: "Shaker bottle",
        category: "Accessories",
        price: "30",
        image: "img/10.png",
    },
    {
        productName: "Resistance Bands",
        category: "Accessories",
        price: "30",
        image: "img/11.png"
    },

],
};


function toggleModal() {
  document.body.classList.toggle("modal--open");
}

function darkTheme() {
  document.body.classList.toggle("darkTheme");
}

const scaleFactor = 1 / 20;
const scaleFactor2 = 1 / 5;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const xRot = event.clientX * scaleFactor2;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 - 1 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${xRot * boolInt}deg)`;
  }
  
}



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
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
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

  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🚀', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();


  const initGetDocumentation = () => {
    const menuSidebar = document.querySelector("#menu-sidebar")
    const appSidebar = document.querySelector("#app-sidebar")
    menuSidebar.addEventListener("click", () => {
    appSidebar.classList.toggle("show")
    })
      
      
    }
      
      
    initGetDocumentation();
