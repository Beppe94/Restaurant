function makeDays(day) {
    const hoursParagraph = document.createElement('p')
    hoursParagraph.innerText = day;

    return hoursParagraph;
}

function createHome() {
    const infoDiv = document.createElement('div');
    infoDiv.setAttribute('class', 'home-tab');
    infoDiv.setAttribute('id', 'home');
    const hourDiv = document.createElement('div');
    hourDiv.setAttribute('class', 'hours-class');

    const introDiv = document.createElement('div');
    introDiv.setAttribute('class', 'intro-class');
    const introTxt = document.createElement('h1');
    introTxt.innerText = 'About Us';
    const paragraph = document.createElement('p');
    
    paragraph.innerText = 'Welcome to our pizzeria! We offer a wide variety of delicious pizzas made with fresh, high-quality ingredients. Our dough is made daily and hand-tossed to perfection, and our sauces are made from scratch using the finest tomatoes. In addition to pizza, we also have a selection of salads, pastas, and sandwiches to choose from. Come in and dine with us, or order online for pickup or delivery. We can\'t wait to serve you!';

    const hourTxt = document.createElement('h1')
    hourTxt.innerText = 'Hours';

    introDiv.appendChild(introTxt);
    introDiv.appendChild(paragraph);

    infoDiv.appendChild(introDiv);
    infoDiv.appendChild(hourDiv);
    hourDiv.appendChild(hourTxt);
    
    const days = [
        makeDays('Monday: 9am - 8pm,'),
        makeDays('Tuesday: 9am - 8pm,'),
        makeDays('Wednesday: 9am - 8pm,'),
        makeDays('Thursday: 9am - 8pm,'),
        makeDays('Friday: 9am - 9pm,'),
        makeDays('Saturday: 9am - 9pm,'),
        makeDays('Sunday: 9am - 9pm'),
    ]

    days.forEach((day) => {
        hourDiv.appendChild(day);
    })
    
    
    return infoDiv;
}

function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
    
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function loadHome() {
    const tabContent = document.getElementById('tab-content');
    tabContent.textContent = '';

    setBtnActive('home');
    
    tabContent.appendChild(createHome());
}

export default loadHome;