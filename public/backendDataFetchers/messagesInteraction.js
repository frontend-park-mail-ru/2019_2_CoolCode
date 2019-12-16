import {API, responseStatuses, settings} from '../constants/config';
import {bus, data, FetchModule} from '../main';

async function likeMessage(id) {
	console.log(`Liking message : ${id}`);
	try {
		const response = await FetchModule._doPost({
			path: API.likingMessage(id)});

		if (response.status !== 200) {
			throw new Error (`Haven't like message: ${text} cause: ${responseStatuses[response.status]}`);
		}
	}catch (error) {
		console.error(error);
		throw error;
	}
}

async function editingMessage(text, time, id) {
	console.log(`Editing message : ${id}`);
	try {
		const response = await FetchModule._doPut({
			path: API.messageInteraction(id),
			data: {
				text: text,
				message_time : time,
			},
			contentType: 'application/json;charset=utf-8'
		});

		if (response.status !== 200) {
			throw new Error (`Haven't edited message: ${text} cause: ${responseStatuses[response.status]}`);
		}
		// const message = await response.json();
		// console.log(`ChatMessage edited : ${message.id}`);
		// return message.id;
	}catch (error) {
		console.error(error);
		throw error;
	}
}

async function sendingMessage(text, time, id) {
	console.log(`Sending message in chat: ${id} with text: ${text}`);
	try {
		const response = await FetchModule._doPost({
			path: API.currentChatMessages(id),
			data: {
				text: text,
				message_time : time,
			},
			contentType: 'application/json;charset=utf-8'
		});

		if (response.status !== 200) {
			throw new Error (`Haven't sent message: ${text} cause: ${responseStatuses[response.status]}`);
		}

		const message = await response.json();
		console.log(`Message sent : ${message.id}`);
		return message.id;
	}catch (error) {
		console.error(error);
		throw error;
	}
}

async function deletingMessage(id) {
	console.log(`Deleting message : ${id} `);
	try {
		const response = await FetchModule._doDelete({
			path: API.messageInteraction(id),
		});

		if (response.status !== 200) {
			throw new Error (`Haven't delete message: ${id} cause: ${responseStatuses[response.status]}`);
		}
		console.log(`Message deleted : ${id}`);
	}catch (error) {
		console.error(error);
	}
}

async function sendingFile(formData, id) {
	console.log(` Sending photo in chat ${id}`);
	try {
		const response = await FetchModule._doPost(
			{path: API.messageFile(id),
				data: formData,
				contentType:'multipart/form-data'}
		);
		if (response.status === 200) {
			return await response.json();
		} else {
			throw new Error(
				`Error while upload image : ${responseStatuses[response.status]}`);
		}
	} catch (error) {
		console.error(error);
		return false;
	}

}

async function sendingSticker(chatId, stickerpackId, stickerId, date) {
	console.log(` sendingSticker ${chatId}`);
	try {
		const response = await FetchModule._doPost(
			{path: API.currentChatMessages(chatId),
				data: {
					message_type: 3,
					sticker_id: `${stickerpackId}-${stickerId}`,
					message_time : date,
				},
				contentType: 'application/json;charset=utf-8'}
		);
		if (response.status === 200) {
			return await response.json();
		} else {
			throw new Error(
				`Error sending sticker : ${responseStatuses[response.status]}`);
		}
	} catch (error) {
		console.error(error);
		return false;
	}
}

export {sendingSticker, sendingMessage, deletingMessage, editingMessage, likeMessage, sendingFile};
