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

function loadMenu() {
    const tabContent = document.getElementById('tab-content');

    tabContent.textContent = ''

    setBtnActive('menu');

    tabContent.appendChild(createMenu());
}

export default loadMenu;