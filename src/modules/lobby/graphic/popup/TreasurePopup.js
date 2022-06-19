let TreasurePopup = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.HOME_TAB.TREASURE_POPUP_UI);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._treasureShelf = node.getChildByName("shelf_image");
        this._mapNameLabel = node.getChildByName("map_name");
        this._treasureTypeLabel = node.getChildByName("treasure_type");

        this.width = this._background.width * this._background.getScaleX();
        this.height = this._background.height * this._background.getScaleY() + this._treasureShelf.height * this._treasureShelf.getScaleY() / 2;
    },
});