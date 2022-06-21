let FinishTreasureSlot = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.HOME_TAB.TREASURE_SLOTS.FINISHED_UI);

        let node = this._child;

        this._background = node.getChildByName("background");

        this._width = this._background.width * this.getScaleX();
        this._height = this._background.height * this.getScaleY();
    }
})