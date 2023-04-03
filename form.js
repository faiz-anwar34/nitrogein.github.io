// Get references to the form elements
let form = document.querySelector('#suggestion-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let suggestionInput = document.querySelector('#suggestion');

// Handle form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  let name = nameInput.value;
  let email = emailInput.value;
  let suggestion = suggestionInput.value;

  // Open a database
  let request = indexedDB.open('myDatabase', 1);

  // Create an object store if it doesn't exist
  request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore('suggestions', { autoIncrement: true });
  };

  // Handle success and error
  request.onsuccess = function(event) {
    let db = event.target.result;

    // Add the form data to the object store
    let transaction = db.transaction('suggestions', 'readwrite');
    let objectStore = transaction.objectStore('suggestions');
    objectStore.add({ name, email, suggestion });

    // Clear the form
    form.reset();
  };
  request.onerror = function(event) {
    console.error(event.target.error);
  };
});