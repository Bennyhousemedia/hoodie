

//grab all element with class of add-cart
let cart = document.querySelectorAll('.add-cart')


//create an array to contain the products
let products = [
    {  name: 'Cream Hoodie',
       tag:'cream',
       price: 9,
       incart : 0        
    },
    {
        name: 'Purple Hoodie',
        tag:'purple',
        price: 18,
        incart :0

    },
    {
        name: 'Pink Hoodie',
        tag: 'pink',
        price: 15,
        incart: 0

    },
    {
        name: 'Black Winter Jacket',
        tag: 'winter',
        price: 20,
        incart: 0

    },
    {
        name: 'Complete Pink',
        tag: 'completepink',
        price: 19,
        incart: 0

    },
    {
        name: 'Red Hoodie',
        tag: 'red',
        price: 35,
        incart: 0

    },
    {
        name: 'Yellow Hoodie',
        tag: 'yellow',
        price: 20,
        incart: 0

    },
    {
        name: 'Zealot X',
        tag: 'zealotx',
        price: 45,
        incart: 0

    },
    {
        name: 'Wheela Pro',
        tag: 'wheelapro',
        price: 120,
        incart: 0

    },
    {
        name: 'Elegance',
        tag: 'elegance',
        price: 150,
        incart: 0

    },
    {
        name: 'Sahz',
        tag: 'sahz',
        price: 20,
        incart: 0

    },
    {
        name: 'Deep Purple',
        tag: 'deeppurple',
        price: 121,
        incart: 0

    },
    {
        name: 'Gildan Hoodie',
        tag: 'gildan',
        price: 49,
        incart: 0

    },
    {
        name: 'Midnight Blue Hoodie',
        tag: 'midnightblue',
        price: 16,
        incart: 0

    },
    {
        name: 'Xanda',
        tag: 'xanda',
        price: 145,
        incart:0

    },
    {
        name: 'Reedick',
        tag: 'reedick',
        price: 110,
        incart: 0

    },
    {
        name: 'Pro',
        tag:'pro',
        price: 150,
        incart: 0

    },
    {
        name: 'Lille',
        tag: 'lille',
        price: 210,
        incart: 0

    },
    {
        name: 'Black Ztpper',
        tag: 'blackzipper',
        price: 30,
        incart: 0

    },
    {
        name: 'Revendo',
        tag: 'revendo',
        price: '75',
        incart:0

    },
    {
        name: 'Slice',
        tag: 'slice',
        price: 210,
        inCart: 0
    },
    {
        name: 'Sport Wear',
        tag: 'sportwear',
        price: 30,
        inCart: 0
    },
    {
        name: 'Stripe',
        tag: 'stripe',
        price: 54,
        inCart: 0
    },
    {
        name: 'Zipper',
        tag: 'zipper',
        price: 175,
        inCart: 0
    },
    {
        name: 'Multi Colour',
        tag: 'multi',
        price: 110,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blackshirt',
        price: 60,
        inCart: 0
    },
    {
        name: 'Denim Shirt',
        tag: 'denim',
        price: 44,
        inCart: 0
    },
    {
        name: 'Long Sleeve Gray',
        tag: 'longsleeve',
        price: 75,
        inCart: 0
    },
    {
        name: 'Round Neck Blue',
        tag: 'roundneck',
        price: 110,
        inCart: 0
    },
    {
        name: 'Vintage Shirt',
        tag: 'vintage',
        price: 160,
        inCart: 0
    },
    {
        name: 'White Long Sleeve',
        tag: 'whitelongsleeve',
        price: 25,
        inCart: 0
    },
    {
        name: 'Short Sleeve',
        tag: 'shortsleeve',
        price: 25,
        inCart: 0
    },
    {
        name: 'Boxers',
        tag: 'boxers',
        price: 6,
        inCart: 0
    },
    {
        name: 'Blue Brief',
        tag: 'bluebrief',
        price: 4,
        inCart: 0
    },
    {
        name: 'Brown Pant',
        tag: 'brownpant',
        price: 5,
        inCart: 0
    },
    {
        name: 'Cloudon',
        tag: 'cloudon',
        price: 11,
        inCart: 0
    },
    {
        name: 'Boxers Cycling',
        tag: 'cycling',
        price: 12,
        inCart: 0
    },
    {
        name: 'Lace Set',
        tag: 'lace',
        price: 14,
        inCart: 0
    },
    {
        name: 'Black Pant',
        tag: 'blackpant',
        price: 5,
        inCart: 0
    },
    {
        name: 'Singlet',
        tag: 'singlet',
        price: 11,
        inCart:0
    },

    {
        name: 'White Hoodie',
        tag: 'white',
        price: 12,
        inCart: 0
    },
    {
        name: 'Black Hoodie',
        tag: 'black',
        price: 10,
        inCart: 0
    },

    {
        name: 'Blue Hoodie',
        tag: 'blue',
        price: 11,
        inCart: 0
    },

    {
        name: 'Brown Hoodie',
        tag: 'brown',
        price: 9,
        inCart: 0
    },
    {
        name: 'Milky Hoodie',
        tag: 'milky',
        price: 16,
        inCart: 0
    },
    {
        name: 'Wine Hoodie',
        tag: 'wine',
        price: 15,
        inCart: 0
    }
]


