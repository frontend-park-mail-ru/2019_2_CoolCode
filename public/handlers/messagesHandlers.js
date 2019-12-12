import {router, data, promiseMaker} from "../main";
import {KEYWORDS} from "../constants/config";

async function createMessagePhotoHandler(id) {
	const message = document.querySelector(`#message-${id}`);
	const image = message.querySelector('.primary-row__image-container__image');
	if (id) {
		image.params = {messageId : id};
		image.addEventListener('click', () => {
			promiseMaker.createPromise('setCurrentPhotoSrc', event.currentTarget.src).then( () => {
				const {messageId} = event.currentTarget.params;
				const chatId = data.getCurrentChatId();
				router.open(KEYWORDS.photoPreviewChat, [chatId, messageId]);
			}
			);
		});
	}
	else {
		image.addEventListener('click', () => {
			promiseMaker.createPromise('setCurrentPhotoSrc', event.currentTarget.src).then( () => {
				const wrkspaceId = data.getCurrentWrkspaceId();
				const channelId = data.getCurrentChannelId();
				router.open(KEYWORDS.channelPage, [wrkspaceId, channelId]);
			}
			);
		});
	}
}

export {createMessagePhotoHandler};