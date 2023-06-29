// Clothing items array
let clothingItems = [];

// Function to render the clothing items in the table
function renderTable() {
  const table = document.getElementById('clothingTable');
  table.innerHTML = `
  <tr>
  <th>Name</th>
  <th>Quantity</th>
  <th>Style</th>
  <th>Actions</th>
</tr>
  `;

  clothingItems.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = 
    `<td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.type}</td>
      <td>${item.actions}</td>

<td>
        <button onclick="editItem(${index})">Edit</button>

        <button onclick="deleteItem(${index})">Delete</button>
      </td> `;
    table.appendChild(row);
  });
}

// Function to add a new clothing item
function addItem(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const inputType = document.getElementById('type')
  const quantityInput = document.getElementById('quantity');
  const newItem = {
    name: nameInput.value,
    type: inputType.value,
    quantity: parseInt(quantityInput.value)
  };
  clothingItems.push(newItem);
  renderTable();
  nameInput.value = '';
  quantityInput.value = '';
  inputType.value = '';
  
}

// Function to edit a clothing item
function editItem(index) {
  const item = clothingItems[index];
  const newName = prompt('Enter the new name', item.name);
  const newQuantity = parseInt(prompt('Enter the new quantity', item.quantity));
  const newType = parseInt(prompt('Enter the new type', item.type));
  if (newName && !isNaN(newQuantity, newType)) {
    item.name = newName;
    item.type = newType;
    item.quantity = newQuantity;
    renderTable();
  }
}

// Function to delete a clothing item
function deleteItem(index) {
  clothingItems.splice(index, 1);
  renderTable();
}

// Attach event listener to the add form
const addForm = document.getElementById('addForm');
addForm.addEventListener('submit', addItem);
