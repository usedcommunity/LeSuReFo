var tableData = [];

function showCSVTable(data) {
  var table = document.getElementById("dataTable");
  table.innerHTML = "";

  var rows = data.split("\n");
  var headerRow = document.createElement("tr");
  var headers = rows[0].split(",");
  for (var i = 0; i < headers.length; i++) {
    var th = document.createElement("th");
    th.textContent = headers[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (var j = 1; j < rows.length; j++) {
    var row = document.createElement("tr");
    var cells = rows[j].split(",");
    for (var k = 0; k < cells.length; k++) {
      var cell = document.createElement("td");
      cell.textContent = cells[k];
      row.appendChild(cell);
    }
    table.appendChild(row);
    tableData.push(cells);
  }
}

function filterTable(searchTerm) {
  var filteredData = tableData.filter(function(row) {
    return row.some(function(cell) {
      return cell.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  var table = document.getElementById("dataTable");
  table.innerHTML = "";

  var headerRow = document.createElement("tr");
  var headers = tableData[0];
  for (var i = 0; i < headers.length; i++) {
    var th = document.createElement("th");
    th.textContent = headers[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (var j = 0; j < filteredData.length; j++) {
    var row = document.createElement("tr");
    var cells = filteredData[j];
    for (var k = 0; k < cells.length; k++) {
      var cell = document.createElement("td");
      cell.textContent = cells[k];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

document.getElementById("searchInput").addEventListener("input", function(e) {
  var searchTerm = e.target.value;
  filterTable(searchTerm);
});

var csvFileUrl = "data.csv";
var xhr = new XMLHttpRequest();
xhr.open("GET", csvFileUrl, true);

xhr.onload = function(e) {
  var csvData = xhr.responseText;
  showCSVTable(csvData);
};

xhr.send();