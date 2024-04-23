var visibleColumns = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

function applyFilter() {

  var dropdownFilterForm = document.getElementById('dropdown-filter-form');
  var selectedValueForm = dropdownFilterForm.value;

  var dropdownFilterSitz = document.getElementById('dropdown-filter-sitz');
  var selectedValueSitz = dropdownFilterSitz.value;

  var dropdownFilterMA = document.getElementById('dropdown-filter-ma');
  var selectedValueMA = dropdownFilterMA.value;

  var dropdownFilterUmsatz = document.getElementById('dropdown-filter-umsatz');
  var selectedValueUmsatz = dropdownFilterUmsatz.value;

  var dropdownFilterVermögen = document.getElementById('dropdown-filter-vermögen');
  var selectedValueVermögen = dropdownFilterVermögen.value;

  var dropdownFilterVerpackung = document.getElementById('dropdown-filter-verpackung');
  var selectedValueVerpackung = dropdownFilterVerpackung.value;

  var dropdownFilterAbfall = document.getElementById('dropdown-filter-abfall');
  var selectedValueAbfall = dropdownFilterAbfall.value;

  var dropdownFilterEnergie = document.getElementById('dropdown-filter-energie');
  var selectedValueEnergie = dropdownFilterEnergie.value;

  var dropdownFilterKommend = document.getElementById('dropdown-filter-kommend');
  var selectedValueKommend = dropdownFilterKommend.value;

  var dropdownFilterElektro = document.getElementById('dropdown-filter-elektro');
  var selectedValueElektro = dropdownFilterElektro.value;

  var dropdownFilterData = document.getElementById('dropdown-filter-data');
  var selectedValueData = dropdownFilterData.value;

  var dropdownFilterProdukt = document.getElementById('dropdown-filter-produkt');
  var selectedValueProdukt = dropdownFilterProdukt.value;

  var dropdownFilterBatterien = document.getElementById('dropdown-filter-batterien');
  var selectedValueBatterien = dropdownFilterBatterien.value;

  var dropdownFilterChemikalien = document.getElementById('dropdown-filter-chemikalien');
  var selectedValueChemikalien = dropdownFilterChemikalien.value;

  var dropdownFilterPlastik = document.getElementById('dropdown-filter-plastik');
  var selectedValuePlastik = dropdownFilterPlastik.value;

  var dropdownFilterDigi = document.getElementById('dropdown-filter-digi');
  var selectedValueDigi = dropdownFilterDigi.value;

  var table = document.getElementById('excel-table');
  var rows = table.getElementsByTagName('tr');

  for (var i = 1; i < rows.length; i++) { // Starte bei Index 1, um die Kopfzeile zu überspringen
  var row = rows[i];
  var cells = row.getElementsByTagName('td');

  var showRow = false;
  if (cells[1].textContent.trim() === "Gesetz" || cells[1].textContent.trim() === "Interpretierte Anforderung" || cells[1].textContent.trim() === "Lösungsorientierte Anforderung") {
    showRow = true;
  }

  if (selectedValueForm === 'Andere' && cells[19].textContent.trim() === 'Kapitalgeselschaft') {   
    showRow = false;
  }

  if (selectedValueSitz === 'außerhalb Deutschlands' && cells[20].textContent.trim() === 'Deutschland') {   
    showRow = false;
  }

  if (selectedValueSitz === 'Deutschland' && cells[20].textContent.trim() === 'England') {   //Ergenzen falls Gesetze mit spezifischem sitz im ausland hinzu kommen
    showRow = false;
  }

  if (selectedValueMA === '0-249' && parseInt(cells[22].textContent.trim()) > 249) {   
    showRow = false;
  }

  if (selectedValueMA === '250-999' && parseInt(cells[22].textContent.trim()) > 999) {   
    showRow = false;
  }

  if (selectedValueMA === '1000-2999' && parseInt(cells[22].textContent.trim()) > 2999) {   
    showRow = false;
  }

  if (selectedValueUmsatz === 'Unter 20' && parseInt(cells[23].textContent.trim()) > 19) {   
    showRow = false;
  }

  if (selectedValueUmsatz === '20-39' && parseInt(cells[23].textContent.trim()) > 39) {   
    showRow = false;
  }

  if (selectedValueUmsatz === '40-59' && parseInt(cells[23].textContent.trim()) > 59) {   
    showRow = false;
  }

  if (selectedValueVermögen === 'Unter 20' && parseInt(cells[24].textContent.trim()) > 19) {   
    showRow = false;
  }

  if (selectedValueVermögen === '20-39' && parseInt(cells[24].textContent.trim()) > 39) {   
    showRow = false;
  }

  if (selectedValueVerpackung === 'Nein' && cells[25].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueAbfall === 'Nein' && cells[26].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueEnergie === 'Nein' && cells[27].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueElektro === 'Nein' && cells[28].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueProdukt === 'Nein' && cells[29].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueData === 'Nein' && cells[30].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueDigi === 'Nein' && cells[31].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValuePlastik === 'Nein' && cells[32].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueBatterien === 'Nein' && cells[33].textContent.trim() === 'x') {   
    showRow = false;
  }
  if (selectedValueChemikalien === 'Nein' && cells[34].textContent.trim() === 'x') {   
    showRow = false;
  }
  const currentDate = new Date();
  const cellDate = new Date(cells[13].textContent.trim());
  if (selectedValueKommend === 'In Kraft' && cellDate >= currentDate) {
    showRow = false;
  }
  if (selectedValueKommend === 'Kommend' && cellDate < currentDate) {
    showRow = false;
  }

  row.style.display = showRow ? '' : 'none';
    }
}

