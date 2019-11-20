import BaseComponent from "../baseComponent";
import WrkspacePageHeaderComponent from "./WrkspacePageBlocks/WrkspacePageHeader/wrkspacePageHeaderComponent";
import WrkspacePageSearchComponent from "./WrkspacePageBlocks/WrkspacePageSearch/WrkspaceSearchPageComponent";

class WrkspacePageComponent extends BaseComponent {

    contentListRootSelector = '.column_right';

    renderHeader() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const headerComponent = new WrkspacePageHeaderComponent(this._data, contentListRoot);
    	contentListRoot.innerHTML += headerComponent.render();
    }

    renderInfo() {

    }

    renderSearchContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const searchComponent = new WrkspacePageSearchComponent(this._data, contentListRoot);
    	contentListRoot.innerHTML += searchComponent.render();
    }

    render() {
    	this.renderHeader();
    }
}

export default WrkspacePageComponent;