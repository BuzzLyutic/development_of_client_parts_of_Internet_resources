window.onload = displayItems;

   let products = [
    { "name": "Шины", "id": 1, count: 1, price: 100 },
    { "name": "Диски", "id": 2, count: 1, price: 200 },
    { "name": "Блок цилиндров", "id": 3, count: 1, price: 1000 },
    { "name": "Капот", "id": 4, count: 1, price: 300 },
    { "name": "ЭБУ", "id": 5, count: 1, price: 500 }
    ];
   let cart = [];

   function displayItems() {
    let itemsContainer = document.getElementById('products');
    let cartElement = document.getElementById('cart'); // Assuming your cart has id="cart"
    itemsContainer.innerHTML = '';

    products.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add("product");
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Цена: $${item.price}</p>
            <button onclick="addToCart(${item.id})">Добавить в корзину</button>
        `;
        itemElement.style.border = "2px black solid";
        itemElement.style.padding = "5px";
        itemElement.dataset.id = item.id; // Add the product id to the element as a data attribute

        itemElement.onmousedown = function(event) {
            let shiftX = event.clientX - itemElement.getBoundingClientRect().left;
            let shiftY = event.clientY - itemElement.getBoundingClientRect().top;

            itemElement.style.position = 'absolute';
            itemElement.style.zIndex = 1000;

            function moveAt(pageX, pageY) {
                itemElement.style.left = pageX - shiftX + 'px';
                itemElement.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            itemElement.onmouseup = function(event) {
                document.removeEventListener('mousemove', onMouseMove);
                itemElement.onmouseup = null;

                // Check if the mouse is over the cart
                itemElement.hidden = true;
                let elementUnderMouse = document.elementFromPoint(event.clientX, event.clientY);
                itemElement.hidden = false;
                if (elementUnderMouse === cartElement || cartElement.contains(elementUnderMouse)) {
                    addToCart(item.id);
                }
            };
        };

        itemElement.ondragstart = function() {
            return false;
        };

        itemsContainer.appendChild(itemElement);
    });
}



   function addToCart(id) {
    for (let product of cart){
        if (product.id === id){
            changeQuantity(id);
            return;
        }
    }
    
    let item = products.find(item => item.id === id);
    cart.push(item);
    displayCart();
    displayTotal();
    
    }

    function changeQuantity(id){
        let item = products.find(item => item.id === id);
        item.count += 1;
        displayCart();
        displayTotal();
    }

    function removeFromCart(id) {
        let index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            displayCart();
            displayTotal();
        }
    }

    function clearCart() {
        cart.splice(0, cart.length);
        displayCart();
        displayTotal();
    }

    function displayCart() {
        let cartContainer = document.getElementById('cart');
        cartContainer.innerHTML = '';
  
        cart.forEach(item => {
            let itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <h4>${item.name}</h4>
                <p>Quantity: ${item.count}</p>
                <button class="btn" onclick=removeFromCart(${item.id})><i class="fa fa-shopping-basket"></i></button>
                <button onclick=changeQuantity(${item.id})>Увеличить</button>

            `;
            cartContainer.appendChild(itemElement);
        });
    }

    function calculateTotal() {
        let total = 0;
        cart.forEach(item => {
            total += item.count * item.price;
        });
        return total;
    }

    function displayTotal() {
        let totalPriceElement = document.getElementById('total');
        totalPriceElement.innerHTML = `Итого: $${calculateTotal().toFixed(2)}`;
    }

    /*function filterArray(arr, a, b) {
        return arr.filter(item => item >= a && item <= b);
     }
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     let filteredNumbers = filterArray(numbers, 3, 7);
     console.log(filteredNumbers); // [3, 4, 5, 6, 7]*/


