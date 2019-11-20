import BaseView from "./baseView";

class channeltView extends BaseView {

	constructor(data, parent) {
		super({
			viewType: "channel", user: {}, loggedIn: null,
			wrkSpaces: [], chats: [], currentChat: {},
			chatUser: {}, importantMessage: {}, chatMessages: [], chatUserPhoto: '../images/abkhazia.jpg',
		}, parent);
	};
}