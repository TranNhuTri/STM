let FightButton = BaseUI.extend({
    ctor: function () {
        this._super(LOBBY_UI.FIGHT_BUTTON);

        this.setScale(0.6, 0.6);

        let node = this._child;

        this._button = node.getChildByName("button");
        this._text = node.getChildByName("text");

        this._width = this._button.width * this.getScaleX();
        this._height = this._button.height * this.getScaleY();
    }
});