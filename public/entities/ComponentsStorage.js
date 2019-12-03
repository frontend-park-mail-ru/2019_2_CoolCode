import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import ChatComponent from "../components/ChatBlock/ChatComponent";
import WrkspacePageComponent from "../components/WrkSpacePage/wrkspacePageComponent";
import ChannelComponent from "../components/ChannelBlock/ChannelComponent";
import ProfilePageComponent from "../components/ProfilePage/profilePageComponent";
import BasicsComponent from "../components/Basics/basicsComponent";

class ComponentsStorage {
	constructor(leftColumn = null, chatBlock = null, wrkspacePage = null, rightColumn = null, profileBlock = null, headerBlock = null) {
		if (ComponentsStorage.__instance) {
			return ComponentsStorage.__instance;
		}

		this.leftColumn = leftColumn;
		this.rightColumn = rightColumn;
		this.chatBlock = chatBlock;
		this.wrkspacePage = wrkspacePage;
		this.profileBlock = profileBlock;
		this.headerBlock = headerBlock;

		ComponentsStorage.__instance = this;
	}
	clear() {
		this.leftColumn = null;
		this.rightColumn = null;
		this.chatBlock = null;
		this.wrkspacePage = null;
		this.profileBlock = null;
		this.headerBlock = null;
	}

	setRightColumn(rightColumn) {
		this.rightColumn = rightColumn;
	}

	getRightColumn() {
		return this.rightColumn;
	}

	setHeader(leftColumn) {
		try {
			if (leftColumn instanceof BasicsComponent) {
				this.headerBlock = BasicsComponent;
			} else{
				throw new Error('Can\'t set headerBlock component');
			}
		} catch (error) {
			console.log(error);
		}

	}

	getHeader(data, parent) {
		if (!this.headerBlock) {
			let headerBlock = new BasicsComponent(data, parent);
			headerBlock.renderTo();
			this.setHeader(headerBlock);
		}
		return this.headerBlock;

	}

	setLeftColumn(leftColumn) {
		try {
			if (leftColumn instanceof ChatsColumnComponent) {
				this.leftColumn = leftColumn;
			} else{
				throw new Error('Can\'t set leftColumn component');
			}
		} catch (error) {
			console.log(error);
		}

	}
	clearLeftColumn() {
		this.leftColumn = null;
	}
	getLeftColumn(data, parent, rootSelector) {
		if (!this.leftColumn) {
			let leftColumn = new ChatsColumnComponent(data, parent);
			leftColumn.renderTo(rootSelector);
			this.setLeftColumn(leftColumn);
		} else {
			this.leftColumn.setData(data);
			this.leftColumn.setParent(parent);
		}
		return this.leftColumn;

	}

	setChatBlock(chatBlock) {
		try {
			if (chatBlock instanceof ChatComponent ||
				chatBlock instanceof ChannelComponent) {
				this.chatBlock = chatBlock;
			} else{
				throw new Error('Can\'t set chatBlock component');
			}
			this.setRightColumn(chatBlock);
		} catch (error) {
			console.log(error);
		}

	}

	getChatBlock() {
		return this.chatBlock;
	}

	setWrkspacePage(wrkspacePage) {
		try {
			if (wrkspacePage instanceof WrkspacePageComponent) {
				this.wrkspacePage = wrkspacePage;
			} else{
				throw new Error('Can\'t set wrkspacePage component');
			}
			this.setRightColumn(wrkspacePage);
		} catch (error) {
			console.log(error);
		}

	}

	getWrkspacePage() {
		return this.wrkspacePage;
	}

	setProfileBlock(profileBlock) {
		try {
			if (profileBlock instanceof ProfilePageComponent) {
				this.profileBlock = profileBlock;
			} else{
				throw new Error('Can\'t set wrkspacePage component');
			}
			this.setRightColumn(profileBlock);
		} catch (error) {
			console.log(error);
		}

	}

	getProfileBlock() {
		return this.profileBlock;
	}
}

export default ComponentsStorage;