function doGet(e) {
  var res = 1
  var spreadsheetId = '1eZ1cw48AfPc0Ba0hv1XbRJECPl4ewT88HBrOHqauwCM'; // your sheet id
  try {
    var location = e.parameter.location;
    var sheet = SpreadsheetApp
      .openById(spreadsheetId).getSheetByName("Sheet1"); // sheet name

    var data = sheet.getDataRange().getValues();
    var rowDate = sheet.appendRow([location]);

  } catch (ex) {
    res = -1;
  }

  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}