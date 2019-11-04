import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";

class ComponentsStorage {
	constructor(leftColumn = null) {
		if (ComponentsStorage.__instance) {
			return ComponentsStorage.__instance;
		}

		this.leftColumn = leftColumn;

		ComponentsStorage.__instance = this;
	}
	clear() {
		this.leftColumn = null;
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
}

export default ComponentsStorage;