// Aktiviere den Filter beim Klick auf den Button
document.querySelector('button').addEventListener('click', function() {
  applyFilter();
});

// filter zurücksetz button 
function resetFilters() {

  document.getElementById('dropdown-filter-kommend').value = 'Alle';
  document.getElementById('dropdown-filter-form').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-sitz').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-ma').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-umsatz').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-vermögen').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-abfall').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-produkt').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-plastik').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-elektro').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-batterien').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-chemikalien').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-digi').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-data').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-verpackung').value = 'keine Auswahl';
  document.getElementById('dropdown-filter-energie').value = 'keine Auswahl';
  applyFilter();
}

// Email für CONTACT Button
function openEmail() {
  var emailAddress = 'contact@used.community';
  var subject = 'Nachhaltigkeitsanforderungen';
  var body = '';

  var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(body);
  window.location.href = mailtoLink;
}

function searchTable() {
  var searchInput = document.getElementById('search-input');
  var searchText = searchInput.value.toLowerCase();
  var table = document.getElementById('excel-table');
  var rows = table.getElementsByTagName('tr');

  for (var i = 1; i < rows.length; i++) { // Starte bei Index 1, um die Kopfzeile zu überspringen
    var row = rows[i];
    var rowText = row.textContent.toLowerCase();

    if (rowText.includes(searchText)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
}

function toggleColumn(index) {
  visibleColumns[index] = !visibleColumns[index];
}

// GESETZE Excel Datei downloaden mit info sheet
document.getElementById("exportButton").addEventListener("click", function () {
  const table = document.getElementById("excel-table");

  // Erstellen Sie eine Kopie der Tabelle und behalten Sie nur die Tabellenköpfe und Zellen für die Spalten 1, 2 und 5.
  const clonedTable = table.cloneNode(true);

  const rows = clonedTable.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
      for (let j = cells.length - 1; j >= 0; j--) {
          if (j !== 0 && j !== 1 && j !== 2 && j !== 4 && j !== 6 && j !== 7 && j !== 8 && j !== 13) {
              rows[i].removeChild(cells[j]); // Entfernen Sie die Zellen in den nicht benötigten Spalten
          }
      }
    const heads = rows[i].getElementsByTagName("th");
      for (let j = heads.length - 1; j >= 0; j--) {
        if (j !== 0 && j !== 1 && j !== 2 && j !== 4 && j !== 6 && j !== 7 && j !== 8 && j !== 13) {
          rows[i].removeChild(heads[j]); // Entfernen Sie die Zellen in den nicht benötigten Spalten
        }
      }
    }

  const wb = XLSX.utils.table_to_book(clonedTable, { sheet: "Tabelle" });

  const infoSheet = XLSX.utils.aoa_to_sheet([
    ["Filterinformationen:"],    
    ["Derzeitige oder kommende Regularien:", document.getElementById('dropdown-filter-kommend').value],
    ["Geselschaftsform:", document.getElementById('dropdown-filter-form').value],
    ["Sitz oder Niederlassung:", document.getElementById('dropdown-filter-sitz').value],
    ["Anzahl der Mitarbeiter:", document.getElementById('dropdown-filter-ma').value],
    ["Umsatz in Mio.€:", document.getElementById('dropdown-filter-umsatz').value],
    ["Gesamtvermögen in Mio.€:", document.getElementById('dropdown-filter-vermögen').value],
    ["Bereitstellung von Produkten:", document.getElementById('dropdown-filter-produkt').value],
    ["Elektrische Produkte:", document.getElementById('dropdown-filter-elektro').value],
    ["Energieverbrauchsrelevante Produkte:", document.getElementById('dropdown-filter-energie').value],
    ["Verwendung von Batterien:", document.getElementById('dropdown-filter-batterien').value],
    ["Verwendung von Chemikalien:", document.getElementById('dropdown-filter-chemikalien').value],
    ["Produkte aus Einwegkunststoff:", document.getElementById('dropdown-filter-plastik').value],
    ["Verwendung von Verpackung:", document.getElementById('dropdown-filter-verpackung').value],
    ["Aufkommen von Abfällen:", document.getElementById('dropdown-filter-abfall').value],
    ["Verwaltung von Digitalen Diensten:", document.getElementById('dropdown-filter-digi').value],
    ["Verarbeitung von Personendaten:", document.getElementById('dropdown-filter-data').value]
  ]);

  // Füge das infoSheet zur Arbeitsmappe hinzu
  XLSX.utils.book_append_sheet(wb, infoSheet, "Filterinfo");

  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
  const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

  const url = URL.createObjectURL(blob);

  // Erstellen Sie einen unsichtbaren Link und klicken Sie auf ihn, um den Download auszulösen.
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "used-Community Gesetzestabelle.xlsx";
  document.body.appendChild(a);
  a.click();

  setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
  }, 100);
});

function toggleColumn(index) {
  visibleColumns[index] = !visibleColumns[index];
}

// Funktion zum Konvertieren des binären Datenstroms in eine herunterladbare Datei
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}