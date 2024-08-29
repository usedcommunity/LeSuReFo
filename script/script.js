// Funktion für CONTACT Button E-Mail-Öffnung
function openEmail() {
  const emailAddress = 'contact@used.community';
  const subject = 'Nachhaltigkeitsanforderungen';
  const body = '';

  const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

// Event Listener für den Filterbutton
document.querySelector('#filterButton').addEventListener('click', applyFilter);

// Filter anwenden
function applyFilter() {
  const currentDate = new Date();

  // Sammeln der Dropdown-Filterwerte
  const filters = {
      kommend: document.getElementById('dropdown-filter-kommend').value,
      gegenstand: document.getElementById('dropdown-filter-gegenstand').value,
      form: document.getElementById('dropdown-filter-form').value,
      sitz: document.getElementById('dropdown-filter-sitz').value,
      umsatz: document.getElementById('dropdown-filter-umsatz').value,
      vermögen: document.getElementById('dropdown-filter-vermögen').value,
      ma: document.getElementById('dropdown-filter-ma').value,
      data: document.getElementById('dropdown-filter-data').value,
      energie: document.getElementById('dropdown-filter-energie').value,
      elektro: document.getElementById('dropdown-filter-elektro').value,
      produkt: document.getElementById('dropdown-filter-produkt').value,
      digi: document.getElementById('dropdown-filter-digi').value,
      verpackung: document.getElementById('dropdown-filter-verpackung').value,
      abfall: document.getElementById('dropdown-filter-abfall').value,
      batterien: document.getElementById('dropdown-filter-batterien').value,
      chemikalien: document.getElementById('dropdown-filter-chemikalien').value,
      plastik: document.getElementById('dropdown-filter-plastik').value,
  };

  const table = document.getElementById('excel-table');
  const rows = table.getElementsByTagName('tr');

  // Durchlaufe jede Zeile der Tabelle
  for (let i = 1; i < rows.length; i++) { // Start bei 1, um die Kopfzeile zu überspringen
      const row = rows[i];
      const cells = row.getElementsByTagName('td');
      let showRow = true;

      const cellDate = new Date(cells[13].textContent.trim()); // Datum in der 14. Spalte
      const gegenstandText = cells[1].textContent.trim(); // Gegenstand in der 2. Spalte
      const formText = cells[19].textContent.trim(); // Form in der 20. Spalte
      const sitzText = cells[20].textContent.trim(); // Sitz in der 21. Spalte
      const maCount = parseInt(cells[22].textContent.trim()); // Mitarbeiterzahl in der 23. Spalte
      const umsatz = parseInt(cells[23].textContent.trim()); // Umsatz in der 24. Spalte
      const vermögen = parseInt(cells[24].textContent.trim()); // Vermögen in der 25. Spalte

      // Filterlogik anwenden
      if (filters.kommend === 'In Kraft' && cellDate >= currentDate) showRow = false;
      if (filters.kommend === 'Kommend' && cellDate < currentDate) showRow = false;
      if (filters.gegenstand !== 'Alle' && gegenstandText !== filters.gegenstand) showRow = false;
      if (filters.form === 'Andere' && formText === 'Kapitalgesellschaft') showRow = false;
      if (filters.sitz === 'außerhalb Deutschlands' && sitzText === 'Deutschland') showRow = false;
      if (filters.sitz === 'Deutschland' && sitzText === 'England') showRow = false;
      if (filters.ma === '0-249' && maCount > 249) showRow = false;
      if (filters.ma === '250-999' && maCount > 999) showRow = false;
      if (filters.ma === '1000-2999' && maCount > 2999) showRow = false;
      if (filters.umsatz === 'Unter 20' && umsatz > 19) showRow = false;
      if (filters.umsatz === '20-39' && umsatz > 39) showRow = false;
      if (filters.umsatz === '40-59' && umsatz > 59) showRow = false;
      if (filters.vermögen === 'Unter 20' && vermögen > 19) showRow = false;
      if (filters.vermögen === '20-39' && vermögen > 39) showRow = false;

      // Weitere Bedingungen für spezifische Kriterien
      const checkCriteria = (index, filterValue) => {
          if (filterValue === 'Nein' && cells[index].textContent.trim() === 'x') showRow = false;
      };

      checkCriteria(25, filters.verpackung);
      checkCriteria(26, filters.abfall);
      checkCriteria(27, filters.energie);
      checkCriteria(28, filters.elektro);
      checkCriteria(29, filters.produkt);
      checkCriteria(30, filters.data);
      checkCriteria(31, filters.digi);
      checkCriteria(32, filters.plastik);
      checkCriteria(33, filters.batterien);
      checkCriteria(34, filters.chemikalien);

      row.style.display = showRow ? '' : 'none';
  }
}
function resetFilters() {
  // Setze alle Dropdowns auf "Alle" zurück
  document.getElementById('dropdown-filter-kommend').value = "Alle";
  document.getElementById('dropdown-filter-gegenstand').value = "Alle";
  document.getElementById('dropdown-filter-form').value = "Alle";
  document.getElementById('dropdown-filter-sitz').value = "Alle";
  document.getElementById('dropdown-filter-umsatz').value = "Alle";
  document.getElementById('dropdown-filter-vermögen').value = "Alle";
  document.getElementById('dropdown-filter-ma').value = "Alle";
  document.getElementById('dropdown-filter-data').value = "Alle";
  document.getElementById('dropdown-filter-produkt').value = "Alle";
  document.getElementById('dropdown-filter-elektro').value = "Alle";
  document.getElementById('dropdown-filter-energie').value = "Alle";
  document.getElementById('dropdown-filter-plastik').value = "Alle";
  document.getElementById('dropdown-filter-digi').value = "Alle";
  document.getElementById('dropdown-filter-batterien').value = "Alle";
  document.getElementById('dropdown-filter-chemikalien').value = "Alle";
  document.getElementById('dropdown-filter-verpackung').value = "Alle";
  document.getElementById('dropdown-filter-abfall').value = "Alle";
  
  // Setze das Suchfeld zurück
  document.getElementById('search-input').value = "";

  // Funktion aufrufen, um die Tabelle erneut zu laden oder zu filtern
  searchTable();
}

// Funktion zur Suche in der Tabelle
function searchTable() {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value.toLowerCase();
  const table = document.getElementById('excel-table');
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) { // Start bei 1, um die Kopfzeile zu überspringen
      const row = rows[i];
      const rowText = row.textContent.toLowerCase();

      row.style.display = rowText.includes(searchText) ? '' : 'none';
  }
}

