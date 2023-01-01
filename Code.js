function onLoad() {
  var mode = getQueryParameter('mode');
  if (mode == 'other') {
    // Initialize sidebar in a different context
  } else {
    // Assumes that sidebar is defined in the HTML document as: <div id="sidebar"></div>
    var sidebarElement = document.querySelector('#sidebar');
    // Retrieves the currently selected event
    var event = Calendar.getEventById(Calendar.getEventId());
    var title = event.getTitle();
    sidebarElement.innerHTML = '<h1>' + title + '</h1>';
  }
}

function getQueryParameter(name) {
  var url = new URL(window.location.href);
  return url.searchParams.get(name);
}