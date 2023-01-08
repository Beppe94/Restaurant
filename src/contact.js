function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
    
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function createContact() {
    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('class', 'info-tab')

    const numberDiv = document.createElement('div');
    const phoneNumber = document.createElement('p');
    numberDiv.setAttribute('class', 'number-info');
    
    const locationDiv = document.createElement('div');
    const location = document.createElement('p');
    locationDiv.setAttribute('class', 'location-info');

    phoneNumber.innerText = '123 456789';
    location.innerText = 'One near you!';

    numberDiv.appendChild(getImage('../dist/icons/phone.png'));
    numberDiv.appendChild(phoneNumber);
    locationDiv.appendChild(getImage('../dist/icons/location.png'))
    locationDiv.appendChild(location);

    contactInfo.appendChild(numberDiv);
    contactInfo.appendChild(locationDiv);
 
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