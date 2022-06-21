let CardPanel = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.CARD_TAB.CARD_PANEL);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._title = node.getChildByName("title");
        this._sortButton = node.getChildByName("sort_button");
        this._sortButtonLabel = node.getChildByName("sort_button_text");

        this._width = this._background.width;
        this._height = this._background.height;
    },
});