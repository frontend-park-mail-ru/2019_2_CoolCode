function openWrkSpaceInfo() {
	let tabs = document.querySelectorAll(".wrkspace-outer");
	tabs.forEach((tab)=> {
	    const openup = tab.querySelector(".expandable");
		tab.addEventListener("click", ()=>{
		    if (!openup.classList.contains("clicked")) openup.className += " clicked";
		    else openup.classList.remove("clicked");
		}
		);
	});

}

export default openWrkSpaceInfo;