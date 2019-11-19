import BaseComponent from "../baseComponent";
import ChatMessageComponent from "../ChatBlock/Message/ChatMessageComponent";
import WrkspacePageHeaderComponent from "./WrkspacePageBlocks/WrkspacePageHeader/wrkspacePageHeaderComponent";


class WrkspacePageComponent extends BaseComponent {

    contentListRootSelector = '.column_right';


    renderHeader() {
        const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
        const headerComponent = new WrkspacePageHeaderComponent(this._data, contentListRoot);
        contentListRoot.appendChild(headerComponent.render());
    }

    renderInfo() {

    }


    render() {
        this.renderHeader();
        this.renderInfo();
    }
}

export default WrkspacePageComponent;