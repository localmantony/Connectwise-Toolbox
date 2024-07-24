chrome.storage.sync.get(['refreshTime'], function (result) {
  let refreshtime = result.refreshTime || 10;  // Default to 10 minutes if not set
  window.setTimeout(function () {
      window.location.reload();
  }, refreshtime * 60 * 1000);  // Convert minutes to milliseconds
});
