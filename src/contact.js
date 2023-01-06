function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
    
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function createContact() {
    const contactInfo = document.createElement('div');
    const phoneNumber = document.createElement('p');
    const location = document.createElement('p');

    phoneNumber.innerText = '123456789';
    location.innerText = 'One near you!';

    contactInfo.appendChild(getImage('../dist/icons/call_FILL0_wght400_GRAD0_opsz48.png'));
    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(getImage('../dist/icons/location_on_FILL0_wght400_GRAD0_opsz48.png'))
    contactInfo.appendChild(location);
 
    return contactInfo;
}

function getImage(path) {
    const icon = document.createElement('img');

    icon.src = path;

    return icon;
}

function loadContact() {
    const tabContent = document.getElementById('tab-content');

    tabContent.textContent = '';

    setBtnActive('contact');

    tabContent.appendChild(createContact());
}

export default loadContact;