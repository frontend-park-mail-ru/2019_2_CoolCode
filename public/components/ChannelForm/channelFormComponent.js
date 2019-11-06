import BaseComponent from "../baseComponent";
const channelFormTemplate = require('./channelForm.pug');

class ChannelFormComponent extends BaseComponent {

	render() {
		return channelFormTemplate(this._data);
	}
}

export default ChannelFormComponent;