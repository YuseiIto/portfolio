function doGet(e) {
  var ss        = SpreadsheetApp.getActiveSpreadsheet();
  var sheet     = ss.getSheetByName('シート1');
  var sheetData = sheet.getRange('A2:B' + sheet.getLastRow()).getValues();

  // データの成形
  var responseList = [];
  sheetData.map(function(d) {
    responseList.push({ fruit: d[0], price: d[1] });
  });

  // レスポンス
  var response = {
    data: responseList,
    meta: { status: 'success' }
  };
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var ss       = SpreadsheetApp.getActiveSpreadsheet();
  var sheet    = ss.getSheetByName('シート1');
  var recv = e.parameter;
  

  // 行の最後に値を追加
  sheet.appendRow([recv.name,recv.email,recv.message]);
       
  return HtmlService.createHtmlOutputFromFile('sent.inline');
}