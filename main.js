

//grab all element with class of add-cart
let cart = document.querySelectorAll('.add-cart')


//create an array to contain the products
let products = [
    {
        name: 'White Hoodie',
        tag: 'whitehoodie',
        price: 12,
        inCart: 0
    },
    {
        name: 'Black',
        tag: 'blackhoodie',
        price: 10,
        inCart: 0
    },

    {
        name: 'Blue Hoodie',
        tag: 'bluehoodie',
        price: 11,
        inCart: 0
    },

    {
        name: 'Brown Hoodie',
        tag: 'brownhoodie',
        price: 9,
        inCart: 0
    },
    {
        name: 'Milky Hoodie',
        tag: 'milkyhoodie',
        price: 16,
        inCart: 0
    },
    {
        name: 'Wine Hoodie',
        tag: 'winehoodie',
        price: 15,
        inCart: 0
    },
]


//create a for loop to run through the array which is the image div containing all the products
for (let i = 0; i < cart.length; i++ ){
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost (products[i])
    })
}


//create a function make items stay on the cart despite refresh

function keepCartContent() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

//create a function to show how many items is added to cart
function cartNumbers(product) {
    //to make sure the cart dont clear on refresh
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    //if statement to check if theres product in the cart already
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product) 
}

//AI FUNCTION BELOW. TEST WITH TUTORIA FUNCTION FIRST

// function cartNumbers(product) {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);

//     // Check if the element with class 'cart' and its child 'span' exists
//     let cartElement = document.querySelector('.cart span');
//     if (cartElement) {
//         if (productNumbers) {
//             localStorage.setItem('cartNumbers', productNumbers + 1);
//             cartElement.textContent = productNumbers + 1;
//         } else {
//             localStorage.setItem('cartNumbers', 1);
//             cartElement.textContent = 1;
//         }
//         setItems(product);
        
//     } else {
//         console.error("Element with class 'cart' or its child 'span' not found");
//     }
// }


function setItems(product) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {};
    
    if (cartItems[product.tag]) {
        // If the product is already in the cart, increment the quantity
        cartItems[product.tag].inCart += 1;
    } else {
        // If the product is not in the cart, add it with a quantity of 1
        product.inCart = 1;
        cartItems[product.tag] = product;
    }

    // Log cartItems in JSON format to the console
    // console.log("CartItems in JSON format:", JSON.stringify(cartItems, null, 2));

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// function totalCost (product){
//     // console.log("The product price is", product.price)
//     let cartCost = localStorage.getItem('totalCost');
//     console.log("My cartCost is", cartCost)

//     localStorage.setItem("totalCost", product.price)
// }

function totalCost(product) {

//     let cartCost = localStorage.getItem('totalCost');

//     if (cartCost !== null) {
//         cartCost = parseFloat(cartCost); // Use parseFloat to handle decimal values
//         localStorage.setItem('totalCost', cartCost + product.price);
//     } else {
//         localStorage.setItem('totalCost', product.price);
//     }

//     console.log("My cartCost is", localStorage.getItem('totalCost'));
// }

let cartCost = localStorage.getItem('totalCost');

if (cartCost !== null) {
    // Explicitly convert the existing total cost to a float
    cartCost = parseFloat(cartCost);

    // Update the total cost by adding the current product price
    localStorage.setItem('totalCost', cartCost + product.price);
} else {
    // If there is no existing total cost, set it to the current product price
    localStorage.setItem('totalCost', product.price);
}

console.log("My cartCost is", localStorage.getItem('totalCost'));

}

function displayCart (){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector('.products-container');

    console.log(cartItems)

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <img src="${item.tag}.jpg">

                </div>
            `;
        });
    }
    

}

keepCartContent();
displayCart(); 