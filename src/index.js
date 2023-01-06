import loadPage from './mainLoad';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';


initialize();

function activeTab() {
    
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
    
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}

function initialize() {
    loadPage();
    loadHome();
    activeTab();
}
