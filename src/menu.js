function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

export function createMenu() {
    const menuDiv = document.createElement('div');
    
    const pizzaName = document.createElement('h2');
    const pizzaDescription = document.createElement('p');
    const pizzaPrice = document.createElement('p');

    pizzaName.innerText = 'Quattro Formaggi';
    pizzaDescription.innerText = 'Tomato sauce, Mozzarella, Gorgonzola, Parmigiano Reggiano and goat cheese';
    pizzaPrice.innerText = '6.99';

    menuDiv.appendChild(pizzaName);
    menuDiv.appendChild(pizzaDescription);
    menuDiv.appendChild(pizzaPrice);
    
    return menuDiv
}

function makePizza(name, sourceImage, description, price) {
    const dish = document.createElement('div');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const img = document.createElement('img');
    img.src = sourceImage;

    const foodInfo = document.createElement('div');

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;

    foodInfo.appendChild(foodDescription);
    foodInfo.appendChild(foodPrice);

    dish.appendChild(foodName);
    dish.appendChild(img);
    dish.appendChild(foodInfo);

    return dish;
}

function loadMenu() {
    const tabContent = document.getElementById('tab-content');

    tabContent.textContent = ''

    setBtnActive('menu');

    const pizzas = [
        makePizza(
            'pizza1',
            'img',
            'descript',
            '1.00'
        ),
        makePizza(
            'pizza2',
            'img',
            'descript',
            '1.00'
        ),
        makePizza(
            'pizza3',
            'img',
            'descript',
            '1.00'
        ),
        makePizza(
            'pizza4',
            'img',
            'descript',
            '1.00'
        ),
    ]
    
    pizzas.forEach((pizza) => {
        tabContent.appendChild(pizza);
    })
}

export default loadMenu;