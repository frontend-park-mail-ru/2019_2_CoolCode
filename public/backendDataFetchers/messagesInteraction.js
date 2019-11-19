import {API, responseStatuses, settings} from '../constants/config';
import {appLocalStorage, FetchModule, bus} from '../main';

const {frontend} = settings;
const {frontendPort} = settings;
const {connection} = settings;

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
		// console.log(`Message edited : ${message.id}`);
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
		if (response.url.toString().startsWith(`${frontend}`)) {
			bus.emit('setNotSentMessage', text, id);
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

export {sendingMessage, deletingMessage, editingMessage};