console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

var titleElement = document.getElementById('productTitle');
var title = titleElement ? titleElement.textContent.trim() : '';
console.log(title);

const brandElement = document.querySelector('#bylineInfo');
const brand = brandElement ? brandElement.textContent.trim() : '';
console.log(brand);

var featureBulletsElement = document.querySelector('#feature-bullets');
var featureBullets = featureBulletsElement ? featureBulletsElement.textContent.trim() : '';
console.log(featureBullets);

var productDescriptionElement = document.querySelector('#productDescription');
var productDescription = productDescriptionElement ? productDescriptionElement.textContent.trim() : '';
console.log(productDescription);

// Select the table element by its ID
const table = document.getElementById('productDetails_techSpec_section_1');
var manufacturer = '';

// Check if the table exists
if (table) {
    // Find all the rows within the table
    const rows = table.querySelectorAll('tr');

    // Loop through the rows to find the "Manufacturer" row
    for (const row of rows) {
        const headerCell = row.querySelector('th');
        if (headerCell && headerCell.textContent.trim() === 'Manufacturer') {
            const manufacturerCell = row.querySelector('td');
            if (manufacturerCell) {
                manufacturer = manufacturerCell.textContent.trim();
                break; // Exit the loop once the manufacturer is found
            }
        }
    }
}
console.log(manufacturer);

console.log('sendingMessage');
chrome.runtime.sendMessage({
    title: title,
    brand: brand,
    featureBullets: featureBullets,
    productDescription: productDescription,
    manufacturer: manufacturer
});