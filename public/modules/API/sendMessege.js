import {settings} from '../config';
const {backend} = settings;
import {bus, FetchModule, router} from '../../main';
import {data} from "../../main";
import chatView from "../../views/chatView";

async function sendRight(text, id){
    try {
        let response = await FetchModule._doPost({
            path: `/chats/${id}/messages`,
            data: {
                text: text,
            },
            contentType: 'application/json;charset=utf-8'
        });
        if (response.status === 400) {
            showError("Wrong email or password");
            throw new Error(
                `Ошибочные данные: ${response.status}`);
        }
        if (response.status === 500) {
            showError("Server error:(");
            throw new Error(
                `Серверу плохо: ${response.status}`);
        }
        if (response.status === 200) {
        }
    }catch (error) {
        console.error(error);
    }
}

export default sendRight;