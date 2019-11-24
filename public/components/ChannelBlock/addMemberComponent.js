import BaseComponent from "../baseComponent";
import UserComponent from "./userComponent.js";
import {getAnyUserInfo} from "../../backendDataFetchers/gettingInfo";
import {addMemberinChannel} from "../../handlers/channelViewHandlers";
const addMemberTempl = require('./addMember.pug');
import {data} from "../../main.js";
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bem-chat-column.css';
import './bemChannelHeader/channelHeader/channel-header.css';
import './bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/bem-chat-column-main.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/msgwindow.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/InputBlock/input.css';
import '../ChatBlock/Message/chatMsg/chat-msg.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/MessageSettBlock/message-sett-block.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/typing-block.css';
class AddMemberComponent extends BaseComponent {

	contentListRootSelector = '.channel-add-form__prokrutka';

	render() {
		return addMemberTempl(this._data);
	}
	renderContent() {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		console.log(contentListRoot);
		this._data.membersOfWrkS.forEach(id=>{
			if(id != this._data.user.id) {
				getAnyUserInfo(id).then(user => {
					const userComponent = new UserComponent(user, contentListRoot);
					const userBlock = document.createElement('div');
					userBlock.className = 'member';
					userBlock.id = "member-" + user.id;
					userBlock.innerHTML = userComponent.render();
					contentListRoot.appendChild(userBlock);
					addMemberinChannel(userBlock, user.id, this._data.currentChannel);
				});
			}

		});

	}
}

export default AddMemberComponent;