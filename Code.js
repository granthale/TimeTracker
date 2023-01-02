// placeholder
function onDefaultHomePageOpen() {
  return
}

// Function for when calendar is initially opened
function onCalendarHomePageOpen() {
  // Get the default calendar and events for the current day
  var calendar = CalendarApp.getDefaultCalendar();
  var events = calendar.getEventsForDay(new Date());

  // Check if there are any events today
  if (events.length > 0) {
    // If there are events, show a message in the sidebar
    var html = HtmlService.createHtmlOutput("You have " + events.length + " events today.");
    CalendarApp.getDefaultCalendar().showSidebar(html);
  } else {
    // If there are no events, show a message in the sidebar
    var html = HtmlService.createHtmlOutput("You have no events today. Enjoy your day!");
    CalendarApp.getDefaultCalendar().showSidebar(html);
  }
}

// The include function allows you to include the contents of another HTML file in the sidebar. You can use this to structure your sidebar content into multiple HTML files for easier organization.
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// TODO - to use for when calendar event is opened
function onCalendarEventOpen() {

}