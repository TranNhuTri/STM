let EmptyTreasureSlot = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.TREASURE_SLOTS.EMPTY_UI);

        let node = this._child;

        this._background = node.getChildByName("background");
        this._text = node.getChildByName("text");

        this._width = this._background.width * this.getScaleX();
        this._height = this._background.height * this.getScaleY();
    },
})