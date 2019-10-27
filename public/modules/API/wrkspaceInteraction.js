function openWrkSpaceInfo() {
	let tabs = document.querySelectorAll(".bem-wrkspace-block");
	tabs.forEach((tab)=> {
	    const openup = tab.querySelector(".bem-wrkspace-expandable");
		tab.addEventListener("click", ()=>{
		    if (!openup.classList.contains("bem-wrkspace-expandable_clicked")) openup.className += " bem-wrkspace-expandable_clicked";
		    else openup.classList.remove("bem-wrkspace-expandable_clicked");
		}
		);
	});

}

export default openWrkSpaceInfo;