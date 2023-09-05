var visibleColumns = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

function applyFilter() {

//var dropdownFilter = document.getElementById('dropdown-filter');
//var selectedValue = dropdownFilter.value;

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

//var dropdownFilterPflicht = document.getElementById('dropdown-filter-pflicht');
//var selectedValuePflicht = dropdownFilterPflicht.value;

var dropdownFilterKommend = document.getElementById('dropdown-filter-kommend');
var selectedValueKommend = dropdownFilterKommend.value;

var checkbox3 = document.getElementById('checkbox-3');
var checkbox4 = document.getElementById('checkbox-4');
var checkbox5 = document.getElementById('checkbox-5');

var table = document.getElementById('excel-table');
var rows = table.getElementsByTagName('tr');

for (var i = 1; i < rows.length; i++) { // Starte bei Index 1, um die Kopfzeile zu überspringen
var row = rows[i];
var cells = row.getElementsByTagName('td');

var showRow = false;
if (cells[4].textContent.trim() === "Gesetz" || cells[4].textContent.trim() === "Interpretierte Anforderung" || cells[4].textContent.trim() === "Lösungsorientierte Anforderung") {
  showRow = true;
}


if (!checkbox3.checked) {
  showRow = false;
}


if (!checkbox4.checked && cells[4].textContent.trim() === 'Interpretierte Anforderung') {
  showRow = false;
} 
if (!checkbox5.checked && cells[4].textContent.trim() === 'Lösungsorientierte Anforderung') {
  showRow = false;
} 

// hier muss noch die if schleife für die verweise hin. checkbox 4 und 5
//if (checkbox4.unchecked && cells[4].textContent.trim() === "Interpretierte Anforderung" && cells[15].textContent.trim() === ($(this).find('td:nth-child(1)').text())) {
//  showRow = true;
//}
//if (checkbox5.checked && cells[15].textContent.trim() == cells[].textContent.trim()) {
//  showRow = true;
//} 

/*if (selectedValue === 'Gesetz' && cells[14].textContent.trim() !== 'Gesetz') {
  showRow = false;
}
if (selectedValue === 'Richtlinie' && cells[14].textContent.trim() !== 'Richtlinie') {
  showRow = false;
}
if (selectedValue === 'Standard' && cells[14].textContent.trim() !== 'Standard') {
  showRow = false;
}
*/

if (selectedValueForm === 'Andere' && cells[19].textContent.trim() === 'Kapitalgeselschaft') {   
  showRow = false;
}

if (selectedValueSitz === 'Ausland' && cells[20].textContent.trim() === 'Deutschland') {   
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

// hier fehlen noch die If schleifen für Pflicht und Kommend.
// if (selectedValuePflicht === 'Verpflichtend' && cells[??].textContent.trim() !== 'Pflicht') {showRow = false;}
// if (selectedValuePflicht === 'Freiwillig' && cells[??].textContent.trim() !== 'Freiwillig') {showRow = false;}

const currentDate = new Date();
const cellDate = new Date(cells[13].textContent.trim());
if (selectedValueKommend === 'In Kraft' && cellDate >= currentDate) {
  showRow = false;
}
if (selectedValueKommend === 'Kommend' && cellDate < currentDate) {
  showRow = false;
}


/*
for (let j = 1; j < rows.length; j++) {
  const idColumn = rows[j].cells[0].textContent;

  if (checkbox4.checked && cells[4].textContent.trim() === "Interpretierte Anforderung" && (cells[15].textContent.trim() != rows[j].cells[0].textContent)) {
    showRow = false
  }
}
*/

row.style.display = showRow ? '' : 'none';

}
}

// Aktiviere den Filter beim Klick auf den Button
document.querySelector('button').addEventListener('click', function() {
applyFilter();
});


// filter zurücksetz button 
function resetFilters() {

  document.getElementById('dropdown-filter-kommend').value = '--';
  document.getElementById('dropdown-filter-form').value = '--';
  document.getElementById('dropdown-filter-sitz').value = '--';
  document.getElementById('dropdown-filter-ma').value = '--';
  document.getElementById('dropdown-filter-umsatz').value = '--';
  document.getElementById('dropdown-filter-vermögen').value = '--';
  document.getElementById('dropdown-filter-abfall').value = '--';
  document.getElementById('dropdown-filter-verpackung').value = '--';
  document.getElementById('dropdown-filter-energie').value = '--';
  document.getElementById('checkbox-3').checked = true;
  document.getElementById('checkbox-4').checked = true;
  document.getElementById('checkbox-5').checked = true;
  
  applyFilter();
}


//Abhier Community Filter

const tagInput = document.getElementById('tagInput');
const tagList = document.getElementById('tagList');
const tagListItems = tagList.querySelectorAll('.tag-list-item');
const selectedTagsContainer = document.getElementById('selectedTags');
const filterButton = document.getElementById('filterButton');
const tableRows = document.querySelectorAll('tbody tr');

tagListItems.forEach(item => {
  item.addEventListener('click', () => {
    const tagText = item.textContent;
    const selectedTag = document.createElement('span');
    selectedTag.textContent = tagText;
    selectedTag.className = 'selected-tag';
    selectedTag.addEventListener('click', () => {
      selectedTag.remove();
    });
    selectedTagsContainer.appendChild(selectedTag);
    tagInput.value = ''; // Clear input after selecting a tag
    filterTags(); // Apply filtering
  });
});

tagInput.addEventListener('input', () => {
  filterTags();
});

filterButton.addEventListener('click', () => {
  filterTable();
});

function filterTags() {
  const inputText = tagInput.value.toLowerCase();
  tagListItems.forEach(item => {
    const tagText = item.textContent.toLowerCase();
    if (tagText.includes(inputText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function filterTable() {
  const selectedTags = Array.from(selectedTagsContainer.querySelectorAll('.selected-tag'));
  var table = document.getElementById('excel-table');
  var rows = table.getElementsByTagName('tr');
  //tableRows.forEach(row => {
    for (var i = 1; i < rows.length; i++) { // Starte bei Index 1, um die Kopfzeile zu überspringen
      var row = rows[i];
      var cells = row.getElementsByTagName('td');
    const tagsInRow = row.querySelector('td:nth-child(30)').textContent;
    const tagsArray = tagsInRow.split(', ');
    const shouldDisplay = selectedTags.some(tag => tagsArray.includes(tag.textContent));
    row.style.display = shouldDisplay ? 'table-row' : 'none';
  };
}

// Abhier Communityfilter zurücksetzen
//const filterButton2 = document.getElementById('filterButton2');

//filterButton2.addEventListener('click', () => {
 // removeComFilter();
//});

function removeComFilter() {
  location.reload();

}


// Email für CONTACT Button
function openEmail() {
  var emailAddress = 'contact@used.community';
  var subject = 'Gesetzesfinder';
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

function downloadFilteredTable() {
  var table = document.getElementById('excel-table');

  // Kopiere die Tabelle, um die sichtbaren Spalten zu extrahieren
  var filteredTable = table.cloneNode(true);

        // Erzeuge ein neues Workbook
        var wb = XLSX.utils.table_to_book(filteredTable);

   // Füge eine neue Arbeitsmappe hinzu, um die Filterinformationen zu speichern
  var infoSheet = XLSX.utils.aoa_to_sheet([
    ["Filterinformationen:"],    
    ["Derzeitige oder kommende Regularien:", document.getElementById('dropdown-filter-kommend').value],
    ["Geselschaftsform:", document.getElementById('dropdown-filter-form').value],
    ["Sitz oder Niederlassung:", document.getElementById('dropdown-filter-sitz').value],
    ["Anzahl der Mitarbeiter:", document.getElementById('dropdown-filter-ma').value],
    ["Umsatz in Mio.€:", document.getElementById('dropdown-filter-umsatz').value],
    ["Gesamtvermögen in Mio.€:", document.getElementById('dropdown-filter-vermögen').value],
    ["Verwendung von Verpackung:", document.getElementById('dropdown-filter-verpackung').value],
    ["Aufkommen von Abfällen:", document.getElementById('dropdown-filter-abfall').value],
    ["Energieverbrauchsrelevante Produkte:", document.getElementById('dropdown-filter-energie').value]
  ]);

  // Füge das infoSheet zur Arbeitsmappe hinzu
  XLSX.utils.book_append_sheet(wb, infoSheet, "Filterinfo");

  
  var thList = filteredTable.getElementsByTagName("th");
  var tdList = filteredTable.getElementsByTagName("td");

  // Entferne die nicht sichtbaren Spalten aus dem Tabellenkopf (Funktioniert nicht)
  for (var i = visibleColumns.length - 1; i >= 0; i--) {
    if (!visibleColumns[i]) {
      thList[i].parentNode.removeChild(thList[i]);
    }
  }

  // Entferne die nicht sichtbaren Spalten aus den Tabellenzellen (Funktioniert nicht)
  for (var j = tdList.length - 1; j >= 0; j--) {
    var cellIndex = j % visibleColumns.length;
    if (!visibleColumns[cellIndex]) {
      tdList[j].parentNode.removeChild(tdList[j]);
    }
  }

  // Konvertiere das Workbook in ein Excel-Datei-Objekt
  var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

  // Funktion zum Konvertieren des binären Datenstroms in eine herunterladbare Datei
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  // Erstelle einen Blob mit den Excel-Daten
  var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

  // Erstelle einen unsichtbaren Link zum Download der Excel-Datei
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "used-Community Gesetzestabelle.xlsx";
  a.style.display = "none";
  document.body.appendChild(a);

  // Klicke auf den Link, um den Download auszulösen, und entferne ihn anschließend
  a.click();
  document.body.removeChild(a);
}

function downloadPDF() {
  // Erstelle ein jsPDF-Objekt mit DIN A4-Größe (595.28 x 841.89 Punkte)
  var pdf = new jsPDF('1', 'pt', [1683.78, 1190.56]);

  // Füge eine Überschrift hinzu
  var titleText = "used-Community Gesetzestabelle";
  pdf.setFontSize(26);
  pdf.text(titleText, 50, 80);

  var filterInfo = "Filterinformationen:\n\n";
  filterInfo += "Derzeitige oder kommende Regularien: " + document.getElementById('dropdown-filter-kommend').value + "\n";
  filterInfo += "Gesellschaftsform: " + document.getElementById('dropdown-filter-form').value + "\n";
  filterInfo += "Sitz oder Niederlassung: " + document.getElementById('dropdown-filter-sitz').value + "\n";
  filterInfo += "Anzahl der Mitarbeiter: " + document.getElementById('dropdown-filter-ma').value + "\n";
  filterInfo += "Umsatz in Mio.€: " + document.getElementById('dropdown-filter-umsatz').value + "\n";
  filterInfo += "Gesamtvermögen in Mio.€: " + document.getElementById('dropdown-filter-vermögen').value + "\n";
  filterInfo += "Verwendung von Verpackung: " + document.getElementById('dropdown-filter-verpackung').value + "\n";
  filterInfo += "Aufkommen von Abfällen: " + document.getElementById('dropdown-filter-abfall').value + "\n";
  filterInfo += "Energieverbrauchsrelevante Produkte: " + document.getElementById('dropdown-filter-energie').value + "\n";

  pdf.setFontSize(18);
  // Füge Filterinformationen hinzu
  pdf.text(filterInfo, 50, 140);

  // Anpassung der Position der Tabelle nach rechts und unten
  var tableX = 50; // X-Position
  var tableY = 400; // Y-Position

  // Verkleinere die Tabelle
  var table = document.getElementById('excel-table');


  // Fügen Sie die verkleinerte Tabelle zur PDF-Datei hinzu
  pdf.html(table, {
    callback: function (pdf) {
      pdf.save('used-Community Gesetzestabelle.pdf');
    },
    x: tableX,
    y: tableY
  });
}













