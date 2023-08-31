var tableData = null;

// Lade die Tabelle beim Laden der Seite
window.onload = function() {
  loadTable();
};

function loadTable() {
  // JSON-Daten aus externer data.json Datei laden
  fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
      var tableHtml = '<thead><tr>';
      var headerRow = jsonData[0];
      for (var i = 0; i < headerRow.length; i++) {
        tableHtml += '<th>' + headerRow[i] + '<input type="checkbox" checked onchange="toggleColumn(i)">' + '</th>';
      }

      // Rest des Codes für die Tabelle...
    })
    .catch(error => {
      console.error('Fehler beim Laden der JSON-Daten:', error);
    });
}

function toggleColumn(columnIndex) {
  // Code für das Ein- und Ausblenden der Spalte...
}
