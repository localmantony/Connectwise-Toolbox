document.addEventListener('DOMContentLoaded', function () {
  const urlForm = document.getElementById('urlForm');
  const urlInput = document.getElementById('urlInput');
  const displayUrl = document.getElementById('displayUrl');

  const refreshForm = document.getElementById('refreshForm');
  const refreshInput = document.getElementById('refreshInput');
  const displayRefresh = document.getElementById('displayRefresh');

  // Load the saved URL and refresh time from storage when the popup is opened
  chrome.storage.sync.get(['timeSheetURL', 'refreshTime'], function (result) {
      if (result.timeSheetURL) {
          urlInput.value = result.timeSheetURL;
          displayUrl.textContent = result.timeSheetURL;
      } else {
          displayUrl.textContent = "No URL saved";
      }

      if (result.refreshTime) {
          refreshInput.value = result.refreshTime;
          displayRefresh.textContent = result.refreshTime + " minutes";
      } else {
          displayRefresh.textContent = "10 minutes (default)";
      }
  });

  // Save the URL to storage when the URL form is submitted
  urlForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const timeSheetURL = urlInput.value;
      chrome.storage.sync.set({ timeSheetURL: timeSheetURL }, function () {
          console.log('URL saved:', timeSheetURL);
          displayUrl.textContent = timeSheetURL;
      });
  });

  // Save the refresh time to storage when the refresh form is submitted
  refreshForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const refreshTime = parseFloat(refreshInput.value); // Ensure fractional values are handled
      chrome.storage.sync.set({ refreshTime: refreshTime }, function () {
          console.log('Refresh time saved:', refreshTime);
          displayRefresh.textContent = refreshTime + " minutes";
      });
  });
});
