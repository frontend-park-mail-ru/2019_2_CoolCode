function clickSupport() {
	console.log('AAA', document.querySelector('.bem-support-btn__support_btn'));
	const lifebuoy = document.querySelector('.bem-support-btn_img');
	const blockIframe = document.querySelector('.bem-support-btn__blockIframe');

	lifebuoy.addEventListener('click', () => {
		if (blockIframe.style.display !== 'none') {
			blockIframe.style.display = 'none';
		}else{
			blockIframe.style.display = 'flex';
		}
	});
}

export { clickSupport };