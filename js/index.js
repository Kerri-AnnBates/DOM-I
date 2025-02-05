const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Nav
const navItems = document.querySelectorAll('nav a');
const listOfnavContent = Object.values(siteContent.nav);

navItems.forEach((item, i) => {
  item.textContent = listOfnavContent[i];
  item.style.color = 'green';
});

const nav = document.querySelector('nav');
const newNav1 = document.createElement('a')
const newNav2 = document.createElement('a')
newNav1.textContent = 'Login';
newNav2.textContent = 'Account';
nav.prepend(newNav1);
nav.append(newNav2);

// Cta section
const ctaHeader = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
ctaHeader.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

// Main content
const topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

// Bottom content
const bottomContent = document.querySelectorAll('.bottom-content .text-content');
bottomContent[0].children[0].textContent = siteContent["main-content"]['services-h4'];
bottomContent[0].children[1].textContent = siteContent["main-content"]['services-content'];
bottomContent[1].children[0].textContent = siteContent["main-content"]['product-h4'];
bottomContent[1].children[1].textContent = siteContent["main-content"]['product-content'];
bottomContent[2].children[0].textContent = siteContent["main-content"]['vision-h4'];
bottomContent[2].children[1].textContent = siteContent["main-content"]['vision-content'];

// Contact
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactparagraphs = document.querySelectorAll('.contact p');
const listOfContactParagraphs = Object.values(siteContent.contact);

contactparagraphs.forEach((paragraph, i) => {
  paragraph.textContent = listOfContactParagraphs[i+1];
});

// Footer
const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;

// Stretch
const headers = document.querySelectorAll('h4');
const links = document.querySelectorAll('a');

headers.forEach(header => {
  header.style.color = 'slategrey';
});

links.forEach(link => {
  link.style.color = 'green';
});

