import {FetchModule} from "../main";
import {API} from "../constants/config";

async function getChatFile(chatId, fileId) {
	console.log(` Getting file ${fileId}`);
	try {
		const response = await FetchModule._doGet(
			{path: API.messageFileRequest(chatId, fileId)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user photo: ${response.status}`);
		}
		console.log("AAA", response);
		return await response.blob();
	} catch (error) {
		console.error(error);
		return null;
	}
}

export {getChatFile};