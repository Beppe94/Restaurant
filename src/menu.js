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
    const menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menu-content');

    tabContent.textContent = ''

    setBtnActive('menu');

    const pizzas = [
        makePizza(
            'Pizza Pepperoni',
            'https://www.davesamericanfood.com/wp-content/uploads/2020/04/pepperoni-pizza-scaled.jpg',
            'Tomato sauce, Mozzarella, Pepperoni',
            '4.99'
        ),
        makePizza(
            'Pizza Margherita',
            'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg',
            'Tomato sauce, Mozzarella, Fresh basil',
            '3.99'
        ),
        makePizza(
            'Pizza Frutti di Mare',
            'https://cdn.tasteatlas.com/images/dishes/2475b8aa94c1463dbe9dc17e0f38a063.jpg?mw=1300',
            'Tomato sauce, Shrimps, Moussels, Squid',
            '6.99'
        ),
        makePizza(
            'Pizza Sausage',
            'https://healthyschoolrecipes.com/wp-content/uploads/2020/10/sausage-onion-pizza-scaled.jpg',
            'Tomato sauce, Mozzarella, Sausages',
            '5.99'
        ),
    ]
    
    pizzas.forEach((pizza) => {
        pizza.setAttribute('class', 'menu-item');
        menuContent.appendChild(pizza);
    })

    tabContent.appendChild(menuContent)
}

export default loadMenu;