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
				`Couldn't fetch wrkspace info: ${responseStatuses[response.status]}`);
		}
	} catch (error) {
		console.error(error);
	}
}
export {alterWrkspace};

