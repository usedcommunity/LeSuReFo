var tableData = [];

function showExcelTable(data) {
  var table = document.getElementById("dataTable");
  table.innerHTML = "";

  var headerRow = document.createElement("tr");
  for (var i = 0; i < data[0].length; i++) {
    var th = document.createElement("th");
    th.textContent = data[0][i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (var j = 1; j < data.length; j++) {
    var row = document.createElement("tr");
    for (var k = 0; k < data[j].length; k++) {
      var cell = document.createElement("td");
      cell.textContent = data[j][k];
      row.appendChild(cell);
    }
    table.appendChild(row);
    tableData.push(data[j]);
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
  for (var i = 0; i < filteredData[0].length; i++) {
    var th = document.createElement("th");
    th.textContent = filteredData[0][i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (var j = 1; j < filteredData.length; j++) {
    var row = document.createElement("tr");
    for (var k = 0; k < filteredData[j].length; k++) {
      var cell = document.createElement("td");
      cell.textContent = filteredData[j][k];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

document.getElementById("searchInput").addEventListener("input", function(e) {
  var searchTerm = e.target.value;
  filterTable(searchTerm);
});

var excelFileUrl = "data.xlsx";
var xhr = new XMLHttpRequest();
xhr.open("GET", excelFileUrl, true);
xhr.responseType = "arraybuffer";

xhr.onload = function(e) {
  var arrayBuffer = xhr.response;
  var data = new Uint8Array(arrayBuffer);
  var workbook = XLSX.read(data, { type: "array" });
  var worksheet = workbook.Sheets[workbook.SheetNames[0]];
  var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  showExcelTable(jsonData);
};

xhr.send();
