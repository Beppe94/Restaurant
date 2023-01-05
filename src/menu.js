function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function makePizza(name, sourceImage, description, price) {
    const dish = document.createElement('div');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const img = document.createElement('img');
    img.setAttribute('src', sourceImage);

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
            'https://www.davesamericanfood.com/wp-content/uploads/2020/04/pepperoni-pizza-scaled.jpg',
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