import {FetchModule} from "../main";
import {API, responseStatuses} from "../constants/config";

async function sendingMessageChannel(text, time, id) {
	console.log(`Sending message in channel: ${id} with text: ${text}`);
	try {
		const response = await FetchModule._doPost({
			path: API.currentChannelMessages(id),
			data: {
				text: text,
				message_time : time,
			},
			contentType: 'application/json;charset=utf-8'
		});

		if (response.status !== 200) {
			throw new Error (`Haven't sent message in channel: ${text} cause: ${responseStatuses[response.status]}`);
		}
		const message = await response.json();
		console.log(`Message sent : ${message.id}`);
		return message.id;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function sendingFileChannel(formData, id) {
	console.log(` Sending photo in channel ${id}`);
	try {
		const response = await FetchModule._doPost(
			{path: API.messageFileChannel(id),
				data: formData,
				contentType:'multipart/form-data'}
		);
		if (response.status === 200) {
			return await response.json();
		} else {
			throw new Error(
				`Error while upload file : ${responseStatuses[response.status]}`);
		}
	} catch (error) {
		console.error(error);
		return false;
	}

}

async function sendingStickerChannel(channelId, stickerpackId, stickerId, date) {
	console.log(` sendingSticker ${channelId}`);
	try {
		const response = await FetchModule._doPost(
			{path: API.currentChannelMessages(channelId),
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

export {sendingMessageChannel, sendingFileChannel, sendingStickerChannel};