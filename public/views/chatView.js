import BaseView from './baseView';
import MessageComponent from "../components/Message/Message";
import WrkSpaceComponent from "../components/WrkSpace/WrkSpace";
const headerTemplate = require('../components/Header/header.pug');
const containerTemplate = require('../components/Container/container.pug');
const profileTemplateLeft = require('../components/Profile/profilePage.pug');
const profileTemplateRight = require('../components/Profile/profile.pug');
import {createChatPage, assignSomeData, getUserPhoto} from "../modules/API/profile";
import searchInteraction from "../modules/API/searchInteraction";

import {data} from "../main";
import openWrkSpaceInfo from "../modules/API/wrkspaceInteraction";

class chatView extends BaseView {

    contentListRootSelector = '.chat-msg';

    constructor (data, parent) {
    	super ({user:{}, wrkSpaces:[], chats: [], loggedIn: null}, parent);
    };

    createEvents() {
    	this._bus.on('drawChatPage', this.drawAll.bind(this));
    	this._bus.on('fetchUser', createChatPage);
    	this._bus.on('setUser', this.setUser.bind(this));
    	this._bus.on('setContent', this.setContent.bind(this));
    }

    deleteEvents() {
    	this._bus.off('drawChatPage', this.drawAll.bind(this));
    	this._bus.off('fetchUser', createChatPage);
    	this._bus.off('setUser', this.setUser.bind(this));
    	this._bus.off('setContent', this.setContent.bind(this));
    }

    drawAll() {
    	this.render();
    	searchInteraction();
    	openWrkSpaceInfo();
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
    	this.createEvents();
    	console.log(this._data.loggedIn);
    	if (data.user !== undefined) {
    		this._bus.emit('setUser');
    		this._bus.emit('setContent');
    	}
    	if (JSON.stringify(this._data.user) === '{}' || this._data.user === undefined) { //TODO:пофиксить баг
    		this._bus.emit('fetchUser', this._parent);
    	} else {
    		this._bus.emit('drawChatPage');
    	}
    	this.deleteEvents();
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
    	this._parent.querySelector('.column.right').innerHTML = " draw chat ::: ))) ";
    }

    render() {
    	this.drawBasics();
    	this.drawLeftColumn();
    	this.drawRightColumn();
    }

}

export default chatView;