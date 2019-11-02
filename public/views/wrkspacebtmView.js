const wsForm = require('../components/WrkSpace/wsForm.pug');

function wsBTM() {
	let btm = document.querySelectorAll(".bem-search-menu__button.bem-search-menu__button_style")[0];
	btm.addEventListener("click", (event)=>{
		event.preventDefault();
		document.querySelector('.bem-primary-container.bem-primary-container_style').innerHTML += wsForm();
	}
	);

}

export default wsBTM;