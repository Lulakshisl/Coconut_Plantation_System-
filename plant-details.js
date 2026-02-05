let plantForm = document.getElementById("plantForm");
let plantTable = document.getElementById("plantTable").getElementsByTagName("tbody")[0];
let plants = [];
let editIndex = null;

// Add / Update Plant
plantForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let age = document.getElementById("age").value;

    if(editIndex !== null){
        plants[editIndex] = {name, location, age};
        editIndex = null;
    } else {
        plants.push({name, location, age});
    }

    plantForm.reset();
    renderTable();
});

// Render Table
function renderTable() {
    plantTable.innerHTML = "";
    plants.forEach((plant, index) => {
        let row = plantTable.insertRow();
        row.insertCell(0).innerText = plant.name;
        row.insertCell(1).innerText = plant.location;
        row.insertCell(2).innerText = plant.age;
        let actions = row.insertCell(3);
        actions.innerHTML = `<button onclick="editPlant(${index})">Edit</button> 
                             <button onclick="deletePlant(${index})">Delete</button>`;
    });
}

// Edit Plant
function editPlant(index) {
    let plant = plants[index];
    document.getElementById("name").value = plant.name;
    document.getElementById("location").value = plant.location;
    document.getElementById("age").value = plant.age;
    editIndex = index;
}

// Delete Plant
function deletePlant(index) {
    if(confirm("Are you sure you want to delete this plant?")){
        plants.splice(index, 1);
        renderTable();
    }
}
