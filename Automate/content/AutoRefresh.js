let refreshtime = 10;  // declares auto refresh interval in minutes

window.setTimeout( function() {
    window.location.reload();
  }, refreshtime*60*1000); // *60*1000 converts milliseconds (default) to minutes