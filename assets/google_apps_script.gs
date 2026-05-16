// =====================================================
// URBARA Contact Form — Google Apps Script
// 
// SETUP INSTRUCTIONS (one-time, ~5 minutes):
// 1. Go to: https://script.google.com/
// 2. Click "New Project"
// 3. Paste ALL of this code into the editor
// 4. Change ALERT_EMAIL below to your Gmail address
// 5. Click "Deploy" → "New deployment"
//    - Type: "Web app"
//    - Execute as: "Me"
//    - Who has access: "Anyone"
// 6. Click "Deploy" and copy the Web App URL
// 7. Paste that URL into urbara_contact.html where it says PASTE_YOUR_SCRIPT_URL_HERE
// =====================================================

const ALERT_EMAIL = "rajkrishna.math@gmail.com"; // ← Your Gmail

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // ── 1. Save to Google Sheet ──────────────────────
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Contacts");

    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet("Contacts");
      sheet.appendRow([
        "Timestamp", "Name", "Email", "Phone", "Organisation", "Subject", "Message"
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#38ef7d");
    }

    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name    || "",
      data.email   || "",
      data.phone   || "",
      data.org     || "",
      data.subject || "",
      data.message || ""
    ]);

    // ── 2. Send Gmail Alert ──────────────────────────
    const subject = `🌱 URBARA: New contact from ${data.name || "Unknown"}`;
    const body = `
New message received on the URBARA contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name       : ${data.name}
📧 Email      : ${data.email}
📱 Phone      : ${data.phone || "Not provided"}
🏢 Organisation: ${data.org || "Not provided"}
📌 Subject    : ${data.subject}
━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from URBARA Dashboard Contact Form
    `.trim();

    GmailApp.sendEmail(ALERT_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "URBARA Apps Script is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}
