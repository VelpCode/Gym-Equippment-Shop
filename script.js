
let products = {
    data: [{
        productName: "0-70lb Hex Dumbell",
        category: "Weights/Machines",
        price: "50",
        image: "1.png"
    },
    {
        productName: "45lb Iron Barbell",
        category: "Weights/Machines",
        price: "75",
        image: "2.png"
    },
    {
        productName: "0-50lb Kettlebells",
        category: "Weights/Machines",
        price: "45",
        image: "5.png"
    },
    {
        productName: "Chest Fly Machine",
        category: "Weights/Machines",
        price: "145",
        image: "3.png"
    },
    {
        productName: "Treadmill",
        category: "Weights/Machines",
        price: "480",
        image: "4.png" 
    },
    {
        productName: "Creating Monohydrate",
        category: "Supplements",
        price: "30",
        image: "11.png" 
    },
    {
        productName: "Preworkout Formula",
        category: "Supplements",
        price: "25",
        image: "12.png" 
    },
    {
        productName: "Weightlifting Belt",
        category: "Equippment/Wear",
        price: "130",
        image: "/7.png" 
    },
    {
        productName: "Weightlifting Gloves",
        category: "Equippment/Wear",
        price: "45",
        image: "8.png" 
    },
    {
        productName: "Weightlifting Bag",
        category: "Supplements",
        price: "120",
        image: "9.png" 
    },
    {
        productName: "Shaker bottle",
        category: "Accessories",
        price: "30",
        image: "10.png" 
    },
    {
        productName: "Resistance Bands",
        category: "Accessories",
        price: "30",
        image: "11.png" 
    }
    ]
}

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", "i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container")
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card);
}