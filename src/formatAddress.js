/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function (address) {
    const { street, house, apartment, city, postalCode, country } = address;
    const addressParts = [];
    if (street) addressParts.push(street);
    if (house) addressParts.push(house);
    if (apartment) addressParts.push(apartment);
    if (city) addressParts.push(city);
    if (postalCode) addressParts.push(postalCode);
    if (country) addressParts.push(country);
    return addressParts.join(', ');
  };
};
