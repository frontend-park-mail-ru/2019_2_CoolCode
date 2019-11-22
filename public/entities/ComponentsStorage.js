import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import ChatComponent from "../components/ChatBlock/ChatComponent";
import WrkspacePageComponent from "../components/WrkSpacePage/wrkspacePageComponent";
import ChannelComponent from "../components/ChannelBlock/ChannelComponent";

class ComponentsStorage {
	constructor(leftColumn = null, chatBlock = null, wrkspacePage = null) {
		if (ComponentsStorage.__instance) {
			return ComponentsStorage.__instance;
		}

		this.leftColumn = leftColumn;
		this.chatBlock = chatBlock;
		this.wrkspacePage = wrkspacePage;

		ComponentsStorage.__instance = this;
	}
	clear() {
		this.leftColumn = null;
		this.chatBlock = null;
		this.wrkspacePage = null;
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

	getLeftColumn() {
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
		} catch (error) {
			console.log(error);
		}

	}

	getWrkspacePage() {
		return this.wrkspacePage;
	}
}

export default ComponentsStorage;