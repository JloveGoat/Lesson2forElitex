// Initialize arrays to store current and saved lists
let currentList = [];
let savedLists = [];

// Function to add item to current list
function addItem() {
    const input = document.getElementById('itemInput');
    const item = input.value.trim();
    
    if (item) {
        currentList.push(item);
        input.value = '';
        displayCurrentList();
    }
}

// Function to display current list
function displayCurrentList() {
    const list = document.getElementById('currentList');
    list.innerHTML = '';
    
    currentList.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        list.appendChild(li);
    });
}

// Function to remove item from current list
function removeItem(index) {
    currentList.splice(index, 1);
    displayCurrentList();
}

// Function to save current list
function saveList() {
    if (currentList.length > 0) {
        const timestamp = new Date().toLocaleString();
        savedLists.push({
            items: [...currentList],
            date: timestamp
        });
        currentList = [];
        displayCurrentList();
        displaySavedLists();
    }
}

// Function to display saved lists
function displaySavedLists() {
    const savedListsContainer = document.getElementById('savedLists');
    savedListsContainer.innerHTML = '';
    
    savedLists.forEach((list, index) => {
        const div = document.createElement('div');
        div.className = 'saved-list';
        
        const items = list.items.join(', ');
        div.innerHTML = `
            <h3>List ${index + 1} - ${list.date}</h3>
            <p>${items}</p>
            <button onclick="deleteSavedList(${index})">Delete</button>
        `;
        savedListsContainer.appendChild(div);
    });
}

// Function to delete saved list
function deleteSavedList(index) {
    savedLists.splice(index, 1);
    displaySavedLists();
}

// Initialize displays
displayCurrentList();
displaySavedLists();
