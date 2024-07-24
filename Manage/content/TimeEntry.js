document.addEventListener("click", function (event) {
	let timeSheetURL = "https://na.myconnectwise.net/v2024_1/connectwise.aspx?fullscreen=false&locale=en_US#XQAACAAIAQAAAAAAAAA9iIoG07$U9W$XoZrQZV53xmzzTvE8Ibss$VHxl7o9pHfOfx3HsqiLhsuU5XFJlTJz04IgK3drE6m_Ze1vsxLYqBMDWQ0uF4WhvJRxxxYyVMOxUtq$BIlPW0k_jvLCp7qVoEnTD7sTRc5cNkjk_H4RybGIuESdbTgnJsF9BxGNDIEGY3yHs4bx5Ap_ns7$VXoKfTloL4pIyGGYr0oMBre26tgNg8MPNrLDJruZ9flC$eOfgD1YrKOcyf_yZtgA??CalendarSchedule";
    let parentDiv = event.target;

    console.log("clicked " + parentDiv);
    console.log("before loop");

    for (let i = 0; i < 8 && parentDiv.parentElement !== null; i++) {
        if (parentDiv.classList.contains("cw_ToolbarButton_Time")) {
            window.open(timeSheetURL, "_blank", "width=900,height=750");
			break;
        }
		parentDiv = parentDiv.parentElement;
    }
    console.log("loop ended");
});