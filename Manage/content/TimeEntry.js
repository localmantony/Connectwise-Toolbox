document.addEventListener("click", function (event) {
    chrome.storage.sync.get(['timeSheetURL'], function (result) {
        let timeSheetURL = result.timeSheetURL || "https://default.url"; // Fallback URL if none is saved
        let parentDiv = event.target;

        for (let i = 0; i < 8 && parentDiv.parentElement !== null; i++) {
            if (parentDiv.classList.contains("cw_ToolbarButton_Time")) {
                console.log("timeSheetURL: " + timeSheetURL);
                window.open(timeSheetURL, "_blank", "width=900,height=750");
                break;
            }
            parentDiv = parentDiv.parentElement;
        }
    });
});
