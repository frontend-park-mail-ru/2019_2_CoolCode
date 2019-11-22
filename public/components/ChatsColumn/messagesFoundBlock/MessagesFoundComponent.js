import BaseComponent from "../../baseComponent";
import {data, bus, router} from "../../../main";
import MessageComponent from "../Message/MessageComponent";
const MessagesFoundBlockTemplate = require('./messagesFoundBlock.pug');

import '../ChatsBlock/bemChatsBlock/bem-chats-block.css';

class MessagesFoundBlockComponent extends BaseComponent {
    contentListRootSelector = '.chats-block__content';

    render() {
    	return MessagesFoundBlockTemplate(this._data);
    }

    renderContent() {
    }
}

export default MessagesFoundBlockComponent;