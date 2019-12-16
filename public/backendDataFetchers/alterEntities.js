import {FetchModule} from "../main";
import {API, responseStatuses} from "../constants/config";

async function alterWrkspace(wrkspace) {
	const {id, name, members, admins} = wrkspace;
	console.log(` Changing wrkspace ${wrkspace.id} info`);
	try {
		const response = await FetchModule._doPut(
			{path: API.wrkspaceInfo(wrkspace.id), data: {
				id: id,
				name: name,
				members: members,
				admins: admins,
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
	const {id, name, members, admins} = channel;
	try {
		const response = await FetchModule._doPut(
			{path: API.channelInfo(channel.id),
				data:   {
					id: id,
					name: name,
					members: members,
					admins: admins
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
		const response = await FetchModule._doDelete(
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
		const response = await FetchModule._doDelete(
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

