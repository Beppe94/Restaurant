function createHome() {
    const navBar = document.createElement('div');
    navBar.setAttribute('class', 'navBar');
    navBar.setAttribute('id', 'nav')
    const title = document.createElement('h1');

    title.textContent = 'La Pizzeria';

    navBar.appendChild(title);

    return navBar;
}


function createButtons() {
    const nav = document.getElementById('nav');
    const btnDiv = document.createElement('div');

    btnDiv.setAttribute('class', 'buttons');    
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu';
    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'Contact Us';

    btnDiv.appendChild(homeBtn);
    btnDiv.appendChild(menuBtn);
    btnDiv.appendChild(contactBtn);
    
    nav.appendChild(btnDiv);

    return nav;
}

function createParagraph() {
    const infoDiv = document.createElement('div');

    const introDiv = document.createElement('div');
    const introTxt = document.createElement('h1');
    introTxt.innerText = 'Intro';
    const paragraph = document.createElement('p');

    paragraph.innerText = 'Welcome to our pizzeria! We offer a wide variety of delicious pizzas made with fresh, high-quality ingredients. Our dough is made daily and hand-tossed to perfection, and our sauces are made from scratch using the finest tomatoes. In addition to pizza, we also have a selection of salads, pastas, and sandwiches to choose from. Come in and dine with us, or order online for pickup or delivery. We can\'t wait to serve you!';
    introDiv.appendChild(introTxt);
    introDiv.appendChild(paragraph);

    const hourDiv = document.createElement('div');
    const hourTxt = document.createElement('h1');
    hourTxt.innerText = 'Hours';
    const hourParagraph = document.createElement('p');


    hourParagraph.innerText = 'Monday: 9am - 8pm Tuesday: 9am - 8pm Wednesday: 9am - 8pm Thursday: 9am - 8pm Friday: 9am - 9pm Saturday: 9am - 9pm Sunday: 9am - 9pm';
    hourDiv.appendChild(hourTxt);
    hourDiv.appendChild(hourParagraph);

    infoDiv.appendChild(introDiv);
    infoDiv.appendChild(hourDiv);

    return infoDiv;
}

function loadSite() {
    const content = document.getElementById('content');

    content.appendChild(createHome())
    content.appendChild(createButtons())
    content.appendChild(createParagraph())
}


export default loadSite;