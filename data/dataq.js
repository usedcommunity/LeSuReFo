var tableData = null;

// Lade die Tabelle beim Laden der Seite
window.onload = function() {
  loadTable();
};

function loadTable() {
  var jsonData = [
    // JSON-Daten hier einfügen
   
    
      [
        "id",
        "Autor",
        "Jahr",
        "Titel",
        "Veröffentlicht in:"
      ],
      [
        "1",
        "learnlifecycle",
        "k.a.",
        "Ökodesign Strategien",
        "learnlifecycle.com  zuletzt geöffnet: 27.07.22"
      ],
      [
        "2",
        "United Nations",
        "2015",
        "Sustainable Development Goals (SDG)",
        "https://sdgs.un.org/   zuletzt geöffnet: 27.07.22"
      ],
      [
        "3",
        "ihk-FD",
        "2020",
        "Prädikat \"Gesund arbeiten in FD\"",
        "https://www.ihk.de/fulda/servicemarken/ueber-uns/ihk-arbeitskreise/gesundheit-und-werte/praedikat-gesund-arbeiten-in-fd-x/die-praedikatsunternehmen-2020/wie-ist-das-modell-aufgebaut2-3185934     zuletzt geöffnet: 27.07.22"
      ],
      [
        "4",
        "C. Luttropp & J. Lagerstedt",
        "2006",
        "EcoDesign and The Ten Golden Rules: generic advice for merging environmental aspects into product development",
        "Journal of Cleaner Production"
      ],
      [
        "5",
        "M. Watz and S. I. Hallstedt",
        "2018",
        "INTEGRATING SUSTAINABILITY IN PRODUCT REQUIREMENTS",
        "INTERNATIONAL DESIGN CONFERENCE - DESIGN 2018"
      ],
      [
        "6",
        "M.A.J. Huijbregts et all.",
        "2017",
        "ReCiPe2016. A harmonized life cycle impact assessment method at midpoint and endpoint level. Report I: Characterization.",
        "National Institute for Human Health and the Environment"
      ],
      [
        "7",
        "J. Rockström et al",
        "2009",
        "A safe operating space for humanity",
        "NATURE|Vol 461|24 September 2009"
      ],
      [
        "8",
        "humanrights.ch",
        "k.a.",
        "Allgemeine Erklärung der Menschenrechte",
        "https://www.humanrights.ch/de/ipf/grundlagen/rechtsquellen-instrumente/aemr/?m=&s=&gclid=CjwKCAjwiJqWBhBdEiwAtESPaPu0-iLKwtS2qpP3jwapRCsOsOjdhNuMW69X7dxTcPDGFdzEQaQMhhoCUdoQAvD_BwE     zuletzt geöffnet: 27.07.22"
      ],
      [
        "9",
        "EllenMacArthur Foundation",
        "2015",
        "ReSOLVE - Growth within—A circular economy vision for a competitive Europe",
        "EllenMacArthur Foundation"
      ],
      [
        "10",
        "H. Karlewsky",
        "2016",
        "Social Life Cycle Assessment in der Automobilindustrie",
        "Disertation"
      ],
      [
        "11",
        "Ehrlenspiel, Klaus",
        "2020",
        "Kostengünstiger Entwickeln und Konstruieren",
        "Springer Verlag"
      ]
    ]
    ;

  var tableHtml = '<thead><tr>';
  var headerRow = jsonData[0];
  for (var i = 0; i < headerRow.length; i++) {
    tableHtml += '<th>' + headerRow[i] /*+ '<input type="checkbox" checked onchange="toggleColumn(i)">' */+ '</th>';
  }
  tableHtml += '</tr></thead>';

  tableHtml += '<tbody>';
  for (var j = 1; j < jsonData.length; j++) {
    var row = jsonData[j];
    tableHtml += '<tr>';
    for (var k = 0; k < row.length; k++) {
      // Überprüfen, ob es sich um den Link handelt
      if (k === 8) {
        tableHtml += '<td><a href="' + row[k] + '" target="_blank">' + row[k] + '</a></td>';
      } else {
        tableHtml += '<td>' + row[k] + '</td>';
      }
    }
    tableHtml += '</tr>';
  }
  tableHtml += '</tbody>';

  var tableElement = document.getElementById('excel-table');
  tableElement.innerHTML = tableHtml;
  tableData = jsonData; // Speichere die Tabellendaten

  const currentDate = new Date();
  $('tr').each(function() {
  const cellDate = new Date($(this).find('td:nth-child(11)').text());
  if (cellDate > currentDate) {
    $(this).addClass('future');
  }
  });

}
