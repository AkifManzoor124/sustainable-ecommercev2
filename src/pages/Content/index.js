console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

const dpContainer = document.getElementById('dp-container');

const reactAppContainer = document.createElement('div');
reactAppContainer.id = 'amazon-sustainable-ecommerce-rating-extension-root'; // Unique ID for your React component container
dpContainer.appendChild(reactAppContainer);

const scriptElement = document.createElement('script');
scriptElement.src = chrome.runtime.getURL('overlay.bundle.js'); // Load your React app script
reactAppContainer.appendChild(scriptElement);