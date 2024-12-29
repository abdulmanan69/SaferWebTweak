// ==UserScript==
// @name         SAFER Search Persister
// @match        https://safer.fmcsa.dot.gov/query.asp
// @grant        none
// ==/UserScript==

window.onload = () => {

  const searchInput = document.getElementById('4');

  // Get last search value
  const lastSearch = sessionStorage.getItem('lastSearch');

  if (lastSearch) {
    searchInput.value = lastSearch;
  }

  searchInput.addEventListener('input', () => {
    // Save search value
    sessionStorage.setItem('lastSearch', searchInput.value);
  });

  // Focus and select input
  searchInput.focus();
  searchInput.select();

  // Change to number input
  searchInput.type = 'number';

  // Remove non-numeric characters
  searchInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
  });

};