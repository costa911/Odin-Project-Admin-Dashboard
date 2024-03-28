// main.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Retrieve input values
    var date = document.getElementById("reading-date").value;
    var electricity = document.getElementById("electricity-reading").value;
    var water = document.getElementById("water-reading").value;
  
    // Create a new row for the table
    var table = document.getElementById("history-table");
    
    // If the table doesn't have a header row, add one
    if (!table.tHead) {
      var header = table.createTHead();
      var headerRow = header.insertRow(0);
      var dateHeader = document.createElement("th");
      dateHeader.textContent = "Date";
      var electricityHeader = document.createElement("th");
      electricityHeader.textContent = "Electricity";
      var waterHeader = document.createElement("th");
      waterHeader.textContent = "Water";
      headerRow.appendChild(dateHeader);
      headerRow.appendChild(electricityHeader);
      headerRow.appendChild(waterHeader);
    }
  
    // Insert a new row after the header
    var row = table.insertRow(-1);
    var dateCell = row.insertCell(0);
    var electricityCell = row.insertCell(1);
    var waterCell = row.insertCell(2);
  
    // Populate the cells with input values
    dateCell.textContent = date;
    electricityCell.textContent = electricity;
    waterCell.textContent = water;
  
    // Reset the form fields
    document.getElementById("reading-form").reset();
  }
  
  // Event listener for form submission
  document.getElementById("reading-form").addEventListener("submit", handleSubmit);
  