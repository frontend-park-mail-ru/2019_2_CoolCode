import {bus, componentsStorage, data, router} from "../main";
import currentDate from "../modules/currentDate";
import {sendingSticker} from "../backendDataFetchers/messagesInteraction";
import {setUserStickers} from "../backendDataFetchers/setUserInfo";
import {sendingStickerChannel} from "../backendDataFetchers/channelMessagesInteraction";
import {KEYWORDS} from "../constants/config";

function showStickersEvent() {
	const stikerBlock = document.querySelector('.sticker-block');
	if (stikerBlock.classList.contains('sticker-block_hidden')) {
		stikerBlock.classList.remove('sticker-block_hidden');
	} else {
		stikerBlock.classList = `${stikerBlock.classList} sticker-block_hidden`;
	}
}

function showStickers() {
	const stickers = document.querySelector(".input__content-container__sticker");
	stickers.addEventListener('click', showStickersEvent);
}

function buyStickers() {
	const userId = data.getUserId();
	const stickers = data.getUserStickers();
	const stickersAll = data.getStickers();
	const chatBlock = componentsStorage.getChatBlock();
	stickersAll.forEach((id)=>{
		const s = document.querySelector(`.stickerpack-${id}`);
		s.classList = `${s.classList} sticker-block__content__img__place-stickers__img_notavailiable`;
	});
	for(let i = 0; i < stickers.length; i++) {
		const stickerpackId = stickers[i];
		const s = document.querySelector(`.stickerpack-${stickerpackId}`);
		s.classList.remove(`sticker-block__content__img__place-stickers__img_notavailiable`);
		s.addEventListener('click', async (e) => {
			let stickerId = e.target.getAttribute("id");
			stickerId = stickerId.split("-")[1];
			const date = new currentDate();
			const src = e.target.getAttribute("src");
			const messageId = await sendStickerEvent(stickerpackId, stickerId, date.getDate());
			chatBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), src: src, message_time: date.getDate(), message_type: 3});
			const messageBlock = document.getElementById(`message-${messageId}`);
			bus.emit('showPhotoContent', null, messageBlock);
		});
	};
	stickersAll.forEach((id)=>{
		const s = document.querySelector(`.stickerpack-${id}`);//id стикерпака
		if(s.classList.contains('sticker-block__content__img__place-stickers__img_notavailiable')) {
			s.addEventListener('click',()=>{
				bus.emit('setChosenStikerpack', null, id);
				if (data.getCurrentChannelId()) {
					router.open(KEYWORDS.buyStikerpackChannel, [data.getCurrentWrkspaceId(), data.getCurrentChannelId()]);
				} else {
					router.open(KEYWORDS.buyStikerpackChat, [data.getCurrentChatId()]);
				}
			});
		}

	});
}

async function sendStickerEvent(stickerpackId, stickerId, date) {
	const chatId = data.getCurrentChatId();
	if (!chatId) {
		const channelId = data.getCurrentChannelId();
		const result = await sendingStickerChannel(channelId, stickerpackId,stickerId, date);
		return result.id;
	} else {
		const result = await sendingSticker(chatId, stickerpackId,stickerId, date);
		return result.id;
	}

}

function adviceBuy(userid, stickerackID) {
	const contentListRoot = document.querySelector('.header');
	contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
	const block = document.querySelector('.channel-header-menu__advice.channel-header-menu__advice_style');
	const lay = document.querySelector('.channel-header-menu__advice_overlay');
	block.style.display = 'flex';
	lay.style.display = 'flex';
	const ok = block.querySelector('.wrkspace-form__form__submit-button.wrkspace-form__form__submit-button_style');
	ok.addEventListener('click', () => {
		block.style.display = "none";
		lay.style.display = 'none';
		buy(userid, stickerackID);
	});
	lay.addEventListener('click', () => {
		block.style.display = "none";
		lay.style.display = 'none';
	});
}

function buy(userid, stickerpackID) {

	const paymentMethods = [{
		supportedMethods: 'basic-card',
		data: {
			supportedNetworks: [
				'visa', 'mastercard', 'amex', 'discover',
				'diners', 'jcb', 'unionpay'
			]
		}
	}, {
		supportedMethods: 'https://bobpay.xyz/pay',
	}];

	const paymentDetails = {
		total: {
			label: 'Buy Stickers',
			amount: { currency: 'RUB', value: '0.99' },
		},
	};

	const paymentOptions = {
		requestShipping: false,
		requestPayerEmail: true,
		requestPayerPhone: true,
		requestPayerName: true,
		shippingType: 'delivery'
	};

	const request = new PaymentRequest(paymentMethods, paymentDetails, paymentOptions);

	request.show().then(response => {
		console.log(response);
		// [process payment]
		// send to a PSP etc.
		response.complete('success');
		const res = setUserStickers(userid, stickerpackID);
		location.reload();
	})
		.catch((response) => console.log(response));
}

export {buyStickers, showStickers, buy};