// Funktion zum Umschalten der Sichtbarkeit von Spalten
function toggleColumn(index) {
  visibleColumns[index] = !visibleColumns[index];
  // Weitere Logik zur Aktualisierung der Tabellensichtbarkeit je nach Spaltenindex...
}

// Funktion zum Excel-Export mit Info-Sheet
document.getElementById("exportButton").addEventListener("click", function () {
  const table = document.getElementById("excel-table");
  const clonedTable = table.cloneNode(true);

  const rows = clonedTable.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      for (let j = cells.length - 1; j >= 0; j--) {
          if (![0, 1, 2, 4, 6, 7, 8, 13].includes(j)) {
              rows[i].removeChild(cells[j]); // Entfernen nicht benötigter Zellen
          }
      }
      const heads = rows[i].getElementsByTagName("th");
      for (let j = heads.length - 1; j >= 0; j--) {
          if (![0, 1, 2, 4, 6, 7, 8, 13].includes(j)) {
              rows[i].removeChild(heads[j]); // Entfernen nicht benötigter Kopfzellen
          }
      }
  }

  const wb = XLSX.utils.table_to_book(clonedTable, { sheet: "Tabelle" });
  const infoSheet = XLSX.utils.aoa_to_sheet([
      ["Filterinformationen:"],
      ["Derzeitige oder kommende Regularien:", document.getElementById('dropdown-filter-kommend').value],
      ["Unterscheidung von Vorgaben und Anforderungen:", document.getElementById('dropdown-filter-gegenstand').value],
      ["Gesellschaftsform:", document.getElementById('dropdown-filter-form').value],
      ["Sitz oder Niederlassung:", document.getElementById('dropdown-filter-sitz').value],
      ["Beschäftigtenzahl:", document.getElementById('dropdown-filter-ma').value],
      ["Umsatzerlöse weltweit:", document.getElementById('dropdown-filter-umsatz').value],
      ["Bilanzsumme:", document.getElementById('dropdown-filter-vermögen').value],
  ]);
  XLSX.utils.book_append_sheet(wb, infoSheet, "Filterinfo");
  XLSX.writeFile(wb, "table_with_filters.xlsx");
});
