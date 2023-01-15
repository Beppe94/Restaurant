function createNav() {
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

    homeBtn.setAttribute('id', 'home');
    menuBtn.setAttribute('id', 'menu');
    contactBtn.setAttribute('id', 'contact');
    
    homeBtn.classList.add('tab');
    menuBtn.classList.add('tab');
    contactBtn.classList.add('tab');
    
    btnDiv.appendChild(homeBtn);
    btnDiv.appendChild(menuBtn);
    btnDiv.appendChild(contactBtn);
    
    nav.appendChild(btnDiv);

    return nav;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.setAttribute('class', 'footer');
    
    const footerText = document.createElement('p');
    const footerLink = document.createElement('a');
    const footerIcon = document.createElement('img');

    footerLink.href = 'https://github.com/Beppe94';

    footerIcon.src = 'icons/github.png';

    footerLink.appendChild(footerIcon);
    footerText.innerText = 'Beppe94 2023 - Check out my GitHub';

    footer.appendChild(footerText);
    footer.appendChild(footerLink);

    return footer;
}

function loadPage() {
    const content = document.getElementById('content');
    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'tab-content');
    
    content.appendChild(createNav());   
    content.appendChild(createButtons());
    content.appendChild(tabContent);
    content.appendChild(createFooter());
}

export default loadPage;