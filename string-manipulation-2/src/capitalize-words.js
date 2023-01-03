/* exported capitalizeWords */
function capitalizeWords(string) {
  return string.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
