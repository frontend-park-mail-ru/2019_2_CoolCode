import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import ChatComponent from "../components/ChatBlock/ChatComponent";

class ComponentsStorage {
	constructor(leftColumn = null, chatBlock = null) {
		if (ComponentsStorage.__instance) {
			return ComponentsStorage.__instance;
		}

		this.leftColumn = leftColumn;
		this.chatBlock = chatBlock;

		ComponentsStorage.__instance = this;
	}
	clear() {
		this.leftColumn = null;
		this.chatBlock = null;
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
			if (chatBlock instanceof ChatComponent) {
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
}

export default ComponentsStorage;