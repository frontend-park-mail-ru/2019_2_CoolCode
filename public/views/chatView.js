import BaseView from './baseView';
import MessageComponent from "../components/Message/Message";
import WrkSpaceComponent from "../components/WrkSpace/WrkSpace";
const headerTemplate = require('../components/Header/header.pug');
const containerTemplate = require('../components/Container/container.pug');
const profileTemplateLeft = require('../components/Profile/profilePage.pug');
const chatTemplateRight = require('../components/Chat/chat.pug');
import {createChatPage, assignSomeData, getUserPhoto} from "../modules/API/profile";
import searchInteraction from "../modules/API/searchInteraction";

import {data} from "../main";
import openWrkSpaceInfo from "../modules/API/wrkspaceInteraction";
import chatInput from "../modules/API/chatInteraction";

class chatView extends BaseView {

    contentListRootSelector = '.chat-msg-scroll';

    constructor (data, parent) {
    	super ({user:{}, wrkSpaces:[], chats: [], loggedIn: null}, parent);
    };

    drawAll() {
    	this.render();
    	searchInteraction();
    	openWrkSpaceInfo();
    	chatInput();
    }

    setUser() {
    	this._data.user = data.getUser();
    	this._data.loggedIn = data.loggedIn;
    }

    setContent() {

    	this._data.chats = data.userChats;
    	this._data.wrkspaces = data.userWrkSpaces;
    }

    show() {
    	console.log(this._data.loggedIn);
    	if (data.user !== undefined) {
    		this.setUser();
    		this.setContent();
    	}
    	if (JSON.stringify(this._data.user) === '{}' || this._data.user === undefined) { //TODO:пофиксить баг
    		createChatPage(this._parent);
    	} else {
    		this.drawAll();
    	}
    }

    drawBasics() {
    	this._parent.innerHTML = headerTemplate(this._data);
    	this._parent.innerHTML += containerTemplate(this._data);
    }

    drawLeftColumn() {
    	this._parent.querySelector('.column.left').innerHTML += profileTemplateLeft(this._data.user);
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.chats) {
    		this._data.chats.forEach((mes) => {
    		    console.log(mes);
    			const mess = new MessageComponent();
    			mess.data = mes;
    			const message = document.createElement('div');
    			message.className = 'row msg';
    			var id;
    			if (mes["Members"][0] == data.user.id) id = mes["Members"][1];
    			else message.id = mes["Members"][0];
    			message.id = "chat-" + id;
    			message.innerHTML = mess.render();
    			contentListRoot.appendChild(message);
    			getUserPhoto(id,"chat", ".messages-pic");
    		});
    	}

    	if (this._data.wrkspaces) {
    		this._data.wrkspaces.forEach((wsp) => {
    			const wrkSpace = new WrkSpaceComponent();
    			wrkSpace.data = wsp;
    			const w = wrkSpace.render();
    			contentListRoot.appendChild(w);
    		});
    	}
    }

    drawRightColumn() {
    	this._parent.querySelector('.column.right').innerHTML += chatTemplateRight(this._data.user);
    }

    render() {
    	this.drawBasics();
    	this.drawLeftColumn();
    	this.drawRightColumn();
    }

}

export default chatView;