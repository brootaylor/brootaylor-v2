---
title: Publishing to a Google Spreadsheet
summary: Publishing to a Google Spreadsheet
date: 2023-05-12T15:48:14.322Z
updated: ""
location:
  locality: Crawley
  country_name: UK
category:
  - frontend
  - code
  - example
  - tutorial
eleventyExcludeFromCollections: true
---
This is an article explaining [how to publish to a Google Spreadsheet](https://codingmstr.com/project/how-to-submit-custom-html-form-data-to-google-sheets) using a custom form on tour website.

## H﻿TML for your form

```html
<form method="post" autocomplete="off" name="google-sheet">
    <div class="form-group">
        <input type="text" name="Name" class="form-control" placeholder="Your Name *" value="" required=""/>
    </div>
    <div class="form-group">
        <input type="text" name="Email" class="form-control" placeholder="Your Email *" value="" required=""/>
    </div>
    <div class="form-group">
        <input type="number" name="Phone" class="form-control" placeholder="Your Contact Number *" value="" required=""/>
    </div>
    <div class="form-group">
        <input type="submit" name="submit" class="btnSubmit btn-block" value="Login" />
    </div>
</form>
```

## J﻿avaScript (your website)

```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycbxkgWotCMyvIKoT9aGtPCndZdHtHrq8i972t9CKAVjO6xC7T0I/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
```

## J﻿avaScript (Google Sheet "App Script")

```javascript
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```