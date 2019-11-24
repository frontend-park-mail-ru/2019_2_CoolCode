import {bus, FetchModule} from "../main";
import {API, responseStatuses} from "../constants/config";

async function alterWrkspace(wrkspace) {
	console.log(wrkspace.Members);
	console.log(` Changing wrkspace ${wrkspace.ID} info`);
	try {
		const response = await FetchModule._doPut(
			{path: API.wrkspaceInfo(wrkspace.ID), data: {
				id: wrkspace.ID,
				name: wrkspace.Name,
				members: wrkspace.Members,
				admins: wrkspace.Admins,
			},
			contentType : 'application/json;charset=utf-8'}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't alter wrkspace : ${responseStatuses[response.status]}`);
		}
	} catch (error) {
		console.error(error);
	}
}

async function alterChannel(channel) {
	try {
		let response = await FetchModule._doPut(
			{path: API.channelInfo(channel.ID),
				data:   {
					id: channel.ID,
					name: channel.Name,
					members: channel.Members,
					admins: channel.Admins
				},
				contentType : 'application/json;charset=utf-8'}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't alter channel: ${responseStatuses[response.status]}`);
		}

	} catch (error) {
		console.error(error);
	}
}

async function deleteChannel(id) {
	try {
		let response = await FetchModule._doDelete(
			{path: API.channelInfo(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't delete channel: ${responseStatuses[response.status]}`);
		}

	} catch (error) {
		console.error(error);
	}
}

async function leaveChannel(id) {
	try {
		let response = await FetchModule._doDelete(
			{path: API.channelLeave(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't leave channel: ${responseStatuses[response.status]}`);
		}

	} catch (error) {
		console.error(error);
	}
}
export {alterWrkspace, alterChannel, deleteChannel, leaveChannel};