console.log (products)


//create a for loop to run through the array which is the image div containing all the products
for (let i = 0; i < cart.length; i++ ){
    cart[i].addEventListener('click', () => {
        console.log('Clicked product:', products[i]);
        cartNumbers(products[i]);
        totalCost (products[i])
    })
}


//create a function make items stay on the cart despite refresh

function keepCartContent() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
        //below is a new addition from chatgpt
        displayCart();
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



function totalCost(product) {



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
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems)

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        console.log(Object.values(cartItems))
// ...

Object.values(cartItems).map(item => {
    productContainer.innerHTML += `
        <div class="xxx">
            <div class="product">
                <ion-icon class="close" name="close-circle-outline" onclick="removeItem('${item.tag}')"></ion-icon>
                <img src="${item.tag}.jpg">
                <span>${item.name}</span>
            </div>

            <div class="price">
                $${item.price} 
            </div>

            <div class="quantity">
                <ion-icon class="decrease" name="caret-back-outline" onclick="decreaseQuantity('${item.tag}')"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="caret-forward-outline" onclick="increaseQuantity('${item.tag}')"></ion-icon>
            </div>

            <div class="total">
                $${item.inCart * item.price}.00
            </div>
        </div>
    `;
});


        productContainer.innerHTML += `
        <div class = "basketTotalContainer">
            <h4 class = "basketTotalTitle">
                Basket Total:
            </h4>
            <h4 class = "basketTotal">
                $${cartCost}.00
            </h4>

        </div>
        `
    }
    

}

function displayBasketTotal() {
    let cartCost = localStorage.getItem('totalCost');
    let basketTotalContainer = document.querySelector('.basketTotalContainer');

    if (basketTotalContainer) {
        basketTotalContainer.innerHTML = `
        
            <div>
                <h4 class="basketTotalTitle">
                    Basket Total:
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}.00
                </h4>
            </div>

            <div>
                <button class="checkoutButton" onclick="checkout()">Checkout</button>                
            </div>
            
        `;
    }
}

function removeItem(tag) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    if (cartItems[tag] && cartItems[tag].inCart > 0) {
        // Get the quantity of the item
        const removedQuantity = cartItems[tag].inCart;

        // Update total cost by subtracting the removed item's total cost
        let cartCost = localStorage.getItem('totalCost');
        localStorage.setItem('totalCost', cartCost - (cartItems[tag].price * removedQuantity));

        // Remove the item from the cart
        delete cartItems[tag];

        // Update cart numbers
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers - removedQuantity);
            document.querySelector('.cart span').textContent = productNumbers - removedQuantity;
        }

        // Update localStorage with the modified cartItems
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        // Update cart display
        displayCart();
        keepCartContent();
    }
}

function decreaseQuantity(tag) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    if (cartItems[tag] && cartItems[tag].inCart > 1) {
        // Decrease the inCart quantity by 1
        cartItems[tag].inCart -= 1;

        // Update total cost by subtracting the item's price
        let cartCost = localStorage.getItem('totalCost');
        localStorage.setItem('totalCost', cartCost - cartItems[tag].price);

        // Update cart numbers
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers >= 1) {
            localStorage.setItem('cartNumbers', productNumbers - 1);
            document.querySelector('.cart span').textContent = productNumbers - 1;
        }

        // Update localStorage with the modified cartItems
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        // Update cart display
        displayCart();
        keepCartContent();
    }
}

function increaseQuantity(tag) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    if (cartItems[tag]) {
        // Increase the inCart quantity by 1
        cartItems[tag].inCart += 1;

        // Update total cost by adding the item's price
        let cartCost = localStorage.getItem('totalCost');
        localStorage.setItem('totalCost', parseFloat(cartCost) + parseFloat(cartItems[tag].price));

        // Update cart numbers
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers >= 0) {
            localStorage.setItem('cartNumbers', parseInt(productNumbers) + 1);
            document.querySelector('.cart span').textContent = parseInt(productNumbers) + 1;
        }

        // Update localStorage with the modified cartItems
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        // Update cart display
        displayCart();
        keepCartContent();
    }
}

keepCartContent();
displayCart(); 



